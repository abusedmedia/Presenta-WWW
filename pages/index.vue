<template>
    <div class="body">
        <HeroHeader />

        <!-- <div class="vid">
          <div class="video-container" @click="playVideo">
            <video ref="vid" src="/0-main.m4v" muted poster="0-main.jpg"></video>
          </div>
        </div> -->
        
        <!-- <div class="vid">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/AaKGgTXl4MA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> -->

        <div class="splash">
          <picture>
            <source srcset="/splash.png" media="(min-width: 700px)">
            <img src="/splash-narrow.png" />
          </picture>
          
        </div>
        
        <Opening />

        <!-- <HomeExamples /> -->
      
        <!-- <Features /> -->
        <Subscribe :noHomeLink="true" />


        <!-- <LatestPosts :list="posts" /> -->
        <FooterComp />
    </div>
</template>

<script>
import HeroHeader from '~/components/HeroHeader.vue'
import Features from '~/components/Features.vue'
import FooterComp from '~/components/FooterComp.vue'
import LatestPosts from '~/components/LatestPosts.vue'
import Subscribe from '~/components/Subscribe.vue'
import Opening from '~/components/Opening.vue'
import { mapMutations, mapGetters } from 'vuex'
import HomeExamples from '~/components/HomeExamples.vue'


export default {
  components:{
    HeroHeader,Features,FooterComp,LatestPosts,Subscribe,Opening,HomeExamples
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
.splash{
  display: flex;
  justify-content: center;
}
.splash img{
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