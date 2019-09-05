<template>
    <div class="wrapper">
        <div class="list">
            <div :key="col" 
                :class="getCls(col)" 
                v-for="col in colors" 
                @mouseenter="changeColor(col)"
                @touchstart="changeColor(col)">

                <div></div>    
                <div></div>    
                <div></div>    
                <div></div>    

            </div>
        </div>
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
        getCls(col){
            var ob = {}
            ob.selected = col === this.icolor
            ob[col] = true
            return ob
        }
    },
    computed:{
        ...mapGetters(['color', 'colors'])
    }
}
</script>


<style scoped>

.wrapper{
    padding-bottom: 1rem;
}

.list{
    display: flex;
}

.list > div{
    width: 40px;
    height: 40px;
    display: flex;
    
    display: flex;
    flex-wrap: wrap;
    margin-right: .5rem;
    border:2px solid #eee;
}

.list > div > div{
    width: 50%;
    height: 50%;
}
.list > div > div:nth-child(1){
    background-color: var(--backcolor);
}
.list > div > div:nth-child(2){
    background-color: var(--forecolor);
}
.list > div > div:nth-child(3){
    background-color: var(--accentcolor);
}
.list > div > div:nth-child(4){
    background-color: var(--otheraccentcolor);
}


.list > div.selected{
    border:2px solid #000;
}

</style>