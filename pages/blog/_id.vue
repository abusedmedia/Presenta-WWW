<template>
    
    <div class="body">
        <div class="wrap">

            <!-- <div class="side">
                <Sidebar :menu="list" :title="'You might be interested also in:'" />
            </div> -->

            <div class="blog page">

                <div class="wrapper">
                    <div class="hero">
                        <h2>{{meta.title}}</h2>
                    </div>
                    <!-- <small>posted on <strong>{{date}}</strong>, in <strong>{{category}}</strong></small> -->
                    
                    <div class="body" v-html="html"></div>

                </div>

                

            </div>
            
        </div>
        <Subscribe />
        
        <FooterComp />
    </div>
    
</template>


<script>
import Subscribe from '~/components/Subscribe.vue'
import FooterComp from '~/components/FooterComp.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
    components:{
        FooterComp,Subscribe,Sidebar
    },
    async asyncData({ params }) {
        let res = await import(`~/content/blog/list.json`)
        let cnt = await import(`~/content/blog/${params.id}.md`)
        
        return {
            slug: params.id,
            cnt: cnt,
            list: res.default
        }
    },
    head () {
        let cover = this.meta.cover ? `blog/covers/${this.slug}.jpg` : 'social.png'
        return {
            title: this.meta.title,
            meta: [
                { hid:'published_time', property: 'article:published_time', content: this.meta.date },
                { hid:'ogtit', property: 'og:title', content: this.meta.title },
                { hid:'twtit', name: 'twitter:title', content: this.meta.title },
                { hid:'ogimg', property: 'og:image', content: `https://www.presenta.cc/${cover}` },
                { hid:'twimg', name: 'twitter:image', content: `https://www.presenta.cc/${cover}` },
                { hid:'ogurl', property: 'og:url', content: `https://www.presenta.cc/blog/${this.slug}` },
                { hid:'twurl', name: 'twitter:url', content: `https://www.presenta.cc/blog/${this.slug}` }
            ]
        }
    },
    computed:{
        ctn(){
            return this.cnt
        },
        meta(){
            return this.cnt.attributes
        },
        html(){
            return this.cnt.html
        },
        date(){
            return new Date(this.meta.date).toLocaleDateString()
        },
        category(){
            return this.meta.category
        }
    }
}
</script>



<style scoped>
.blog{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    font-size: 1.25rem;
}

.wrap{
    display: flex;
    position: relative;
}

.side{
    display: none;
}

.wrapper{
    width:100%;
}

.blog >>> code[class*="language-"], 
.blog >>> pre[class*="language-"]{
    font-size:75%;
}


@media screen and (min-width: 400px){
    .wrapper{
        width: 85%;
    }
    .blog{
        padding:0;
    }

}

@media screen and (min-width: 700px){
    .wrapper{
        width: 90%;
    }
    .blog{
        padding:0;
    }

    .side{
        display: block;
        min-width: 250px;
        max-width: 250px;
        border-right: 1px solid #ddd;
    }
}
@media screen and (min-width: 1100px){
    .wrapper{
        width: 80%;
    }
}



.posthead{
    text-align: center;
}
.posthead h1{
    border-bottom:1px solid #eee;
    margin-bottom:1rem;
    padding-bottom:1rem;
    line-height: 100%;
}




.blog .body >>> h2,
.blog .body >>> h3{
    margin:0;
    padding-top:3rem;
    padding-bottom:0rem;
}


.blog .body >>> li{
    padding-bottom:0.7em;
    line-height: 1em;
}

.blog .body >>> ul,
.blog .body >>> ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
  counter-reset: li;
  padding: 0.5rem 0;
}

.blog .body >>> li{
  list-style-position:inside;
  padding-left: 0.8em;
}
.blog .body >>> ul li::before {
  content: "–"; 
  display: inline-block; 
  width: 0.8em;
  margin-left: -0.8em;
}
.blog .body >>> ol li::before {
  counter-increment: li;  
  content:  "." counter(li); 
  display: inline-block; 
  width: 1.1em; 
  margin-left: -1.3em;
  margin-right: 0.2em; 
  text-align: right; 
  direction: rtl;
}

.blog .body >>> li p{
  display: inline;
}



</style>




