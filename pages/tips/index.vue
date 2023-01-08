<template>
    <div class="list">

        <div class="hero">
            <h2>Here what we discover in the Automation world every day!</h2>
        </div>
        
        <ul class="grid">
            <li v-for="post in posts" :key="post.url">
                <nuxt-link :to="post.url">
                    <div class="img">
                        <img :src="getImage(post)" />
                    </div>
                    <p>{{post.title}}</p>                
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>



<script>

export default {
  layout: 'commonPage',
  head () {
        return {
            title: 'The Image Generation Tips'
        }
  },
  async asyncData(){
    let res = await import(`~/content/tips/list.json`)
    return {posts: res.default}
  },
  methods:{
      getImage(post){
          let img = `https://monthly.presenta.workers.dev/zGywhb2oJn:SfjEYhkuX?title=${post.title}&subtitle=${post.category}`
          if(post.cover) img = post.cover
          return img
      }
  }
}
</script>




<style scoped>

.list{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center
}
</style>