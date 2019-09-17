<template>
    <div class="footer">

        <div class="signup">
            <a class="btn" href="https://app.presenta.cc/signup">Make <b>awesome</b> presentations!</a>
        </div>
        <div class="learnmore" v-if="!noHomeLink">
            <nuxt-link to="/">or learn more from the home-page</nuxt-link>
        </div>

        <footer>
            <div>
                <p class="relevant"><b><nuxt-link to="/">PRESENTA</nuxt-link></b> is an online application, currently in <b>public-beta</b>.</p>

                <p>You can <a href="https://app.presenta.cc/signup">sign-up</a> and use this version free of charge.<br />
                You can review the <nuxt-link to="/legal/privacy-policy">Privacy Policy</nuxt-link>, the <nuxt-link to="/legal/cookie-policy">Cookie Policy</nuxt-link> and <nuxt-link to="/legal/terms-of-service">Terms Of Use</nuxt-link> of <b>Presenta</b> application and website.</p>

                <p>Have a wonderful day!</p>
                <!-- <p>Crafted with passion by <a href="https://fabiofranchino.com">@fabiofranchino</a> since 2018.</p> -->
            </div>
        </footer>
        
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
footer{
    background-color: var(--accentcolor);
    margin-top:4rem;
}
footer div{
    padding: 1rem 2rem;
}

footer p{
    text-align: center;
    font-size:1.4rem;
}

p.relevant{
    font-size: 1.6rem;
}

.signup{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;

    font-size:3em;
}

.learnmore{
    text-align: center;
    padding:1rem;
}
.learnmore a{
    color:#000;
}


mark{
    background-color: var(--forecolor);
    color: var(--backcolor);
    padding:.1rem .5rem;
}

footer a{
    color: #000;
}

@media screen and (min-width: 450px) {
    .signup{
        font-size:2em;
    }

    footer p{
        font-size:1rem;
    }
    p.relevant{
        font-size: 1.2rem;
    }
}
</style>