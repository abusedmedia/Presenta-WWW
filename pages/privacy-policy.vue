<template>
    <div id="app" :class="colorstyle">
      <HeaderGlobal />

      <div class="body">
        <p>priv</p>

        <FooterComp />
      </div>
  </div>
</template>

<script>
import HeaderGlobal from '~/components/HeaderGlobal.vue'
import FooterComp from '~/components/FooterComp.vue'
import { mapGetters } from 'vuex'

export default {
  components:{
    HeaderGlobal,FooterComp
  },
  computed:{
      ...mapGetters(['colorstyle'])
  }
}
</script>