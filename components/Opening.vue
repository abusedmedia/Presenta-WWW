<template>
        <div class="wrap">
            <div class="page">
                <div class="text">
                    <p class="main">We believe that presentations can be experienced differently.</p>
                    <p>More then 30 years ago <b>PowerPoint set the bar</b> about how presentation documents should be crafted.</p>
                    <p>After those years, we still <b>move objects on canvas</b> to create documents to support our communication needs.</p>
                    <p>Nowadays, we are in a position to <b>envision different ways</b> to build decks, ways that are more effective, efficient and fun as well.</p>
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
.text{
    font-size:2rem;
    text-align: center;
}

.main{
    font-size: 3rem;
}
</style>