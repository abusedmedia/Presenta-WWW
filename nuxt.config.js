import fs from 'fs'
import path from 'path'

import Mode from 'frontmatter-markdown-loader/mode'
import MarkdownIt from 'markdown-it'
import mip from 'markdown-it-prism'

import { descending } from 'd3'
import glob from 'glob'
const frontmatter = require('@github-docs/frontmatter')
let files = glob.sync('**/*.md', { cwd: 'content' })

const list = files.map(d => {
  const folder = d.substr(0, d.indexOf('/'))
  const slug = d.substr(0, d.lastIndexOf('.'))
  const name = slug.replace(folder + '/', '')
  return { name: name, url: `/${slug}`, path: `/${slug}`, folder: folder }
})

files = list.map(d => d.url)

// BLOG
let blogposts = list.filter(d => d.folder === 'blog')
blogposts.forEach(d => {
  const markdown = fs.readFileSync('content' + d.url + '.md')
  const doc = frontmatter(markdown)
  d.title = doc.data.title
  d.date = doc.data.date
  d.home = doc.data.home
  d.draft = doc.data.draft
})

blogposts = blogposts.filter(d => !d.draft)

blogposts.sort((a, b) => {
  return descending(a.date, b.date)
})

fs.writeFileSync('content/blog/list.json', JSON.stringify(blogposts))

//

const md = new MarkdownIt({
  html: true,
  typographer: true
})
md.use(mip)

export default {
  // env: {
  //   backendServiceUrl: process.env.BACKEND_SERVICE_URL || 'https://tw-follow-me.firebaseio.com/presenta_email.json'
  // },
  head: {
    titleTemplate: '%s @ Presenta - The Automation and Data-Driven Presentation Platform',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },

      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Presenta, a data-driven presentation platform' },
      { property: 'og:description', content: 'Build presentations the modern way.' },

      { hid: 'ogtit', property: 'og:title', content: 'Presenta, a data-driven presentation platform' },
      { hid: 'ogurl', property: 'og:url', content: 'https://www.presenta.cc/' },
      { hid: 'ogimg', property: 'og:image', content: 'https://www.presenta.cc/social.png' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@fabiofranchino' },
      { name: 'twitter:creator', content: '@fabiofranchino' },
      { name: 'twitter:description', content: 'Build presentations the modern way.' },

      { hid: 'twtit', name: 'twitter:title', content: 'Presenta, a data-driven presentation platform' },
      { hid: 'twurl', name: 'twitter:url', content: 'https://www.presenta.cc/' },
      { hid: 'twimg', name: 'twitter:image', content: 'https://www.presenta.cc/social.png' },

      { hid: 'description', name: 'description', content: 'Presenta, a data-driven presentation platform. Build presentations the modern way.' },
      { hid: 'keywords', name: 'keywords', content: 'presentation, data, information, presenting, speech, pitch' },
      { hid: 'author', name: 'author', content: 'Fabio Franchino' },
      { hid: 'published_time', name: 'article:published_time', content: '' }

    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,900;1,400&display=swap' },
      { rel: 'icon', href: '/favicon.png' }
    ]
  },
  css: [
    '~/css/normalize.css',
    '~/css/style.css',
    '@/assets/prism.css'
  ],

  // plugins: [
  //   { src: '~plugins/ga.js', ssr: false }
  // ],
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content/'),
        options: {
          // mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
          // vue: {
          //   root: 'dynamicMarkdown'
          // },
          markdown (body) {
            return md.render(body)
          }
        }
      })
    }
  },
  generate: {
    routes: files
  },
  modules: [
    '@nuxtjs/sitemap',
    ['nuxt-canonical', { baseUrl: 'https://www.presenta.cc' }]
  ],
  sitemap: {
    hostname: 'https://www.presenta.cc'
  }
}
