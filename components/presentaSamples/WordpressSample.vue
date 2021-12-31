<template>
    <div class="feature">

        <div class="incipit">
            <h4>Wordpress 👉 Catalog</h4>

            <h2>Fetch Wordpress API, build a product catalog.</h2>

            <p>Fetch a list of Product items on <b>Wordpress API</b> and build a real product catalog using a powerful template.<br />
            <span class="tiny">(Select between pre-backed fetches from Wordpress.com demos)</span></p>
        
        </div>

        <div class="columns">
            <div class="left">
                    
                <div class="selector">
                    <div class="elem" @click="selectThis(idx)"
                        v-for="(opt,idx) in options" :key="opt"
                        :class="{selected: idx === selected}">
                        {{opt}}
                    </div>
                    
                </div>
            </div>

            <div class="right">
                <client-only>
                    <Wordpress v-if="source" :source="source" />
                </client-only>
            </div>
        </div>

    </div>
</template>


<script>
import Wordpress from './Wordpress.vue'
import axios from 'axios'

export default {
    components:{
        Wordpress
    },
    data(){
        return{
            options: ['Huntt', 'Rebalance', 'Boardwalk'],
            selected: 0,
            source: null
        }
    },
    watch:{
        selected(){
            this.changeSample()
        }
    },
    mounted(){
        this.changeSample()
    },
    methods:{
        selectThis(idx){
            this.selected = idx
        },
        async changeSample(){
            this.source = null
            const data = await axios('/stubs/wordpress' + this.selected + '.json')
            this.source = data.data
            console.log(this.source)
        }
    }
}
</script>



<style scoped>
.elem.selected{
    border-bottom: 4px solid black;
    background: var(--accentcolor);
}

.selector{
    display: flex;
}
.elem{
    border-bottom: 4px solid transparent;
    flex:1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    cursor: pointer;
}
.elem:hover{
    background: #eee;
}
</style>