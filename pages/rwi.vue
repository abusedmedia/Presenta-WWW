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
                    @click="copy(template)" :class="{clicked:template.copy}" class="copy">
                    <p class="command"><span>{{template.command}}</span></p>
                    <div class="img">
                        <img :src="'https://cloud.preso.cc/v1/url/' + template.template + '?content=Quoted Tweet&name=John Doe&username=@johndoe&profile_image=https://cdn.presenta.cc/faces/s_6F9FA8C635E5B49A4AA9474CB76D1146BC1F6408CE5EEC320713FFF4758F98B5_1569007593653_003586.jpg'" />
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
      let list = dt.list || []
      list = list.filter(d => !d.private)
      list.forEach(d => d.copy = false)
      this.templates = list
  },
  head () {
        return {
            title: 'React With Image for Twitter'
        }
  },
  methods:{
      copy(t){
          t.copy=true
          copyClipboard('@ReactWithImage ' + t.command)
          setTimeout(() => t.copy = false, 150)
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
  align-items: flex-start;
  width: 100%;
}
.splash img{
  width: 100%;
}

.copy{
    cursor: pointer;
    transition: transform .15s ease-in-out, opacity .1s cubic-bezier(0.895, 0.03, 0.1, 0.9);
}
.copy:hover{
    transform: scale(1.1);
}

.copy.clicked{
    opacity: .5;
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