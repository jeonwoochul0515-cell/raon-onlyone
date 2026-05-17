// src/assets/images 의 PNG를 WebP로 변환·리사이즈 (sharp 사용)
import sharp from 'sharp'
import { readdir, stat, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const IMG_DIR = path.resolve(__dirname, '../src/assets/images')

const targets = [
  { match: /warehouse/, width: 2000, quality: 78 },
  { match: /raon-jena-hero/, width: 1400, quality: 82 },
  { match: /truck/, width: 1400, quality: 80 },
  { match: /hq-aerial/, width: 1400, quality: 78 },
  { match: /product-/, width: 900, quality: 85 },
]

const files = await readdir(IMG_DIR)
for (const file of files) {
  if (!file.endsWith('.png')) continue
  const target = targets.find(t => t.match.test(file))
  if (!target) continue

  const inPath = path.join(IMG_DIR, file)
  const outPath = path.join(IMG_DIR, file.replace(/\.png$/, '.webp'))

  const before = (await stat(inPath)).size
  await sharp(inPath)
    .resize({ width: target.width, withoutEnlargement: true })
    .webp({ quality: target.quality, effort: 5 })
    .toFile(outPath)
  const after = (await stat(outPath)).size

  console.log(
    `${file} → ${path.basename(outPath)}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`
  )
  await rm(inPath)
}
console.log('done')
