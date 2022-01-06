<template>
    <div class="body">

        <div class="hero">

            <h2>Public Sign Up is not available yet.</h2>
        </div>

        <Subscribe />

        <FooterComp />
    </div>
</template>


<script>
import HeroHeader from '~/components/HeroHeader.vue'
import FooterComp from '~/components/FooterComp.vue'
import Subscribe from '~/components/Subscribe.vue'

export default {
  components:{
      HeroHeader,FooterComp,Subscribe
  },
  head () {
        return {
            title: 'Waiting Room'
        }
  },
}

</script>


