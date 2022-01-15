<template>
    <div class="body">

        <div class="hero">
            <h1>Use Cases</h1>

            <h2>Learn what you can do with <b>PRESENTA</b>!</h2>
        </div>

        <UseCases />


        <Subscribe />

        <FooterComp />
    </div>
</template>


<script>
import HeroHeader from '~/components/HeroHeader.vue'
import Subscribe from '~/components/Subscribe.vue'
import FooterComp from '~/components/FooterComp.vue'
import UseCases from '~/components/UseCases.vue'

export default {
  components:{
      HeroHeader,Subscribe,FooterComp,
      UseCases
  },
  head () {
        return {
            title: 'Use Cases'
        }
  },
}

</script>


