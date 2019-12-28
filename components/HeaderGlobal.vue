<template>
    <header>
        <div class="logo">
            <nuxt-link to="/"><img src="~/assets/logo.svg" /></nuxt-link>
            
        </div>
        

        <div class="login">
            <a class="btn" href="https://app.presenta.cc/">Create an account</a>
        </div>
    </header>
</template>



<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 0 15px #ccc;
    z-index: 9999;
}

/* .login{
    display:none;
} */

.btn{
    font-size:1.5rem;
}

@media screen and (min-width: 450px) {
    .btn{
        font-size:1rem;
    }
}

div{
    display: flex;
    align-items: center;
}

img{
    width: 16rem;
}

@media screen and (min-width: 450px) {
    img{
        width: 8rem;
    }
}

@media screen and (min-width: 770px) {
    .login{
        display: block;
    }
}
</style>