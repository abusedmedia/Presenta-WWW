<template>
    
    <div class="body">
        <div class="wrap">
            
            <div class="blog page">
                <div class="wrapper">
                    <div class="posthead">
                        <h1>{{meta.title}}</h1>
                        <small>posted on <strong>{{date}}</strong>, in <strong>{{category}}</strong></small>
                    </div>
                    
                    <div class="body" v-html="html"></div>

                </div>
            </div>
            
        </div>
        
        <FooterComp />
    </div>
    
</template>


<script>
import FooterComp from '~/components/FooterComp.vue'

export default {
    components:{
        FooterComp
    },
    async asyncData({ params }) {
        let cnt = await import(`~/content/blog/${params.id}.md`)
        return {
            slug: params.id,
            cnt: cnt
        }
    },
    head () {
        return {
            title: this.meta.title,
            meta: [
                { hid:'ogtit', property: 'og:title', content: this.meta.title },
                { hid:'twtit', name: 'twitter:title', content: this.meta.title },
                { hid:'ogimg', property: 'og:image', content: `https://www.presenta.cc/blog/covers/${this.slug}.jpg` },
                { hid:'twimg', name: 'twitter:image', content: `https://www.presenta.cc/blog/covers/${this.slug}.jpg` },
                { hid:'ogurl', property: 'og:url', content: `https://www.presenta.cc/blog/${this.slug}` },
                { hid:'twurl', name: 'twitter:url', content: `https://www.presenta.cc/blog/${this.slug}` }
            ]
        }
    },
    computed:{
        meta(){
            return this.cnt.attributes
        },
        html(){
            return this.cnt.html
        },
        date(){
            return new Date(this.meta.date).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
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
    padding: 0 3rem;
    font-size:2.5rem;
}


@media screen and (min-width: 400px){
    .wrapper{
        width: 85%;
    }
    .blog{
        padding:0;
        font-size:1.5rem;
    }
}

@media screen and (min-width: 700px){
    .wrapper{
        width: 70%;
    }
    .blog{
        padding:0;
        font-size:1.2rem;
    }
}


.posthead{
    text-align: center;
}
.posthead h1{
    border-bottom:1px solid #eee;
    margin-bottom:0;
}



</style>


<style>
blockquote{
    border-left:6px solid #ccc;
    padding-left:2rem;
    padding-top:1rem;
    padding-bottom:1rem;
    margin:0;
    font-size: 1.6em;
}
blockquote p{
    margin: 0;
}
</style>