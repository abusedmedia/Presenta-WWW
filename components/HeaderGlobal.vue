<template>
    <header>
        <div class="logo">
            <nuxt-link to="/"><img src="~/assets/logo.svg" /></nuxt-link>
        </div>
        

        <!-- <div class="login">
            <a class="btn" href="https://app.presenta.cc/">Go to PRESENTA</a>
        </div> -->
    </header>
</template>



<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .4rem;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
    z-index: 9999;
}


.logo a{
    padding: 0 .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
}

.btn{
    font-size:1rem;
}


div{
    display: flex;
    align-items: center;
}

img{
    width: 8rem;
}


</style>