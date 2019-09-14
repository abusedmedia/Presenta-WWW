<template>
    <div>
        
        <h1>
            Build <br />presentations <br />the modern way.
        </h1>


        <div class="high">
            <h3>
                A personal designer to build effective documents that speak!
            </h3>
        </div>
        

    </div>
</template>


<script>
import Separator from '@/components/Separator'

export default {
    components:{
        Separator
    }
}
</script>
<style scoped>



h1, h3{
    text-align: left;
    margin: 0;
    
}

h1{
    font-size:6rem;
    line-height: 8rem;
    padding:2rem 2rem;
}

h3{
    padding: 2rem 2rem;
    font-size:2.4rem;
    line-height: 4rem;
    
}

.high{
    background-color: var(--accentcolor);
}

@media(min-width: 600px){
  h1, h3{
    text-align: center;
    padding: 2rem .5rem;
  }
  h1{
    line-height: 6rem;
  }
  h3{
    font-size:3rem;
    line-height: 3rem;
  }
}



</style>