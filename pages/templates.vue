<template>
    <div class="body">

        <div class="hero">
            <h1>Templates</h1>
            <h3><b>FREE Templates</b> to start using <b>PRESENTA</b> and the <b>Cloud API</b> in seconds.</h3>
            <h3>Start generating document variations to support your <b>Automation strategy</b>.</h3>
        </div>

        <div class="container">
            <div class="grid">
                <div class="toolbar">
                    <div @click="selectCat(cat)"
                        :class="{disabled: cat.disabled, active: currentCategory && cat.id === currentCategory.id}"
                        v-for="cat in categories" :key="cat.id" class="item">{{cat.label}}</div>
                </div>
            </div>
        </div>

        <div class="container" v-if="currentCategory">
            <div class="grid">
                <div class="description">
                    <p>{{currentCategory.description}}</p>
                </div>
            </div>
            <ul class="grid">
                <li v-for="template in currentCategory.templates" :key="template.id">
                    <div class="img">
                        <img :src="'https://cache.presenta.workers.dev/' + template.id" />
                    </div>
                </li>
            </ul>
        </div>

        <CTA />

        <FooterComp />
    </div>
</template>


<script>
import HeroHeader from '~/components/HeroHeader.vue'
import CTA from '~/components/CTA.vue'
import FooterComp from '~/components/FooterComp.vue'
import ToolsExamples from '~/components/ToolsExamples.vue'

export default {
  components:{
      HeroHeader,CTA,FooterComp,ToolsExamples
  },
  head () {
        return {
            title: 'Automation Templates Marketplace'
        }
  },
  data(){
      return{
          currentCategory: null
      }
  },
  mounted(){
      this.currentCategory = this.categories[0]
  },
    async asyncData({ params }) {
        let res = await import(`~/content/templates.json`)
        return {
            categories: res.categories
        }
    },
    methods:{
        selectCat(cat){
            this.currentCategory = cat
        }
    }
}

</script>




<style scoped>
.toolbar{
    display: flex;
    width: 100%;
    padding:1rem;
}
.toolbar .item{
    padding: 0.5rem 1rem;
    font-size: .8rem;
    background: #eee;
    flex:1;
    text-align: center;
    margin-right:1px;
}
.toolbar .active{
    border-top: 2px solid #ddd;
    background: #fff
}
.toolbar .item:not(.active):hover{
    background: #ddd;
    cursor: pointer;
}
.toolbar .item.disabled{
    opacity: .5;
    pointer-events: none;
}

.description{
    padding: 0 1rem;
    font-size: 1.25rem;
}
</style>