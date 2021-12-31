<template>
    <div class="body">

        <div class="hero">

            <h2>Public Sign-In is not available yet.</h2>
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



<style scoped>


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