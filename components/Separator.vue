<template>
    <div class="out" :style="outstyles">
        <div class="in" :style="instyles"></div>
    </div>
</template>

<script>
export default {
    props:{
        h:Number,
        w:Number,
        pos:String,
        col:String
    },
    computed:{
        outstyles(){
            return {height: this.h + 'px', justifyContent: this.pos}
        },
        instyles(){
            return {width: this.w + '%', backgroundColor: `var(${this.col})`}
        }
    }
}
</script>
<style scoped>
.out{
    display:flex;
}
.in{
    height: 100%;
}
</style>