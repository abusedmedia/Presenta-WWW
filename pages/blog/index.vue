<template>
    <div class="list">
        <h2>Blog list</h2>
        <p>Tips and principles on presenting, communicating and displaying information the right way</p>
        <ul>
            <li v-for="post in posts">
                <nuxt-link :to="post.url + '/'">{{post.title}}</nuxt-link>
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