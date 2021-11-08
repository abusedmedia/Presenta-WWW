<template>
        <div class="wrap">
            <div class="page">
                <div class="text">

                    <p class="wrap main"><b>PRESENTA</b> is the <mark>automation</mark> platform for <mark>data-driven</mark> presentational documents.</p>
                    
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
    background-color: var(--accentlight);
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

.main mark{
    background-color: var(--accentlight);
    font-weight: 700;
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