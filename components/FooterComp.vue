<template>
    <div class="footer">

        <div class="wrapper">
            <footer>
                <div>
                    <p class="relevant"><b><nuxt-link to="/">PRESENTA</nuxt-link></b> is an online application, currently in <b>candidate release 1.0</b>.</p>

                    <p>You can <a href="https://app.presenta.cc/signup">sign-up</a> and use this version free of charge.<br />
                    You can review the <nuxt-link to="/legal/privacy-policy">Privacy Policy</nuxt-link>, the <nuxt-link to="/legal/cookie-policy">Cookie Policy</nuxt-link> and <nuxt-link to="/legal/terms-of-service">Terms Of Use</nuxt-link> of <b>PRESENTA</b> application and website.</p>

                    <p>Have a wonderful day! <br />
                    <span class="little">Pssss! Do you know you're NOT tracked at all?</span></p>
                    
                </div>
            </footer>
        </div>
    </div>
</template>



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
    font-size:1.8rem;
}

p.relevant{
    font-size: 2rem;
}



.little{
    font-size: .9em;
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
    footer p{
        font-size:1rem;
    }
    p.relevant{
        font-size: 1.2rem;
    }
}
</style>