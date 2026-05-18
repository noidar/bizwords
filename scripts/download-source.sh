#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# download-source.sh
# Downloads all Business English for Success source files from dspace.lib.hawaii.edu
# Run this script from the bizwords/ project root:
#   chmod +x scripts/download-source.sh
#   ./scripts/download-source.sh
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

DEST="source-materials"
mkdir -p "$DEST"

echo "📥 Downloading Business English for Success source files..."
echo ""

download() {
  local url="$1"
  local name="$2"
  if [ -f "$DEST/$name" ]; then
    echo "✅ Already exists: $name (skipping)"
  else
    echo "⬇  $name"
    curl -L --progress-bar -o "$DEST/$name" "$url"
    echo "   ✓ Saved to $DEST/$name"
  fi
}

download \
  "https://dspace.lib.hawaii.edu/bitstreams/d6aa6949-5498-40c8-a6a9-cb462872f604/download" \
  "Business_English_for_Success.pdf"

download \
  "https://dspace.lib.hawaii.edu/bitstreams/defcc0e3-3e02-4dd0-9adb-5924bd1f7aaa/download" \
  "Business_English_Images_1.zip"

download \
  "https://dspace.lib.hawaii.edu/bitstreams/098e02b3-cc85-4dd4-a300-009a3986156e/download" \
  "Business_English_Images_2.zip"

download \
  "https://dspace.lib.hawaii.edu/bitstreams/19eda734-efed-4649-a749-7c4016dff44e/download" \
  "Business_English_HTML.zip"

echo ""
echo "📦 Extracting HTML files..."
mkdir -p "$DEST/html"
unzip -qo "$DEST/Business_English_HTML.zip" -d "$DEST/html" 2>/dev/null || \
  echo "⚠️  HTML zip not yet downloaded — run the script again after download completes"

echo ""
echo "📦 Extracting images..."
mkdir -p "$DEST/images"
unzip -qo "$DEST/Business_English_Images_1.zip" -d "$DEST/images" 2>/dev/null && \
unzip -qo "$DEST/Business_English_Images_2.zip" -d "$DEST/images" 2>/dev/null || \
  echo "⚠️  Image zips not yet downloaded — run the script again after download completes"

echo ""
echo "🔍 Running HTML parser..."
node scripts/parse-html.mjs

echo ""
echo "✅ Done! Parsed content written to data/textbook-parsed.json"
echo "   Open http://localhost:3000/textbook to read it in the app."
