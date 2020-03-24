<template>
    <div class="footer">
        <div class="signup">
            <h3>Get started with PRESENTA</h3>
            <a class="btn" href="https://app.presenta.cc/signup">
                <span>Create an account</span>
            </a>
        </div>
        <div class="learnmore" v-if="!noHomeLink">
            <nuxt-link to="/">or learn more from the home-page</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        noHomeLink:false
    }
}
</script>




<style scoped>
.footer{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom:3rem;
}

.wrapper div{
    padding: 1rem 2rem;
}

.footer p{
    text-align: center;
    font-size:1.8rem;
}
.signup{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;

    font-size:3em;
}


.signup h4{
    margin: 0;
    margin-bottom: 1rem;
}



.learnmore{
    text-align: center;
    padding:1rem;
}
.learnmore a{
    color:#000;
}

@media screen and (min-width: 450px) {
    .signup{
        font-size:2em;
    }

    footer p{
        font-size:1rem;
    }
    
}
</style>