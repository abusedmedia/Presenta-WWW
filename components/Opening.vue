<template>
        <div class="wrap">
            <div class="page">
                <div class="text">


                    <p class="wrap main"><b>PRESENTA</b> is the <mark>automation</mark> platform for <mark>data-driven</mark> presentational documents.</p>
                    <!-- <p>More then 30 years ago <b>PowerPoint set the bar</b> about how presentations should be crafted.</p> -->
                    <!-- <p>After that, <b>we still move objects on canvas</b> to create documents for our communication needs.</p> -->
                    <p class="wrap">We envision <b>alternative ways</b> to create <b>slides</b>, <b>cards</b>, <b>banners</b>, <b>catalogues</b>, <b>galleries</b> and <b>showcases</b>, ways that are more effective, efficient and fun as well.</p>
                    <p class="wrap">It’s a long ride and <a href="/lib">PRESENTA&nbsp;Lib</a>, <i>our open-source javascript library</i>, marks a key milestone in this journey.</p>
                </div>
            </div>
        </div>        
</template>



<script>
import balanceText from 'balance-text'

export default {
    mounted(){
        balanceText(this.$el.querySelectorAll('.wrap'), {watch: true})
    }
}
</script>




<style scoped>

a{
    background-color: var(--accentcolor);
}
a:hover{
    color: white;
    background-color: #000;
}

.text{
    text-align: center;
    font-size: 1.75rem;
    line-height: 2.25rem;
    letter-spacing: -.03rem;
}
.main{
    font-size: 2.75rem;
    line-height: 3rem;
    letter-spacing: -.1rem;
}

.main mark{
    background-color: var(--accentcolor);
    font-weight: 700;
}

@media screen and (min-width: 450px) {
    
}
</style>
