<template>
    <div class="wrapper">
        <h2>Want to learn more?</h2>
        <h3>Find how-to's (and why's!) on our <nuxt-link to="blog">blog</nuxt-link>:</h3>
        
        <ul class="grid">
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

.grid{
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding:0;
    list-style-type: none;
    width: 100%;
}

a{
    color:#000;
}
h3 a:hover{
    background-color: var(--accentcolor);
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
@media screen and (min-width: 770px){
    .grid{
        width: 70%;
    }
}

@media screen and (min-width: 1100px){
    .grid{
        width: 60%;
    }
}
</style>