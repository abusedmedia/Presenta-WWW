<template>
    <div class="list">
        <h1>The "how" and the "why"</h1>
        <p>Tips and principles on presenting, communicating and displaying information the right way</p>
        <ul class="grid">
            <li v-for="post in posts" :key="post.url">
                <nuxt-link :to="post.url + '/'">
                    <div class="img">
                        <img src="/500x500.png" />
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
            title: 'Blog'
        }
  },
  async asyncData(){
    let res = await import(`~/content/blog/list.json`)
    return {posts: res.default}
  }
}
</script>




<style scoped>
h1{
    margin-bottom: 0;
}
.list{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center
}
</style>