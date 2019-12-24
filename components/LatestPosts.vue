<template>
    <div class="wrapper">
        <h3>Learn more from the <nuxt-link to="blog">Blog</nuxt-link>:</h3>
        <ul>
            <li v-for="item in list" :key="item.id">
                <nuxt-link :to="item.url + '/'">{{item.title}}</nuxt-link>
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
}
.wrapper h3{
    text-align: center;
}

ul{
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding:0;
    list-style-type: none;
}

li{
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
}

li a{
    color: #000;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin:.25rem .25rem;
    border:1px solid #eee;
}
li a:hover{
    background-color:var(--accentcolor);
}

@media screen and (min-width: 400px){
    li{
        width:50%;
    }
    .wrapper{
        font-size: 1.25rem;
    }
}
</style>