// https://dev.to/olawanle_joel/how-to-make-use-of-vue-js-plugins-in-nuxt-2bao
// https://yasminzy.com/vue/highlight/#steps

import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'

import 'highlight.js/styles/vs.css'

Vue.use(VueHighlightJS, {
  languages: {
    javascript
  }
})
