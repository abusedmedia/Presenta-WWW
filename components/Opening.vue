<template>
        <div class="wrap">
            <div class="page">
                <div class="text">

                    <p class="main">The <b>automation</b> platform <br /> for <b>data-driven</b> presentational documents.</p>
                    <p>We believe that presentational documents can be <b>built</b> and <b>experienced</b> differently.</p>
                    <!-- <p>More then 30 years ago <b>PowerPoint set the bar</b> about how presentations should be crafted.</p> -->
                    <!-- <p>After that, <b>we still move objects on canvas</b> to create documents for our communication needs.</p> -->
                    <p>We envision <b>different ways</b> to build <b>slides</b>, <b>cards</b>, <b>banners</b>, <b>catalogues</b>, ways that are more effective, efficient and fun as well.</p>
                    <p>It’s a long ride and <a href="https://lib.presenta.cc/">PRESENTA Lib</a>, <i>our open-source javascript library</i>, marks a key milestone in this journey.</p>
                </div>
            </div>
        </div>        
</template>



<script>
import balanceText from 'balance-text'

export default {
    mounted(){
        balanceText(this.$el.querySelectorAll('p'), {watch: true})
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
    font-size: 3rem;
}
.main{
    font-size: 3.5rem;
    line-height: 4rem;
}

.main b{
    background-color: var(--accentcolor);
}

@media screen and (min-width: 450px) {
    .text{
        font-size:2rem;
    }

    .main{
        font-size: 3rem;
    }
}
</style>