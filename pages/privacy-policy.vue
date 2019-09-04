<template>
    <div id="app" :class="colorstyle">
      <HeaderGlobal />

      <div class="body">
        <div v-html="md"></div>
        <FooterComp />
      </div>
  </div>
</template>

<script>
import MD from './privacy-policy.md'

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