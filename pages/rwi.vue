<template>
    <div class="body">

        <div class="hero">
            <h1>@ReactWithImage</h1>
            <h2>Add Personalized Images <br />in your <mark>Twitter</mark> conversations</h2>
        </div>

        <div class="container">
            <div class="splash">
                <img src="/rwi-splash.jpg" />
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
            <a class="btn" href="https://twitter.com/ReactWithImage">
                <span>Follow @ReactWithImage</span>
            </a>
        </div>

        <FooterComp />
    </div>
</template>


<script>
import HeroHeader from '~/components/HeroHeader.vue'
import FooterComp from '~/components/FooterComp.vue'
import copyClipboard from '~/components/utils/copyClipboard'
import axios from 'axios'

export default {
  components:{
      HeroHeader,FooterComp
  },
  data(){
      return{
          templates:[]
      }
  },
  async mounted(){
      const res = await axios('https://cloud.preso.cc/commands.json')
      const dt = res.data
      const list = dt.list || []
      this.templates = list.filter(d => !d.private)
  },
  head () {
        return {
            title: 'React With Image for Twitter'
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
  width: 100%;
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
        width: 90%;
    }
}
@media(min-width: 900px){
    .splash{
        width: 70%;
    }
}
</style>