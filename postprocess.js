const fs = require('fs')
const path = require('path')

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      if (path.extname(file) === '.html') {
        arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
      }
    }
  })

  return arrayOfFiles
}


const addCDNBaseToImages = html => {

  const baseUrl = 'https://ajahofrzam.cloudimg.io/v7/_pcc_'
  const regex = /<img[^>]+src="(?!http)([^">]+)"/g
  const updatedHTML = html.replace(regex, `<img src="${baseUrl}$1"`)
  return updatedHTML

}

const files = getAllFiles('./dist')

files.forEach(file => {
  let f = fs.readFileSync(file, 'utf-8')
  f = addCDNBaseToImages(f)
  fs.writeFileSync(file, f, 'utf-8')
})
