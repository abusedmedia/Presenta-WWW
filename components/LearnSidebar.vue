<template>
    <div>
        <h3>You might be interested also in:</h3>
        <ul>
            <li v-for="item in menu" :key="item.id">
                <nuxt-link :to="item.url + '/'">{{item.title}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    props:{
        menu:Array
    }
}
</script>


<style scoped>
div{
    /* position: fixed;
    width: 250px; */

    padding: 1rem;
}
ul{
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size:0.9rem;
}

li{
    padding-bottom:1rem;
}
</style>