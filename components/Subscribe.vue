<template>
    <div class="footer">
        <div class="signup">
            <h3 class="marked">PRESENTA Platform is by invitation only.</h3>

            <!-- <p>You can follow the platform progress on our <a href="https://twitter.com/PresentaSw" target="_blank">Twitter</a> or <a href="https://www.linkedin.com/company/presenta-platform/" target="_blank">Linkedin</a>
            <br /> -->
             <p>You can ask for it:</p>
            <div class="request">
                <div v-if="status === 'start'">
                    <div class="row">
                        <input @keyup.enter="onConfirm" type="text" v-model="first_name" placeholder="Firstname"/>
                        <input @keyup.enter="onConfirm" type="text" v-model="last_name" placeholder="Lastname"/>
                    </div>
                    <div class="row">
                        <input @keyup.enter="onConfirm" type="text" v-model="company" placeholder="Company Name"/>
                    </div>
                    <div class="row">
                        <input @keyup.enter="onConfirm" class="email" type="email" v-model="email" placeholder="your@company.email"/>
                        <button :disabled="!isValid" @click="onConfirm">Yes!</button>
                    </div>

                    <div class="row checkbox">
                        <input id="privacy" type="checkbox" class="check" v-model="optin" />
                        <label for="privacy"><small>I'm ok receiving information about the platform and I read the <nuxt-link to="/legal/privacy-policy">Privacy Policy</nuxt-link>.</small></label>
                    </div>

                    
                </div>
                <div class="message" v-if="status === 'progress'">
                    Submitting... wait a bit.
                </div>
                <div class="message" v-if="status === 'done'">
                    You're in the waiting list! We'll let you know. Thanks!
                </div>
                <div class="message" v-if="status === 'error'">
                    There was an error, sorry.  {{message}}
                </div>
            </div>

            <!-- <p class="minor">Meanwhile, you can play with our <a href="https://play.presenta.cc/">Playground!</a></p> -->

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    components:{
    },
    data(){
        return{
            email:'',
            first_name: '',
            last_name:'',
            company:'',
            optin:false,
            status: 'start',
            message:''
        }
    },
    computed:{
        isValid(){
            if (!this.email || !this.first_name || !this.last_name || !this.company || !this.optin) return false
            var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g
            var match = this.email.match(regExp)
            return match
        }
    },
    methods:{
        async onConfirm(){
            
            if(!this.isValid) return

            let ref = this.$route.path
            
            let res = null
            this.status = 'progress'

            const url = `${process.env.NUXT_ENV_LAMBDA_MAILCHIMP}?m=${this.email}&f=${this.first_name}&l=${this.last_name + '||' + this.company}`

            try{
                res = await axios({
                    method:'GET',
                    url
                })
            }catch(err){
                this.message = err
            }

            if(res && res.status === 200){
                this.status = 'done'
            }else{
                this.status = 'error'
                this.message = res.message
            }


        }
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
    padding: 0 2rem;
    margin-top: 3rem;
}

.marked{
    display: inline-block;
    background-color: var(--accentcolor);
}

.wrapper div{
    padding: 1rem 2rem;
}

.footer p{
    text-align: center;
    font-size:1.1rem;
    margin: 1rem 0;
}
p.minor{
    font-size: 1rem;
}
.signup{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;

}


.signup h3{
    margin: 0;
    margin-bottom: 0rem;
    font-size:1.75rem;
    text-align: center;
}

.request{
    width: 100%;
    font-size: 1rem;
}
.request > div{
    width: 100%;
}
.request input{
    padding: .75rem;
    border: 1px solid #000;
    margin-bottom: 1rem;
}
.request input:not([type="checkbox"]){
    flex:1;
}



.check{
    height: 25px;
    width: 25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 2px solid #fff;
    outline: none;
    background-color: #fff;
    cursor: pointer;
    margin-right: .5rem;

}
.check:checked {
    border: 2px solid #000;
    background-color: var(--accentcolor);
}
.check:active {
    border: 2px solid #000;
}


.request .row.checkbox{
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
}

.request button{
    border: 1px solid #000;
    padding: .75rem 2rem;
    background-color: var(--accentcolor);
    transition: all .1s ease-in-out;
}
.request button:not(:disabled):hover{
    color: var(--accentcolor);
    background-color: #000;
}

.request button:disabled{
    background-color: #ccc;
    cursor: not-allowed;
}
.request .row{
    display: flex;
    flex-direction: column;
}
.request .email{
    flex:1;
}


.message{
    text-align: center;
    border: 3px solid var(--accentcolor);
    padding: .5rem;
}


a{
    background-color: var(--accentcolor);
}
a:hover{
    color: white;
    background-color: #000;
}


@media screen and (min-width: 450px) {
    .signup{
        font-size:2em;
        padding: 0 3rem;
    }
    .request{
        font-size: 1.8rem;
    }
    .request input:last-child{
        margin-right: 0;
    }
    .request input{
        margin-right: 10px;
        margin-bottom: 0;
    }
    .request .row{
        flex-direction: row;
        margin-bottom: 1rem;
    }
    .request .row.checkbox{
    }

    
}
</style>