<template>
    <div>
        <Separator :h="7" :w="30" :pos="'flex-end'" :col="'--backcolor'" />
        
        <h1>
            Build <br />presentations <br />the modern way.
        </h1>

        <Separator :h="4" :w="43" :pos="'flex-start'" :col="'--forecolor'" />

        <div :style="{backgroundColor: `var(--backcolor)`}">
            <h3>
                A personal designer to build effective documents that speak!
            </h3>
            <Separator :h="12" :w="70" :pos="'center'" :col="'--accentcolor'" />
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
    line-height: 7rem;
    padding:2rem 2rem;
}

h3{
    padding: 2rem 2rem;
    font-size:2.4rem;
    line-height: 3.2rem;
    
}

@media(min-width: 600px){
  h1, h3{
    text-align: center;
    padding: 2rem 0;
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