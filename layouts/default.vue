<template>
    <div id="app">
        <a href="https://github.com/abusedmedia/Ukraine-support-banner" style="bottom:0;position:fixed;z-index:999;left:0;width:100%;height:30px;display:flex;justify-content:center;background: url(https://cache.presenta.workers.dev/GhZD3MDlBN:yvLHzHJhJ?w=20&h=30&gravity=west);"><img src="https://daily.presenta.workers.dev/GhZD3MDlBN:yvLHzHJhJ"></a>
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


