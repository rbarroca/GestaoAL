/**
 * Image optimisation pipeline — Design System AL v1.0
 *
 * Source photos (download originals to src/assets/images/originals/):
 *   hero.jpg    https://unsplash.com/photos/aerial-photo-of-beach-k89cvE4zY2A
 *   algarve.jpg https://unsplash.com/photos/a-scenic-view-of-a-body-of-water-near-a-rocky-cliff-WJQ39Q1rpgA
 *   lisbon.jpg  https://unsplash.com/photos/yellow-and-white-tram-on-road-during-daytime-ljhCEaHYWJ8
 *   porto.jpg   https://unsplash.com/photos/boat-sailing-near-bridge-6ckFibuzLAU
 *
 * Usage:
 *   npm run optimize:images
 *
 * Output: public/images/*.webp and *.avif
 * Originals are git-ignored (see .gitignore).
 */

import sharp from 'sharp'
import { existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const INPUT_DIR = join(ROOT, 'src', 'assets', 'images', 'originals')
const OUTPUT_DIR = join(ROOT, 'public', 'images')

mkdirSync(OUTPUT_DIR, { recursive: true })

// Quality settings (tune if PageSpeed mobile LCP > 2.5s)
const WEBP_QUALITY = 80
const AVIF_QUALITY = 55

const images = [
  {
    name: 'hero',
    widths: [768, 1280, 1920],
    height: null, // preserve aspect ratio
  },
  {
    name: 'algarve',
    widths: [360, 720, 1280, 1920],
    height: null,
  },
  {
    name: 'lisbon',
    widths: [360, 720, 1280, 1920],
    height: null,
  },
  {
    name: 'porto',
    widths: [360, 720, 1280, 1920],
    height: null,
  },
]

async function optimise(name, widths) {
  const input = join(INPUT_DIR, `${name}.jpg`)
  if (!existsSync(input)) {
    console.warn(`⚠  ${name}.jpg not found — skipping (place original in src/assets/images/originals/)`)
    return
  }
  for (const w of widths) {
    const base = join(OUTPUT_DIR, `${name}-${w}`)
    await sharp(input).resize({ width: w }).webp({ quality: WEBP_QUALITY }).toFile(`${base}.webp`)
    await sharp(input).resize({ width: w }).avif({ quality: AVIF_QUALITY }).toFile(`${base}.avif`)
    console.log(`✓  ${name}-${w}.webp + .avif`)
  }
}

console.log('Optimising images…\n')
for (const img of images) {
  await optimise(img.name, img.widths)
}
console.log('\nDone. Commit public/images/ to include in build.')
