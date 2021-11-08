<template>
    <div class="feature">
        <div class="left">
            <h2><mark>Unsplash 👉 Gallery</mark></h2>

            <p>Search <b>Unsplash</b> and build an image gallery:<br />
            <span class="tiny">(Select between pre-backed searches for demo purposes)</span></p>
                
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
                <Unsplash v-if="source" :source="source" />
            </client-only>
        </div>

    </div>
</template>


<script>
import Unsplash from './Unsplash.vue'
import axios from 'axios'

export default {
    components:{
        Unsplash
    },
    data(){
        return{
            options: ['Cat', 'Dog', 'Bike'],
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
            const data = await axios('/stubs/unsplash' + this.selected + '.json')
            this.source = data.data
            this.source.index = this.selected
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
    height: 70px;
    cursor: pointer;
}
.elem:hover{
    background: #eee;
}
</style>