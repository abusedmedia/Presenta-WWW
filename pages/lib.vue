<template>
    <div class="body">

        <div class="hero">
            <h1>PRESENTA <b>Lib</b></h1>

            <h2>The javascript<br />
            presentation library<br />
            for the <b>automation era</b>.</h2>
        </div>

        <div class="ticker">
            <div class="install">$ npm install @presenta/lib</div>
            <div class="weight">14Kb gzipped</div>
        </div>

        <LibExamples />
        
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
import LibExamples from '~/components/LibExamples.vue'

export default {
  components:{
      HeroHeader,FooterComp,LibExamples
  },
  head () {
        return {
            title: 'Open Source Javascript Library'
        }
  },
}

</script>



<style scoped>

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


    .ticker{
        flex-direction: row;
    }
}
</style>