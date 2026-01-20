import { cpSync, mkdirSync, existsSync, rmSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Source and destination directories
const projectRoot = resolve(__dirname, '../..')
const publicDir = resolve(__dirname, '../public/content')

// Content directories to copy
const contentDirs = [
  'lesson-modules',
  'team-context',
  'prompt-library',
  'sample-files'
]

// Clean existing content directory
if (existsSync(publicDir)) {
  rmSync(publicDir, { recursive: true })
}

// Create content directory
mkdirSync(publicDir, { recursive: true })

// Copy each content directory
for (const dir of contentDirs) {
  const src = resolve(projectRoot, dir)
  const dest = resolve(publicDir, dir)

  if (existsSync(src)) {
    cpSync(src, dest, { recursive: true })
    console.log(`Copied: ${dir}`)
  } else {
    console.warn(`Warning: ${dir} not found`)
  }
}

console.log('\nContent copied successfully!')
