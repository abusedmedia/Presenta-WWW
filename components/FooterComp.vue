<template>
    <div class="footer">
        
        <div class="signup">
            <h4>Get started with PRESENTA</h4>
            <a class="btn" href="https://app.presenta.cc/signup">
                <span>Create an account</span>
            </a>
        </div>
        <div class="learnmore" v-if="!noHomeLink">
            <nuxt-link to="/">or learn more from the home-page</nuxt-link>
        </div>

        <div class="wrapper">
            <footer>
                <div>
                    <p class="relevant"><b><nuxt-link to="/">PRESENTA</nuxt-link></b> is an online application, currently in <b>public-beta</b>.</p>

                    <p>You can <a href="https://app.presenta.cc/signup">sign-up</a> and use this version free of charge.<br />
                    You can review the <nuxt-link to="/legal/privacy-policy">Privacy Policy</nuxt-link>, the <nuxt-link to="/legal/cookie-policy">Cookie Policy</nuxt-link> and <nuxt-link to="/legal/terms-of-service">Terms Of Use</nuxt-link> of <b>PRESENTA</b> application and website.</p>

                    <p>Have a wonderful day! <br />
                    <span class="little">Pssss! Do you know you're NOT tracked at all?</span></p>
                    
                </div>
            </footer>
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
.wrapper{
    box-shadow: 10px 10px 0 #000;
    padding: 1rem;
        padding-right: 1.5rem;

}

footer{
    margin-top:4rem;
    box-shadow: 10px 10px 0 #000;
    background-color: var(--accentcolor);
}

.wrapper div{
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

.little{
    font-size: .7rem;
}

mark{
    background-color: var(--forecolor);
    color: var(--backcolor);
    padding:.1rem .5rem;
}

footer a{
    color: #000;
}

.btn{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.btn .mini{
    font-size: 1rem;
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