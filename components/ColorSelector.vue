<template>
    <div>
        <select v-model="icolor" @change="changeCol">
            <option :key="col" v-for="col in colors">{{col}}</option>
        </select>
    </div>
</template>


<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    data(){
        return{
            icolor:''
        }
    },
    mounted(){
        this.icolor = this.color
    },
    watch:{
        color(v){
            this.icolor = v
        }
    },
    methods:{
        ...mapMutations(['changeColor']),
        changeCol(){
            this.changeColor(this.icolor)
        }
    },
    computed:{
        ...mapGetters(['color', 'colors'])
    }
}
</script>