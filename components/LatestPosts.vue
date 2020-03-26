<template>
    <div class="wrapper">
        <h2>Want to learn more?</h2>
        <h3>Find how-to's (and why's!) on our <nuxt-link to="blog">blog</nuxt-link>:</h3>
        
        <ul class="grid pair">
            <li v-for="item in list" :key="item.id">
                <nuxt-link :to="item.url + '/'">
                    <div class="img">
                        <img src="/500x500.png" />
                    </div>
                    <p>{{item.title}}</p>                
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    props:{
        list:Array
    }
}
</script>



<style scoped>
.wrapper{
    padding:1rem;
    font-size:2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.wrapper h2, .wrapper h3{
    text-align: center;
}

.wrapper h2{
    margin-bottom: 0;
}
.wrapper h3{
    margin-top: 0;
}

a{
    color:#000;
}
h3 a:hover{
    background-color: var(--accentcolor);
}

@media screen and (min-width: 400px){
    .wrapper{
        font-size: 1.25rem;
    }



.grid li p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
}

</style>