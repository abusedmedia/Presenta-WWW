<template>
    <div id="app">
        <HeaderGlobal />
        <nuxt />
    </div>
</template>



<script>
import HeaderGlobal from '~/components/HeaderGlobal.vue'
import CookieBanner from '~/components/CookieBanner.vue'

export default {
    components:{
        HeaderGlobal,CookieBanner
    }
}
</script>


