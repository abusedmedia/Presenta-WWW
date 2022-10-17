<template>
    <div class="body">
        
    </div>
</template>

<script>
import HeroHeader from '~/components/HeroHeader.vue'
import Features from '~/components/Features.vue'
import FooterComp from '~/components/FooterComp.vue'
import LatestPosts from '~/components/LatestPosts.vue'
import CTA from '~/components/CTA.vue'
import Opening from '~/components/Opening.vue'
import { mapMutations, mapGetters } from 'vuex'
import HomeExamples from '~/components/HomeExamples.vue'


export default {
  components:{
    HeroHeader,Features,FooterComp,LatestPosts,CTA,Opening,HomeExamples
  },  
  head () {
        return {
            title: 'Generate Dynamic Data-Driven Documents, Reports, PDF, PNG, GIF with our Cloud API'
        }
  },
  // async asyncData(){
  //   let res = await import(`~/content/blog/list.json`)
  //   return {posts: res.default.filter(d => d.home)}
  // },
  methods:{
    playVideo(){
      this.$refs.vid.play()
    }
  }
}
</script>



<style scoped>
.feat{
  text-align: center;
  font-size: 3.5rem;
}
.hsplash{
  display: flex;
  justify-content: center;
}
.hsplash img{
  width: 100%;
}
.vid{
  margin:2rem 0;
  padding:1rem;
  padding-right: 1.5rem;

  display: flex;
  justify-content: center;
}
.video-container {
  box-shadow: 10px 10px 0 #000;
  border:1px solid #000;
}
video{
  display: block;
  width: 100%;
}

@media screen and (min-width: 700px){
    .video-container{
      width: 75%;
    }
}

/* 
.video-container {
	position: relative;
	padding-bottom: 56.25%;
	height: 0;
	overflow: hidden;
  box-shadow: 10px 10px 0 #000;
  border:1px solid #000;
}
.video-container iframe{
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
} */
</style>
