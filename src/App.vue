<template>
  <div id="app">
    <div class="wrapper">
      <HeaderWelcome />
      <ImgGrid />
      <transition name="component-fade" mode="out-in">
        <EmailSub v-if="!showOk" @submitted="onSubmit" key="email" />
        <OkThen v-if="showOk" :name="name" key="resp" />
      </transition>
    </div>
  </div>
</template>

<script>
import 'normalize-css'
import HeaderWelcome from './components/HeaderWelcome/component.vue'
import ImgGrid from './components/ImgGrid/component.vue'
import EmailSub from './components/EmailSub/component.vue'
import OkThen from './components/OkThen/component.vue'

export default {
  components:{
    HeaderWelcome, EmailSub, OkThen, ImgGrid
  },
  methods:{
    onSubmit(e){
      this.name = e.name
      this.showOk=true
    }
  },
  data(){
    return{
      showOk:false,
      name:''
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

html, body, video, #app{
  width: 100%;
  height: 100%;
}

body{
  padding: 0;
  margin: 0;
  font-family: ivyjournal, sans-serif;
  font-style: normal;
}

video{
  object-fit: cover;
  object-position: top left;
}

html{
  font-size:80%;
}

.wrapper{
    padding: 1rem;
}

p{
  font-size:1.25rem;
}

@media(min-width: 450px){
  html{
    font-size:85%;
  }
}

@media(min-width: 600px){
  html{
    font-size:90%;
  }
  body{
      padding:1rem;
  }
}

@media(min-width: 725px){
  html{
    font-size:100%;
  }
}

@media(min-width: 1000px){
  html{
    font-size:110%;
  }
}


.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
