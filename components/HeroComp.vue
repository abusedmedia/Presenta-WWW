<template>
    <div>

        <div class="hero">

            <h1 v-html="block.title"></h1>
            
            <p class="wrap" v-html="block.subtitle"></p>
        
        </div>
        <div class="hsplash">
            <picture>
            <source :srcset="block.imageDesktop" media="(min-width: 600px)">
            <img :src="block.imageMobile" />
            </picture>
        </div>

    </div>
</template>


<script>

export default {
    props:{
        block:Object
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
h1 >>> b{
    display: inline-block;
    background-color: var(--accentcolor);
}
h1 >>> .high{
    background-color: unset;
    /* -webkit-text-stroke: 2px black; */
    /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
    /* color: var(--accentcolor); */

    text-decoration: underline;
    text-decoration-color: var(--accentcolor);
    text-decoration-thickness: 12px;
}
h1 >>> .break{
    word-wrap: break-word;
    width: 100%;
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
    line-height: 2rem;
    letter-spacing: -.03rem;
}
.wrap >>> b{
    background-color: unset;
    text-decoration: underline;
    text-decoration-color: var(--accentcolor);
    text-decoration-thickness: 6px;
}

.wrap >>> a{
    text-decoration: none;
    background-color: var(--accentcolor);
    text-transform: uppercase;
    font-size: 60%;
    padding: .2rem .5rem;
}
.wrap >>> a:hover{
    background-color: white;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: var(--accentcolor);
}

.wrap{
    margin-bottom: 0;
}

.wrap.learnmore{
    font-size: 1.2rem;
    margin-bottom: 2rem;
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
        line-height: 2.3rem;
        font-size: 2rem;
    }
}


</style>