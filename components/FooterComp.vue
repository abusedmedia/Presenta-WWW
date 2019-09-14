<template>
    <div class="footer">

        <div class="signup">
            <a class="btn" href="https://app.presenta.cc/signup">Make presentations fast!</a>
        </div>

        <footer>
            <div>
                <p class="relevant"><b><nuxt-link to="/">PRESENTA</nuxt-link></b> is an online application, currently in <b>public-beta</b>.</p>

                <p>You can <a href="https://app.presenta.cc/signup">sign-up</a> and use this version free of charge.<br />
                You can review the <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>, the <nuxt-link to="/cookie-policy">Cookie Policy</nuxt-link> and <nuxt-link to="/terms-of-service">Terms Of Use</nuxt-link> of <b>Presenta</b> application and website.</p>

                <p>Crafted with passion by <a href="https://fabiofranchino.com">@fabiofranchino</a> since 2018.</p>
            </div>
        </footer>
        
    </div>
</template>


<style scoped>
footer{
    background-color: var(--accentcolor);
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
    padding: 4rem 0;

    font-size:3em;
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