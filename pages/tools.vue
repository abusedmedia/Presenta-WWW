<template>
    <div class="body">

        <div class="hero">
            <h1>Free Tools</h1>

            <h2>Powered by <b>PRESENTA</b>!</h2>
        </div>

        <ToolsExamples />
        
        <div class="cta">
            <a class="btn" href="https://github.com/presenta-software/presenta-lib">
                <span>Learn more on GitHub</span>
            </a>
        </div>

        <FooterComp />
    </div>
</template>


<script>
import HeroHeader from '~/components/HeroHeader.vue'
import FooterComp from '~/components/FooterComp.vue'
import ToolsExamples from '~/components/ToolsExamples.vue'

export default {
  components:{
      HeroHeader,FooterComp,ToolsExamples
  },
  head () {
        return {
            title: 'Open Source Javascript Library'
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


.cta{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cta .btn{
    font-size: 1.25rem;
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
    .cta .btn{
        font-size: 1.75rem;
    }

    .ticker{
        flex-direction: row;
    }
}
</style>