<template>
    <div>
        
        <h1>
            Build <br />presentations <br />the modern way.
        </h1>

        <!-- <QuoteStrip :message="'Your personal trainer that helps you presenting great!'" /> -->

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
    text-align: center;
}


@media(min-width: 600px){
  h1{
    
    padding: 2rem .5rem;
    line-height: 6rem;
  }
  
}



</style>