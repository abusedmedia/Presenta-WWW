<template>
    <div class="footer">

        <div class="signup">
            <a class="btn" href="https://app.presenta.cc/signup">Bring me to sign-up!</a>
        </div>

        <footer>
            <div>
                <p class="relevant"><b><nuxt-link to="/">PRESENTA</nuxt-link></b> is an online application, currently in <mark>public-beta</mark>.</p>

                <p>You can <a href="https://app.presenta.cc/signup">sign-up</a> and use this version free of charge.<br />
                You can read the <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link> and <nuxt-link to="/terms-of-service">Terms Of Use</nuxt-link> of the tool.</p>

                <p>Crafted with passion by <a href="https://fabiofranchino.com">@fabiofranchino</a> since 2018.<br />
                You can contact the owner using <a href="mailto:contact@presenta.cc">this email</a>.</p>
            </div>
        </footer>
        
    </div>
</template>


<style scoped>
footer{
    background-color: var(--backcolor);
    color: var(--forecolor);
    font-family: ivyjournal, sans-serif;
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

a{
    color: var(--forecolor);
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