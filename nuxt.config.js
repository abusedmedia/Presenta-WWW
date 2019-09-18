import path from 'path'

import glob from 'glob'
const files = glob.sync('**/*', { cwd: 'content' })

function getSlugs (post, _) {
  const slug = post.substr(0, post.lastIndexOf('.'))
  return `/${slug}`
}

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

      { property: 'og:title', content: 'Presenta, a presentation tool' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.presenta.cc/' },
      { property: 'og:site_name', content: 'Presenta, a presentation tool' },
      { property: 'og:description', content: 'Build presentations the modern way.' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@fabiofranchino' },
      { name: 'twitter:creator', content: '@fabiofranchino' },
      { name: 'twitter:url', content: 'https://www.presenta.cc/' },
      { hid: 'twittertitle', name: 'twitter:title', content: 'Presenta, a presentation tool' },
      { name: 'twitter:description', content: 'Build presentations the modern way.' },

      { hid: 'description', name: 'description', content: 'Presenta, a presentation tool. Build presentations the modern way.' },
      { hid: 'keywords', name: 'keywords', content: 'presentation, data, information, presenting, speech, pitch' },
      { hid: 'author', name: 'author', content: 'Fabio Franchino' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/umd8hrf.css' },
      { rel: 'favicon', href: 'favicon.png' }
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
    routes: () => files.map(getSlugs)
  },
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://www.presenta.cc'
  }
}
