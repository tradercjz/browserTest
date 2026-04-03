/**
 * DolphinDB connection module for Chrome Extension background service worker.
 * Uses the official `dolphindb` npm package (WebSocket connection).
 */

import { DDB } from 'dolphindb';

let ddb = null;
let ddbConfig = null;
let ddbConnected = false;

/**
 * Connect to a DolphinDB server.
 * @param {string} host
 * @param {number} port
 * @param {string} user
 * @param {string} pass
 */
export async function ddbConnect(host, port, user, pass) {
  // Disconnect existing connection if any
  if (ddb) {
    try { ddb.disconnect(); } catch {}
    ddb = null;
    ddbConnected = false;
  }

  const url = `ws://${host}:${port}`;
  ddb = new DDB(url, {
    autologin: !!user,
    username: user || '',
    password: pass || '',
  });

  await ddb.connect();

  ddbConfig = { host, port, user, pass };
  ddbConnected = true;

  // Persist config
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ ddbConfig });
  }

  return { connected: true, url };
}

/**
 * Execute a DolphinDB script and return the raw DdbObj result.
 * background.js handles structured conversion to JSON.
 * @param {string} script
 * @returns {Promise<any>}
 */
export async function ddbExecute(script) {
  if (!ddb || !ddbConnected) {
    throw new Error('DolphinDB 未连接');
  }

  const result = await ddb.eval(script);

  // Return raw DdbObj — let background.js handle structured conversion
  return result;
}

/**
 * Disconnect from DolphinDB.
 */
export function ddbDisconnect() {
  if (ddb) {
    try { ddb.disconnect(); } catch {}
    ddb = null;
  }
  ddbConnected = false;
  ddbConfig = null;

  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.remove('ddbConfig');
  }

  return { connected: false };
}

/**
 * Get current connection status.
 */
export function ddbStatus() {
  return {
    connected: ddbConnected,
    config: ddbConfig ? { host: ddbConfig.host, port: ddbConfig.port, user: ddbConfig.user } : null,
  };
}

/**
 * Auto-restore connection from persisted config (called on startup).
 */
export async function ddbAutoRestore() {
  if (typeof chrome === 'undefined' || !chrome.storage) return;

  return new Promise((resolve) => {
    chrome.storage.local.get(['ddbConfig'], async (result) => {
      if (result.ddbConfig) {
        const { host, port, user, pass } = result.ddbConfig;
        try {
          await ddbConnect(host, port, user, pass);
          console.log('✅ DolphinDB auto-restored connection to', `${host}:${port}`);
        } catch (e) {
          console.log('⚠️ DolphinDB auto-restore failed:', e.message);
        }
      }
      resolve();
    });
  });
}

export async function ddbCall(funcName, args) {
  if (!ddb || !ddbConnected) throw new Error('DolphinDB 未连接');
  return await ddb.call(funcName, args);
}

export async function ddbInvoke(funcName, args) {
  if (!ddb || !ddbConnected) throw new Error('DolphinDB 未连接');
  return await ddb.invoke(funcName, args);
}

/**
 * Format DDB result for display.
 */
function formatResult(result) {
  if (result === null || result === undefined) return 'void';

  // Scalar types
  if (typeof result === 'string' || typeof result === 'number' || typeof result === 'boolean') {
    return String(result);
  }

  // DDB table result (has `data` and `columns` or similar structure)
  if (result.value !== undefined) {
    return formatDDBValue(result);
  }

  // Plain object/array
  try {
    return JSON.stringify(result, null, 2);
  } catch {
    return String(result);
  }
}

function formatDDBValue(obj) {
  // The dolphindb package returns objects with .value, .type, .rows, .columns etc.
  const val = obj.value;

  if (val === null || val === undefined) return 'NULL';

  // Table: array of columns
  if (Array.isArray(obj.columns) && Array.isArray(val)) {
    return formatTable(obj.columns, val, obj.rows);
  }

  // Vector
  if (Array.isArray(val)) {
    if (val.length > 100) {
      return `[${val.slice(0, 50).join(', ')}, ... (${val.length} items)]`;
    }
    return `[${val.join(', ')}]`;
  }

  return String(val);
}

function formatTable(columns, colData, rowCount) {
  if (!columns.length || !rowCount) return '(empty table)';

  const maxRows = Math.min(rowCount, 20);
  const lines = [];

  // Header
  lines.push(columns.join('\t'));
  lines.push(columns.map(() => '---').join('\t'));

  // Rows
  for (let r = 0; r < maxRows; r++) {
    const row = columns.map((_, ci) => {
      const v = colData[ci]?.[r];
      return v === null || v === undefined ? '' : String(v);
    });
    lines.push(row.join('\t'));
  }

  if (rowCount > maxRows) {
    lines.push(`... (${rowCount} rows total)`);
  }

  return lines.join('\n');
}
