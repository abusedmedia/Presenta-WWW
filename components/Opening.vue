<template>
        <div class="wrap">
            <div class="page">
                <div class="text">
                    <p class="main">We believe that presentations can be built and experienced differently.</p>
                    <p>More then 30 years ago <b>PowerPoint set the bar</b> about how presentation documents should be crafted.</p>
                    <p>After that, we still <b>move objects on canvas</b> to create documents for our communication needs.</p>
                    <p>Nowadays, we can <b>envision different ways</b> to build decks, ways that are more effective, efficient and fun as well.</p>
                    <p>It’s a long ride and our open-source javascript library, <a href="https://lib.presenta.cc/">PRESENTA Lib</a>, marks another milestone in this journey.</p>
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

@media screen and (min-width: 450px) {
    .text{
        font-size:2rem;
    }

    .main{
        font-size: 3rem;
    }
}
</style>