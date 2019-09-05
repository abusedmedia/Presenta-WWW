<template>
    <div id="app" :class="colorstyle">
      <HeaderGlobal />

      <div class="body">
        <div v-html="md" class="page"></div>
        <PageLegalFooter class="page" />
        <FooterComp />
      </div>
  </div>
</template>

<script>
import MD from './terms-of-service.md'

import HeaderGlobal from '~/components/HeaderGlobal.vue'
import FooterComp from '~/components/FooterComp.vue'
import PageLegalFooter from '~/components/PageLegalFooter.vue'
import { mapGetters } from 'vuex'

export default {
  components:{
    HeaderGlobal,FooterComp,PageLegalFooter
  },
  computed:{
      ...mapGetters(['colorstyle']),
      md(){
        return MD
      }
  }
}
</script>