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
  d.public = doc.data.public
  d.category = doc.data.category
  d.tags = doc.data.tags || ''
  d.cover = doc.data.cover,
  d.$body = doc.data.title + '\n\n\n' + 'https://www.presenta.cc' + d.url + '\n\n' + d.tags
})

blogposts = blogposts.filter(d => d.public)

blogposts.sort((a, b) => {
  return descending(a.date, b.date)
})

// enable when there will be the blog again
fs.writeFileSync('content/blog/list.json', JSON.stringify(blogposts))
fs.writeFileSync('static/bloglist.json', JSON.stringify(blogposts))

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
  target: 'static',
  components: true,
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    titleTemplate: '%s @ PRESENTA - Dynamic Images for Marketing Automation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },

      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Presenta, data-driven documents generation' },
      { property: 'og:description', content: 'Build documents the modern way.' },

      { hid: 'ogtit', property: 'og:title', content: 'Presenta, data-driven documents generation' },
      { hid: 'ogurl', property: 'og:url', content: 'https://www.presenta.cc/' },
      { hid: 'ogimg', property: 'og:image', content: 'https://www.presenta.cc/social.png' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@presentasw' },
      { name: 'twitter:creator', content: '@presentasw' },
      { name: 'twitter:description', content: 'Build documents the modern way.' },

      { hid: 'twtit', name: 'twitter:title', content: 'Presenta, data-driven documents generation' },
      { hid: 'twurl', name: 'twitter:url', content: 'https://www.presenta.cc/' },
      { hid: 'twimg', name: 'twitter:image', content: 'https://www.presenta.cc/social.png' },

      { hid: 'description', name: 'description', content: 'Presenta, data-driven documents generation. Build documents the modern way.' },
      { hid: 'keywords', name: 'keywords', content: 'automation, automate, documents, pdf, images, reports, generation, data, data-driven, api, cloud' },
      { hid: 'author', name: 'author', content: 'Fabio Franchino' },
      { hid: 'published_time', name: 'article:published_time', content: '' }

    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,900;1,400&display=swap' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,600;0,900;1,400;1,600&display=swap' },
      { rel: 'icon', href: '/favicon.png' }
    ]
  },
  css: [
    '~/css/normalize.css',
    '~/css/style.css',
    '@/assets/prism.css'
  ],

  plugins: [
    // { src: '~plugins/ga.js', ssr: false },
    { src: '~/plugins/syntax' },
    { src: '~/plugins/presenta', mode: 'client' }
    // { src: '~/plugins/crisp', mode: 'client' }
  ],
  build: {
    transpile: [
      '@presenta/config-interpolator'
    ],
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
    ['nuxt-canonical', { baseUrl: 'https://www.presenta.cc', trailingSlashes: false }]
  ],
  sitemap: {
    hostname: 'https://www.presenta.cc'
  }
}
