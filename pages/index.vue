<template>
    <div class="body">
        <HeroHeader />

        <div class="vid">
          <div class="video-container">
            <!-- <iframe width="800" height="450" src="https://www.youtube.com/embed/AaKGgTXl4MA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            <video src="/ui.m4v" muted loop poster="ui.jpg"></video>
          </div>
        </div>
      
        <Features />
        <CTA :noHomeLink="true" />
        <LatestPosts :list="posts" />
        <FooterComp />
    </div>
</template>

<script>
import HeroHeader from '~/components/HeroHeader.vue'
import Features from '~/components/Features.vue'
import FooterComp from '~/components/FooterComp.vue'
import LatestPosts from '~/components/LatestPosts.vue'
import CTA from '~/components/CTA.vue'
import { mapMutations, mapGetters } from 'vuex'


export default {
  components:{
    HeroHeader,Features,FooterComp,LatestPosts,CTA
  },  
  head () {
        return {
            title: 'Home'
        }
  },
  async asyncData(){
    let res = await import(`~/content/blog/list.json`)
    return {posts: res.default.filter(d => d.home)}
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
  padding:1rem;
  padding-right: 1.5rem;
}
.video-container {
  box-shadow: 10px 10px 0 #000;
  border:1px solid #000;
}
video{
  display: block;
  width: 100%;
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