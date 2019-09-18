<template>
    <div class="body">
        <HeroHeader />

        <div class="vid">
          <video src="/ui.m4v" muted autoplay loop poster="ui.jpg"></video>
        </div>
      
        <Features />
        <FooterComp :noHomeLink="true" />
    </div>
</template>

<script>
import HeroHeader from '~/components/HeroHeader.vue'
import Features from '~/components/Features.vue'
import FooterComp from '~/components/FooterComp.vue'
import { mapMutations, mapGetters } from 'vuex'


export default {
  components:{
    HeroHeader,Features,FooterComp
  }
}
</script>



<style scoped>
.feat{
  text-align: center;
  font-size: 3.5rem;
}

.vid{
  margin:2rem 0;
  display: flex;
  padding:2rem;
}
video{
  width:100%;
  box-shadow: 0 0 20px #ccc;
}
</style>