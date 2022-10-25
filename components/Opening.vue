<template>
        <div class="wrap">
            <div class="page">
                <div class="text">


                    <p class="wrap main"><b>PRESENTA</b> is the <mark>automation</mark> platform for <mark>data-driven</mark> presentational assets.</p>
                    <!-- <p>More then 30 years ago <b>PowerPoint set the bar</b> about how presentations should be crafted.</p> -->
                    <!-- <p>After that, <b>we still move objects on canvas</b> to create documents for our communication needs.</p> -->
                    <p class="wrap">Create automatically <b>cards</b>, <b>banners</b>, <b>catalogues</b>, <b>presentations</b>, <b>galleries</b>, <b>reports</b>, <b>certificates</b> and <b>showcases</b> using pre-made or custom designed <b>templates</b> and our <b>Cloud APIs</b> Infrastructure.</p>
                    
                    <div class="splash">
                        <img class="desktop" src="/automation-scheme-desktop.svg" />
                        <img class="mobile" src="/automation-scheme-mobile.svg" />
                    </div>

                    <!-- <p class="wrap">
                        Learn more by checking some <nuxt-link to="/use-cases">use cases</nuxt-link>
                        and our open-source <nuxt-link to="/lib">javascript library</nuxt-link> capabilities.
                    </p> -->
                    
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

.splash{
    display: flex;
    justify-content: center;
}
.splash img{
    width: 100%;
}

.splash .desktop{
    display: none;
}

@media screen and (min-width: 520px) {
    .splash img{
        width: 70%;
    }
    .splash .desktop{
        display: block;
    }
    .splash .mobile{
        display: none;
    }
}
</style>
