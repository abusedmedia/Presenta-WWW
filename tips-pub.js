const fs = require('fs')
const slugify = require('slugify')
const moment = require('dayjs')
const path = require('path')

const FOLD = 'tips-draft'

const logs = fs.readdirSync('./' + FOLD)
const newfiles = logs.filter(f => {
  // no start with date and no start with .
  return !f.match(/\d\d\d\d-\d\d-\d\d/) && !f.match(/^[\.]/)
})

newfiles.forEach(f => {
  let src = fs.readFileSync(`./${FOLD}/${f}`, 'utf8')
  const rawtitle = f.split('.')[0]
  const title = rawtitle
  const filename = slugify(title).toLowerCase()

  src = src.replace(title, '')

  let re = /!\[(.*)\]\((.*)\)/gim
  let mtc = src.match(re)

  if (mtc) {
    mtc.forEach(d => {
      re = /!\[(.*)\]\((.*)\)/gim
      const rex = re.exec(d)
      const r = parseInt(Math.random() * 1000)
      const absPath = path.resolve(FOLD, rex[2])

      const assetName = slugify(`n${r}_` + path.basename(absPath)).toLowerCase()

      const newpath = `./static/tips/${assetName}`
      fs.renameSync(absPath, newpath)

      const newtag = `![](/tips/${assetName})`
      src = src.replace(rex[0], newtag)
    })
  }

  const today = moment().subtract(4, 'hours')

  const frontmatter = `---
title: ${title}
date: ${today.format('YYYY-MM-DD HH:mm:00 +0100')}
category: tips
tags: "#TIL #tip"
---

`
  const dest = frontmatter + src
  const finalname = `${today.format('YYYY-MM-DD')}-${filename}.md`
  fs.writeFileSync(`./content/tips/${finalname}`, dest)
  fs.unlinkSync(`./${FOLD}/${f}`)
})
