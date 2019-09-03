<template>
  <div id="app" :class="getCol">
      <HeaderGlobal @changed="onChangeColor" />

      <HeroHeader />

      <h1 class="feat">Key features:</h1>
      
      <Features />
      <FooterComp />
      
      
      <!--<HeaderWelcome />
      <ImgGrid />
      <transition name="component-fade" mode="out-in">
        <EmailSub v-if="!showOk" @submitted="onSubmit" key="email" />
        <OkThen v-if="showOk" :name="name" key="resp" />
      </transition>-->
  </div>
</template>

<script>
import '~/css/normalize.css'
import '~/css/style.css'
import '~/css/colors.css'
import HeaderGlobal from '~/components/HeaderGlobal/HeaderGlobal.vue'
import HeroHeader from '~/components/HeroHeader/HeroHeader.vue'
import Features from '~/components/Features/Features.vue'
import FooterComp from '~/components/FooterComp/FooterComp.vue'


export default {
  components:{
    HeaderGlobal,HeroHeader,Features,FooterComp
  },
  data(){
    return{
      color:'original'
    }
  },
  methods:{
    onChangeColor(c){
      this.color = c
    }
  },
  computed:{
    getCol(){
      let ob = {}
      ob[this.color] = true
      return ob
    }
  }
}
</script>



<style scoped>
.feat{
  text-align: center;
  font-size: 3.5rem;
}
</style>