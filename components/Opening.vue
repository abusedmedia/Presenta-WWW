<template>
        <div class="wrap">
            <div class="page">
                <div class="text">
                    <p class="main">We believe that presentations can be <b>built</b> and <b>experienced</b> differently.</p>
                    <p>More then 30 years ago <b>PowerPoint set the bar</b> about how presentations should be crafted.</p>
                    <p>After that, <b>we still move objects on canvas</b> to create documents for our communication needs.</p>
                    <p><b>We envision different ways</b> to build decks and slides, ways that are more effective, efficient and fun as well.</p>
                    <p>It’s a long ride and <a href="https://lib.presenta.cc/">PRESENTA Lib</a>, <i>our open-source javascript library</i>, marks another milestone in this journey.</p>
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

.text{
    text-align: center;
    font-size: 3rem;
}
.main{
    font-size: 3.5rem;
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