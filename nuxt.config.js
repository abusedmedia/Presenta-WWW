import fs from 'fs'

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

const blogposts = list.filter(d => d.folder === 'blog')
;(async () => {
  blogposts.forEach(async d => {
    const markdown = fs.readFileSync('content' + d.url + '.md')
    const doc = frontmatter(markdown)
    d.title = doc.data.title
    d.date = doc.data.date
    d.home = doc.data.home
  })

  blogposts.sort((a, b) => {
    return a.date < b.date
  })

  fs.writeFileSync('content/blog/list.json', JSON.stringify(blogposts))
})()

export default {
  mode: 'universal',
  env: {
    backendServiceUrl: process.env.BACKEND_SERVICE_URL || 'https://tw-follow-me.firebaseio.com/presenta_email.json'
  },
  head: {
    titleTemplate: '%s @ Presenta - A presentation tool',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },

      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Presenta, a presentation tool' },
      { property: 'og:description', content: 'Build presentations the modern way.' },

      { hid: 'ogtit', property: 'og:title', content: 'Presenta, a presentation tool' },
      { hid: 'ogurl', property: 'og:url', content: 'https://www.presenta.cc/' },
      { hid: 'ogimg', property: 'og:image', content: 'https://www.presenta.cc/social.png' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@fabiofranchino' },
      { name: 'twitter:creator', content: '@fabiofranchino' },
      { name: 'twitter:description', content: 'Build presentations the modern way.' },

      { hid: 'twtit', name: 'twitter:title', content: 'Presenta, a presentation tool' },
      { hid: 'twurl', name: 'twitter:url', content: 'https://www.presenta.cc/' },
      { hid: 'twimg', name: 'twitter:image', content: 'https://www.presenta.cc/social.png' },

      { hid: 'description', name: 'description', content: 'Presenta, a presentation tool. Build presentations the modern way.' },
      { hid: 'keywords', name: 'keywords', content: 'presentation, data, information, presenting, speech, pitch' },
      { hid: 'author', name: 'author', content: 'Fabio Franchino' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/umd8hrf.css' },
      { rel: 'icon', href: '/favicon.png' }
    ]
  },
  css: [
    '~/css/normalize.css',
    '~/css/style.css'
  ],

  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader'
        // include: path.resolve(__dirname, 'content/')
      })
    }
  },
  generate: {
    routes: files
  },
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://www.presenta.cc'
  }
}
