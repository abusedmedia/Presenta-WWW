<template>
    <div class="wrapper">
        <div class="high">
            <h3>{{message}}</h3>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        message:String
    }
}
</script>


<style scoped>
.wrapper{
    padding: 1rem;
    padding-right: 1.5rem;
}

h3{
    text-align: left;
    margin: 0;
}
h3{
    padding: 2rem 2rem;
    font-size:2.4rem;
    line-height: 4rem;
}

.high{
    background-color: var(--accentcolor);
    box-shadow: 10px 10px 0 #000;
}

@media(min-width: 600px){
  h3{
    text-align: center;
    padding: 2rem .5rem;
    font-size:3rem;
    line-height: 3rem;
  }
}

</style>