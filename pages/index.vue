<template>
  <div id="app" :class="colorstyle">
      <HeaderGlobal />

      <div class="body">
        <HeroHeader />
        <h1 class="feat">Key features:</h1>
        <Features />
        <FooterComp />
      </div>
      

  </div>
</template>

<script>
import HeaderGlobal from '~/components/HeaderGlobal.vue'
import HeroHeader from '~/components/HeroHeader.vue'
import Features from '~/components/Features.vue'
import FooterComp from '~/components/FooterComp.vue'
import { mapMutations, mapGetters } from 'vuex'


export default {
  components:{
    HeaderGlobal,HeroHeader,Features,FooterComp
  },  
  computed:{
    ...mapGetters(['colorstyle'])
  }
}
</script>



<style scoped>
.feat{
  text-align: center;
  font-size: 3.5rem;
}
</style>