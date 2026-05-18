// Unsplash 스톡 JPG + 추가 PPT PNG를 WebP로 변환
import sharp from 'sharp'
import { readdir, stat, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const IMG_DIR = path.resolve(__dirname, '../src/assets/images')
const STOCK_DIR = path.join(IMG_DIR, 'stock')

const STOCK_CFG = { width: 1600, quality: 80 }
const PPT_CFG = { width: 1800, quality: 78 }

for (const file of await readdir(STOCK_DIR)) {
  if (!file.endsWith('.jpg')) continue
  const inPath = path.join(STOCK_DIR, file)
  const outPath = path.join(STOCK_DIR, file.replace(/\.jpg$/, '.webp'))
  const before = (await stat(inPath)).size
  await sharp(inPath)
    .resize({ width: STOCK_CFG.width, withoutEnlargement: true })
    .webp({ quality: STOCK_CFG.quality, effort: 5 })
    .toFile(outPath)
  const after = (await stat(outPath)).size
  console.log(
    `stock/${file} → ${path.basename(outPath)}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`
  )
  await rm(inPath)
}

const extraPng = 'warehouse-interior.png'
const inPath = path.join(IMG_DIR, extraPng)
const outPath = path.join(IMG_DIR, extraPng.replace(/\.png$/, '.webp'))
try {
  const before = (await stat(inPath)).size
  await sharp(inPath)
    .resize({ width: PPT_CFG.width, withoutEnlargement: true })
    .webp({ quality: PPT_CFG.quality, effort: 5 })
    .toFile(outPath)
  const after = (await stat(outPath)).size
  console.log(
    `${extraPng} → ${path.basename(outPath)}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`
  )
  await rm(inPath)
} catch {}

console.log('done')
