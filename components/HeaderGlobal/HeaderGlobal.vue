<template>
    <header>
        <div class="logo">
            <img src="~/assets/logo.svg" />
        </div>

        <ColorSelector @changed="onChangeColor" />

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
    },
    methods:{
        onChangeColor(v){
            this.$emit('changed', v)
        }
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