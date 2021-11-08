<template>
    <div class="hero">
        
        <h1>Build</h1>
        <div class="swapper">
            <h1>________</h1>
            <h1 class="word" :class="{show: idx === index}" v-for="(word, idx) in words" :key="word">{{word}},</h1>
        </div>
        
        <h1>the modern way.</h1>

        <!-- <QuoteStrip :message="'Your personal trainer that helps you presenting great!'" /> -->

    </div>
</template>


<script>
import QuoteStrip from '@/components/QuoteStrip'

export default {
    components:{
        QuoteStrip
    },
    data(){
        return{
            words:[
                'documents',
                'presentations', 
                'galleries', 
                'banners',
                'social cards', 
                'catalogues', 
                'slides',
                'showcases',
                'decks'
            ],
            index: 0,
            timer: 0
        }
    },
    mounted(){
        this.timer = setInterval(() => {
            this.index++
            if(this.index >= this.words.length){
                this.index = 0
            }
        }, 1000)
    },
    beforeDestroy(){
        clearInterval(this.timer)
    }
}
</script>
<style scoped>

.hero{
    padding:2rem 2rem;
    padding-top: 2rem;
}
h1{
    font-size:3.4rem;
    line-height: 3.1rem;
    margin:0;
    padding: 0;
    text-align: center;
    font-weight: 900;
    letter-spacing: -.2rem;
}

h1 b{
    display: inline-block;
    background-color: var(--accentcolor);
}

.swapper{
    position: relative;
}
.swapper h1{
    position: absolute;
    top:0;
    width: 100%;
}
.swapper h1:first-child{
    position: initial;
    visibility: hidden;
}

.word{
    transition: all .6s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: scale(1.25);
    opacity: 0;
}
.show{
    transform: scale(1);
    opacity: 1;
}

@media(min-width: 600px){
    .hero{
        padding: 2rem .5rem;
        padding-top: 3rem;
    }
    h1{
        font-size:7.2rem;
        line-height: 5.7rem;
    }
  
}



</style>