#!/bin/bash
# Build script for DolphinMind Browser Extension
# Output: dolphinmind-extension.zip

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUTPUT="$SCRIPT_DIR/dolphinmind-extension.zip"

echo "📦 Packaging DolphinMind Browser Extension..."

cd "$SCRIPT_DIR"

# Remove old build
rm -f "$OUTPUT"

# Create zip excluding dev/test files
zip -r "$OUTPUT" \
  manifest.json \
  background.js \
  injector.js \
  overlay.js \
  sidepanel.html \
  sidepanel.js \
  controller.html \
  screenshot.jpg \
  src/ \
  -x "*.DS_Store"

echo "✅ Built: $OUTPUT ($(du -h "$OUTPUT" | cut -f1))"
echo ""
echo "To upload to OSS:"
echo "  ossutil cp $OUTPUT oss://your-bucket/dolphinmind-extension.zip"
