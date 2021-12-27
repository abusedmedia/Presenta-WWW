<template>
    <header>
        <div class="logo">
            <nuxt-link to="/"><img src="~/assets/logo.svg" /></nuxt-link>
        </div>
        

        <div class="menu">
            <nuxt-link to="/lib">Open-Source</nuxt-link>
            <!-- <nuxt-link to="/tools">Free Tools</nuxt-link> -->
            <!-- <a class="btn" href="https://app.presenta.cc/">Sign In</a> -->
        </div>
    </header>
</template>


<script>
export default {
    methods:{
        getSelectedClass(path){
            console.log('PATHHHH', this.$route)
            return {selected: true}
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
    box-shadow: 0 0 15px #ccc;
    z-index: 9999;
}

.logo a{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 4px;
}

.btn{
    font-size:1.5rem;
}

.menu{
    display: flex;
}
.menu a{
    padding: .5rem;
    display: block;
    overflow: hidden;
    border-radius: 4px;
    text-decoration: none;
    margin-left: .5rem;
}
.menu a:hover{
    text-decoration: underline;
}

.menu .nuxt-link-active{
    background: var(--accentcolor);    
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
    
}
</style>