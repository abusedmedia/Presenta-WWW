<template>
    
    <div class="body">
        <div class="wrap">
            
            <div class="blog page">
                <div class="wrapper">
                    <div class="posthead">
                        <h1>{{meta.title}}</h1>
                    </div>
                    
                    <div class="body" v-html="html"></div>
                    <PageLegalFooter />

                </div>
            </div>
            
        </div>
        
        <FooterComp />
    </div>
    
</template>


<script>
import FooterComp from '~/components/FooterComp.vue'
import PageLegalFooter from '~/components/PageLegalFooter.vue'

export default {
    components:{
        FooterComp,PageLegalFooter
    },
    async asyncData({ params }) {
        let cnt = await import(`~/content/legal/${params.id}.md`)
        return {
            slug: params.id,
            cnt: cnt
        }
    },
    head () {
        return {
            title: this.meta.title
        }
    },
    computed:{
        meta(){
            return this.cnt.attributes
        },
        html(){
            return this.cnt.html
        }
    }
}
</script>