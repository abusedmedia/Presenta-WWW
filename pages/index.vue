<template>
  <div id="app" :class="colorstyle">
      <HeaderGlobal />

      <div class="body">
        <HeroHeader />

        <div class="vid">
          <video src="/ui.m4v" muted autoplay loop poster="ui.jpg"></video>
        </div>

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

.vid{
  margin-top:2rem;
  display: flex;
  padding:2rem;
}
video{
  width:100%;
  box-shadow: 0 0 20px #ccc;
}
</style>