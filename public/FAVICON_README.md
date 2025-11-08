# Favicon Files

This directory should contain the following favicon files for production:

## Required Files

1. **favicon.svg** - ✅ Created (SVG format, works in modern browsers)
2. **favicon-16x16.png** - ⚠️ Needs to be generated (16x16 PNG)
3. **favicon-32x32.png** - ⚠️ Needs to be generated (32x32 PNG)
4. **apple-touch-icon.png** - ⚠️ Needs to be generated (180x180 PNG)
5. **favicon.ico** - ⚠️ Optional (fallback for older browsers)

## How to Generate Favicons

### Option 1: Online Tools
- Use [Favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/)
- Upload your logo/design
- Download all sizes

### Option 2: Using ImageMagick (if installed)
```bash
# Convert SVG to PNG sizes
convert -background none -resize 16x16 favicon.svg favicon-16x16.png
convert -background none -resize 32x32 favicon.svg favicon-32x32.png
convert -background none -resize 180x180 favicon.svg apple-touch-icon.png
```

### Option 3: Using Node.js (sharp package)
```bash
npm install -D sharp
node scripts/generate-favicons.js
```

## Current Status

- ✅ `site.webmanifest` - Created
- ✅ `favicon.svg` - Created (SVG format)
- ⚠️ PNG icons - Need to be generated from SVG or design

The site will work with just the SVG favicon, but PNG versions are recommended for better browser compatibility.
