<template>
    
    <div class="body">
        <div class="wrap">
            
            <div class="blog page">
                <div class="wrapper">
                    <div class="posthead">
                        <h1>{{meta.title}}</h1>
                        <small>{{date}}</small>
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
                { property: 'og:title', content: this.meta.title },
                { name: 'twitter:title', content: this.meta.title },
                { property: 'og:image', content: `https://www.presenta.cc/blog/covers/${this.slug}.jpg` },
                { name: 'twitter:image', content: `https://www.presenta.cc/blog/covers/${this.slug}.jpg` }
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