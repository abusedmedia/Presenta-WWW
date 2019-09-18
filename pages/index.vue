<template>
    <div class="body">
        <HeroHeader />

        <div class="vid">
          <video src="/ui.m4v" muted autoplay loop poster="ui.jpg"></video>
        </div>
      
        <Features />
        <LatestPosts :list="posts" />
        <FooterComp :noHomeLink="true" />
    </div>
</template>

<script>
import HeroHeader from '~/components/HeroHeader.vue'
import Features from '~/components/Features.vue'
import FooterComp from '~/components/FooterComp.vue'
import LatestPosts from '~/components/LatestPosts.vue'
import { mapMutations, mapGetters } from 'vuex'


export default {
  components:{
    HeroHeader,Features,FooterComp,LatestPosts
  },  
  head () {
        return {
            title: 'Home'
        }
  },
  async asyncData(){
    let res = await import(`~/content/blog/list.json`)
    return {posts: res.default}
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
  padding:1rem;
  padding-right: 1.5rem;
  
}
video{
  width:100%;
    box-shadow: 10px 10px 0 #000;
}
</style>