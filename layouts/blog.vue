<template>
    <div id="app">
        <HeaderGlobal />
        <div class="body">
            <div class="wrap">
                <nuxt class="page" />
            </div>
            
            <FooterComp />
        </div>
    </div>
</template>



<script>
import HeaderGlobal from '~/components/HeaderGlobal.vue'
import FooterComp from '~/components/FooterComp.vue'

export default {
    components:{
        HeaderGlobal,FooterComp
    }
}
</script>

