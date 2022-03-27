<template>
    <div class="body">

        <div class="hero">
            <h1>@ReactWithImage</h1>
            <h2>Add Personalized Images <br />in your <mark>Twitter</mark> conversations</h2>
        </div>

        <div class="container">
            <div class="splash">
                <img src="/rwi_splash.jpg" />
            </div>

            <h1 style="margin: 3rem 0;">Wait few seconds...</h1>

            <div class="splash">
                <img src="/rwi_splash-2.jpg" />
            </div>
        </div>

        <div class="hero">
            <h2>Available templates:</h2>
            <h3>Click to copy the template command, <br />then paste it on a Twitter reply.</h3>
        </div>

        <div class="container">
            <ul class="grid">
                <li v-for="template in templates" :key="template.id"
                    @click="copy(template)" class="copy">
                    <p class="command"><span>{{template.command}}</span></p>
                    <div class="img">
                        <img :src="'https://cloud.preso.cc/v1/url/' + template.template + '?content=Quoted Tweet'" />
                    </div>
                </li>
            </ul>
        </div>

        <div class="cta">
            <a class="btn" href="https://github.com/presenta-software/presenta-lib/discussions">
                <span>Suggest New Templates</span>
            </a>
        </div>

        <FooterComp />
    </div>
</template>


<script>
import HeroHeader from '~/components/HeroHeader.vue'
import FooterComp from '~/components/FooterComp.vue'
import copyClipboard from '~/components/utils/copyClipboard'

export default {
  components:{
      HeroHeader,FooterComp
  },
  head () {
        return {
            title: 'React With Image for Twitter'
        }
  },
  async asyncData({ params }) {
        const t = [
  { command: '/text', template: 'GhZD3MDlBN:HnIClgJha', private: true },
  { command: '/lol', template: 'GhZD3MDlBN:DGdNz6qD8' },
  { command: '/support', template: 'GhZD3MDlBN:j9ZKDW6PZ' },
  { command: '/change', template: 'GhZD3MDlBN:K54giu7Aa' },
  { command: '/disaster', template: 'GhZD3MDlBN:Y3SwyOFoW' },
  { command: '/didit', template: 'GhZD3MDlBN:hIYsKw5CG' },
  { command: '/brag', template: 'GhZD3MDlBN:dIFNG0Ns6' }
]

        return {
            templates: t.filter(d => !d.private)
        }
  },
  methods:{
      copy(t){
          copyClipboard('@ReactWithImage ' + t.command)
      }
  }
}

</script>



<style scoped>
.command{
    display: flex;
    margin-bottom: .2rem;
}
.command span{
    padding: .1rem .5rem;
    border-radius: 6px;
    background: var(--accentcolor);
    font-size: .9rem;
}

.splash{
  display: flex;
  justify-content: center;
  width: 90%;
}
.splash img{
  width: 100%;
}

.copy{
    cursor: pointer;
    transition: transform .15s ease-in-out;
}
.copy:hover{
    transform: scale(1.1);
}

.cta{
    padding-top:3rem;
}

@media(min-width: 600px){
    .splash{
        width: 70%;
    }
}
@media(min-width: 900px){
    .splash{
        width: 50%;
    }
}
</style>