/**
 * Generates solid-colour placeholder images in WebP + AVIF.
 * Replace with real photos by running optimize-images.mjs once originals are available.
 *
 * Colour: #1c1c1e (--surface-ink) — matches the existing UI placeholder exactly.
 */

import sharp from 'sharp'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUTPUT_DIR = join(ROOT, 'public', 'images')

mkdirSync(OUTPUT_DIR, { recursive: true })

// { r, g, b } for #1c1c1e
const BG = { r: 28, g: 28, b: 30 }

// Aspect ratio: 16:9 for hero/region heroes; card images ~360×200 (16:9 crop)
function height(w) { return Math.round(w * 9 / 16) }

const variants = [
  { name: 'hero',    widths: [768, 1280, 1920] },
  { name: 'algarve', widths: [360, 720, 1280, 1920] },
  { name: 'lisbon',  widths: [360, 720, 1280, 1920] },
  { name: 'porto',   widths: [360, 720, 1280, 1920] },
]

for (const { name, widths } of variants) {
  for (const w of widths) {
    const h = height(w)
    const base = join(OUTPUT_DIR, `${name}-${w}`)
    const buf = { create: { width: w, height: h, channels: 3, background: BG } }
    await sharp(buf).webp({ quality: 80 }).toFile(`${base}.webp`)
    await sharp(buf).avif({ quality: 55 }).toFile(`${base}.avif`)
    console.log(`✓  ${name}-${w}  (${w}×${h})`)
  }
}

console.log('\nPlaceholders written to public/images/.')
