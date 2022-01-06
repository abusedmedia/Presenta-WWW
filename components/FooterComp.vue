<template>
    <div class="footer">

        <div class="wrapper">
            <footer>
                <div class="two">
                    <p class="relevant"><b><nuxt-link to="/">PRESENTA</nuxt-link></b> is an online platform, currently in <b>private release</b>.</p>
                    <p class="less"><b><nuxt-link to="/lib">PRESENTA Lib</nuxt-link></b> is an open-source javascript library released under the 3-Clause BSD license.</p>
                    <p>Have a wonderful day! <br />
                    <!-- <span class="little">In this site you're NOT tracked at all</span></p> -->
                    <p><a href="mailto:support@presenta.cc">Contact Us</a></p>
                </div>
                <div class="one">
                    <p class="relevant links">
                        <nuxt-link to="/use-cases">Use Cases</nuxt-link>
                        <nuxt-link to="/docs">API&nbsp;Docs</nuxt-link>
                        <nuxt-link to="/pricing">Pricing</nuxt-link>
                        <nuxt-link to="/lib">Open&nbsp;Source</nuxt-link>
                        <nuxt-link to="/tools">Tools</nuxt-link>
                        <nuxt-link to="/signup">Sign Up</nuxt-link>
                    </p>
                    <p class="less">Review the <nuxt-link to="/legal/privacy-policy">Privacy Policy</nuxt-link>, the <nuxt-link to="/legal/cookie-policy">Cookie Policy</nuxt-link> and <nuxt-link to="/legal/terms-of-service">Terms Of Use</nuxt-link> of <b>PRESENTA</b> applications and websites.</p>
                </div>
            </footer>
        </div>
    </div>
</template>



<script>
import balanceText from 'balance-text'

export default {
    mounted(){
        balanceText(this.$el.querySelectorAll('p'))
    }
}
</script>



<style scoped>
.wrapper{
}

footer{
    margin-top:4rem;
    background-color: #eee;
    display: flex;
    flex-direction: column;
}

.wrapper div{
    padding: 1rem;
}

.two, .one{
    text-align: center;
}

footer p{
    font-size:0.9rem;
    line-height: 1.5rem;
}

.relevant{
    font-size: 1.25rem;
    margin-bottom: 0;
}
.less{
    margin-top: 0;
    font-size: 0.8rem;
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

.links{
    margin-bottom: 1rem;
    font-size: 1rem;
}
.links a{
    padding: .25rem;
}
@media screen and (min-width: 450px) {
    
    footer{
        flex-direction: row;
        align-items: flex-end;
    }
    .two{
        flex:3;
        text-align: left;
    }
    .one{
        flex:1;
        text-align: right;
        
    }
}
</style>