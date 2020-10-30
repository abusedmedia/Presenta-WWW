<template>
    <div>
        
        <h1>
            Build <br />presentations, <br />the modern way.
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
    font-size:6.8rem;
    line-height: 6.2rem;
    padding:2rem 2rem;
    padding-top: 3rem;
    margin:0;
    text-align: center;
    font-weight: 900;
}

h1 b{
    display: inline-block;
    background-color: var(--accentcolor);
}


@media(min-width: 600px){
  h1{
    font-size:7.2rem;
    
    padding: 2rem .5rem;
    padding-top: 3rem;
  }
  
}



</style>