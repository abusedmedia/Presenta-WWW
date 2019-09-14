<template>
    <div id="app">
        <HeaderGlobal />
        <div class="body">
            <nuxt class="page" />
            <PageLegalFooter class="page" />
            <FooterComp />
        </div>
    </div>
</template>



<script>
import HeaderGlobal from '~/components/HeaderGlobal.vue'
import FooterComp from '~/components/FooterComp.vue'
import PageLegalFooter from '~/components/PageLegalFooter.vue'

export default {
    components:{
        HeaderGlobal,FooterComp,PageLegalFooter
    },
}
</script>