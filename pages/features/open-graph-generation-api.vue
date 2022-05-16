<template>
    <div class="body">

        <div class="hero">
            <h1>Open Graph Generation API</h1>
            <h3>Generate <b>open-graph images</b> automatically using a template and our <b>Cloud API</b> infrastructure</h3>
        
             <p></p>
        </div>


        <UseOpenGraph />
        <UseQuotes />
        <UseMeme />
        
        <CTA />

        <FooterComp />
    </div>
</template>


<script>
import HeroHeader from '~/components/HeroHeader.vue'
import CTA from '~/components/CTA.vue'
import FooterComp from '~/components/FooterComp.vue'

import UseOpenGraph from '~/components/presentaUseCases/UseOpenGraph.vue'
import UseQuotes from '~/components/presentaUseCases/UseQuotes.vue'
import UseMeme from '~/components/presentaUseCases/UseMeme.vue'


export default {
  components:{
      HeroHeader,CTA,FooterComp,UseOpenGraph,UseQuotes,UseMeme
  },
  head () {
        return {
            title: 'Open Graph Generation API'
        }
  },
}

</script>



<style scoped>
.hero{
    padding:2rem 2rem;
    padding-top: 3rem;
}
h1{
    font-size:3.2rem;
    margin:0;
    padding: 0;
    text-align: center;
    font-weight: 900;
    letter-spacing: -.2rem;
    margin-bottom: 1rem;
}
h2{
    font-size:2.2rem;
    line-height: 2.2rem;
    margin:0;
    padding: 0;
    text-align: center;
    font-weight: 900;
    letter-spacing: -.1rem;
}

h1 b, h2 b{
    display: inline-block;
    background-color: var(--accentcolor);
}



.ticker{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
}

.install{
    padding: .5rem 1rem;
    background: #eee;
    border:1px solid #ddd;
    border-radius: 8px;
}
.weight{
    padding: .5rem 1rem;
    color: #ccc;
}

@media(min-width: 600px){
    h1{
        font-size:7.2rem;
        line-height: 5.7rem;
        letter-spacing: -.4rem;
        margin-bottom: 2rem;
    }
    h2{
        font-size:4.2rem;
        line-height: 4.2rem;
        letter-spacing: -.2rem;
    }


    .ticker{
        flex-direction: row;
    }
}
</style>