<template>
    <div :style="outstyles"></div>
</template>

<script>
export default {
    props:{
        tb:String,
        lr:String,
        col:String
    },
    data(){
        return{
            h:0,
            w:0
        }
    },
    mounted(){
        this.h = 5 + Math.random()*3 * 5
        this.w = Math.random()*200
    },
    computed:{
        outstyles(){
            let ob = {}
            ob[this.tb] = 0
            ob[this.lr] = 0
            ob.width = this.w + 'px'
            ob.height = this.h + 'px'
            ob.backgroundColor = `var(${this.col})`
            return ob
        }
    }
}
</script>
<style scoped>
div{
    position: absolute;
}

@media screen and (min-width: 450px) {
    div{
        display: block;
    }
}
</style>