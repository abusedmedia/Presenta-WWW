<template>
  <div id="app">
      <HeaderWelcome />
      <ImgGrid />
      <transition name="component-fade" mode="out-in">
        <EmailSub v-if="!showOk" @submitted="onSubmit" key="email" />
        <OkThen v-if="showOk" :name="name" key="resp" />
      </transition>
  </div>
</template>

<script>
import '~/css/normalize.css'
import '~/css/style.css'
import HeaderWelcome from '~/components/HeaderWelcome/component.vue'
import ImgGrid from '~/components/ImgGrid/component.vue'
import EmailSub from '~/components/EmailSub/component.vue'
import OkThen from '~/components/OkThen/component.vue'

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
