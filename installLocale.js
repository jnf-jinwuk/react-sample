/* eslint-disable */
const path = require('path')
const download = require('download')
const extract = require('extract-zip')
const fs = require('fs')

const srcURLs = [
  {
    url: 'http://192.168.0.213:29001/api/alt/v1/download/GBNET/WEB?format=json',
    path: 'gbnet',
  },
]

const zipPath = path.join(
  process.cwd(),
  'src',
  'resources',
  'message',
  'gbnet.zip',
)
const localesPath = path.join(process.cwd(), 'src', 'resources', 'message')

const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

const main = async () => {
  try {
    for (const srcURL of srcURLs) {
      ensureDirectoryExists(path.dirname(zipPath)) // Ensure the directory exists before downloading

      if (fs.existsSync(zipPath)) {
        fs.unlinkSync(zipPath)
      }

      console.log(`Downloading from ${srcURL.url} to ${zipPath}`)
      await download(srcURL.url, path.dirname(zipPath), {
        filename: 'gbnet.zip',
      })

      const outputPath = path.join(localesPath, srcURL.path)
      ensureDirectoryExists(outputPath)

      console.log(`Extracting ${zipPath} to ${outputPath}`)
      await extract(zipPath, { dir: outputPath })

      fs.unlinkSync(zipPath)
      console.log('> gbnet.zip Deleted')
    }
  } catch (e) {
    console.error('An error occurred:', e)
  }
}

;(async () => {
  await main()
})()
