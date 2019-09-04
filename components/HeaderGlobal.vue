<template>
    <header>
        <div class="logo">
            <nuxt-link to="/"><img src="~/assets/logo.svg" /></nuxt-link>
        </div>

        <ColorSelector />

        <div class="login">
            <a class="btn" href="https://app.presenta.cc/">Go to Presenta</a>
        </div>
    </header>
</template>

<script>
import ColorSelector from '~/components/ColorSelector.vue'

export default {
    components:{
        ColorSelector
    }
}
</script>


<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

}

.login{
    display:none;
}

div{
    display: flex;
    align-items: center;
}

img{
    width: 18rem;
}

@media screen and (min-width: 450px) {
    .login{
        display: block;
    }

    img{
    width: 14rem;
}
}
</style>