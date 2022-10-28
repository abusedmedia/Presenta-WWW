<template>
    <div class="hero">
        
        <h1>Design in <b>Figma</b>,</h1>
        
        <!-- <div class="swapper">
            <h1>________</h1>
            <h1 class="word" :class="{show: idx === index}" v-for="(word, idx) in words" :key="word"><b>{{word}}</b></h1>
        </div> -->
        
        <h1>then <b class="high">Automate</b>!</h1>
        <p class="wrap"><b>Data-driven</b> documents for the <b>Automation</b> era.</p>

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
                'open graph',
                'catalogues', 
                'slides',
                'showcases',
                'invoices',
                'certificates',
                'reports',
                'badges',
                'receipts',
                'decks'
            ],
            index: 0,
            timer: 0
        }
    },
    mounted(){
        // this.timer = setInterval(() => {
        //     this.index++
        //     if(this.index >= this.words.length){
        //         this.index = 0
        //     }
        // }, 1000)
    },
    beforeDestroy(){
        clearInterval(this.timer)
    }
}
</script>


<style scoped>
h1{
    font-size:3.5rem;
    line-height: 3rem;
    margin:0;
    padding: 0;
}
h1 b{
    display: inline-block;
    background-color: var(--accentcolor);
}
h1 .high{
    background-color: unset;
    -webkit-text-stroke: 3px black;
    /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
    color: var(--accentcolor);
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

.wrap{
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: -.03rem;
}

@media(min-width: 600px){
    .hero{
        padding: 2rem .5rem;
        padding-top: 3rem;
    }
    h1{
        font-size:7.2rem;
        line-height: 6.2rem;
    }
    .wrap{
        font-size: 2rem;
    }
}



</style>