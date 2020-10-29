<template>
    <div class="footer">
        <div class="signup">
            <h3>PRESENTA App is still private.</h3>
            
            <p>Do you want an early access when it'll be ready?</p>
            <div class="request">
                <div v-if="status === 'start'">
                    <input type="email" @keyup.enter="onConfirm" v-model="email" placeholder="your@email.com"/>
                    <button :disabled="!isValid" @click="onConfirm">Yes!</button>
                </div>
                <div v-if="status === 'progress'">
                    Submitting... wait a bit.
                </div>
                <div v-if="status === 'done'">
                    You're in!
                </div>
                <div v-if="status === 'error'">
                    There was an error, sorry.  {{message}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            email:'',
            status: 'start',
            message:''
        }
    },
    computed:{
        isValid(){
            if (!this.email) return false
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

            try{
                res = await axios({
                    method:'GET',
                    url: process.env.NUXT_ENV_LAMBDA_MAILCHIMP + '?m=' + this.email
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
}

.wrapper div{
    padding: 1rem 2rem;
}

.footer p{
    text-align: center;
    font-size:1.8rem;
    margin: 1rem 0;
}
.signup{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;

    font-size:3em;
}


.signup h3{
    margin: 0;
    margin-bottom: 0rem;
}

.request{
    width: 100%;
}
.request > div{
    display: flex;
    width: 100%;
}
.request input{
    flex:1;
    padding: .5rem;
    border: 1px solid #000;
}
.request button{
    border: 1px solid #000;
    padding: .5rem 2rem;
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
        
    }

    .learnmore{
        font-size: 0.5rem;
    }
    .request input{
        margin-right: 10px;
    }
    .request button{
    }
    
}
</style>