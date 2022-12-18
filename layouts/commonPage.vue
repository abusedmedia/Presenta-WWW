<template>
    <div id="app">
        <HeaderGlobal />
        <div class="body">
            <div class="wrap">
                
                <div class="blog page">
                    <div class="wrapper">
                        <nuxt />
                    </div>
                </div>
                
            </div>
            
            <FooterComp />
        </div>
        
    </div>
</template>



<script>
import HeaderGlobal from '~/components/HeaderGlobal.vue'
import CookieBanner from '~/components/CookieBanner.vue'
import FooterComp from '~/components/FooterComp.vue'

export default {
    components:{
        HeaderGlobal,CookieBanner,FooterComp
    }
}
</script>


