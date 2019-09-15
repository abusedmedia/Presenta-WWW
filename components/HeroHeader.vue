<template>
    <div>
        
        <h1>
            Build <br />presentations <br />the modern way.
        </h1>

        <QuoteStrip :message="'A personal designer to build effective documents that speak!'" />

    </div>
</template>


<script>
import QuoteStrip from '@/components/QuoteStrip'

export default {
    components:{
        QuoteStrip
    }
}
</script>
<style scoped>

h1{
    font-size:6rem;
    line-height: 8rem;
    padding:2rem 2rem;
    margin:0;
}


@media(min-width: 600px){
  h1{
    text-align: center;
    padding: 2rem .5rem;
    line-height: 6rem;
  }
  
}



</style>