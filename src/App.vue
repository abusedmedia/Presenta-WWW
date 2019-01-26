<template>
  <div id="app">
    <EmailSub @submitted="onSubmit" />
    <OkThen :mountd="showOk" />
  </div>
</template>

<script>
import 'normalize-css'
import EmailSub from './components/EmailSub/component.vue'
import OkThen from './components/OkThen/component.vue'

export default {
  components:{
    EmailSub, OkThen
  },
  methods:{
    onSubmit(){
      console.log('OK')
      this.showOk=true
    }
  },
  data(){
    return{
      showOk:false
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
  overflow: hidden;
  font-family: ivyjournal, sans-serif;
  font-style: normal;
}

video{
  object-fit: cover;
  object-position: top left;
}

</style>
