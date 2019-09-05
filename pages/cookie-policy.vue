<template>
    <div id="app" :class="colorstyle">
      <HeaderGlobal />

      <div class="body">
        <div v-html="md" class="page"></div>
        <FooterComp />
      </div>
  </div>
</template>

<script>
import MD from './cookie-policy.md'

import HeaderGlobal from '~/components/HeaderGlobal.vue'
import FooterComp from '~/components/FooterComp.vue'
import { mapGetters } from 'vuex'

export default {
  components:{
    HeaderGlobal,FooterComp
  },
  computed:{
      ...mapGetters(['colorstyle']),
      md(){
        return MD
      }
  }
}
</script>