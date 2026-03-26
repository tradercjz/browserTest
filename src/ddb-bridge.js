/**
 * Bridge: exposes ddb functions as globals for background.js to call.
 * This file gets bundled by esbuild into dist/ddb-bundle.js.
 */
import { ddbConnect, ddbExecute, ddbDisconnect, ddbStatus, ddbAutoRestore } from './ddb.js';

// Attach to globalThis so background.js can access them
globalThis.__ddb = {
  connect: ddbConnect,
  execute: ddbExecute,
  disconnect: ddbDisconnect,
  status: ddbStatus,
  autoRestore: ddbAutoRestore,
};
