<template>
    <div class="footer">
        <div class="wrapper">
            <footer>

                <div>
                    <p class="relevant">Made with ❤️ in Italy! – <b><a href="mailto:support@presenta.cc">Talk to Us</a></b>
                    <p class="relevant"><b><nuxt-link to="/">PRESENTA</nuxt-link></b>: the automation platform for data-driven presentational documents.</p>
                    <!-- <span class="little">In this site you're NOT tracked at all</span></p> -->
                    <p></p>
                </div>
                
                <div class="row">

                    <div class="col" v-for="col in menu" :key="col.title">
                        <p>{{col.title}}</p>
                        <ul>
                            <li v-for="link in col.links" :key="link.url">
                                <nuxt-link v-if="!link.external" :to="link.url">{{link.label}}</nuxt-link>
                                <a  v-if="link.external" target="_blank" :href="link.url">{{link.label}}</a>
                            </li>
                        </ul>
                    </div>

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
    },
    computed:{
        menu(){
            return [
                
                {title: 'Platform', links: [
                    {label:'Use Cases', url:'/use-cases'},
                    {label:'API', url:'/api'},
                    {label:'Pricing', url:'/pricing'},
                    {label:'Templates', url:'/templates'},
                    {label:'Changelog', url:'/changelog'},
                    {label:'Sign Up', url:'/signup'}
                ]},

                {title: 'Resources', links: [
                    {label:'Javascript Lib', url:'/lib'},
                    {label:'Github', url:'https://github.com/presenta-software', external:true},
                    {label:'Tools', url:'/tools'}
                    //{label:'Blog', url:'/blog'}
                ]},
                
                {title: 'Features', links: [
                    {label:'Image Generation', url:'/features/image-generation-api'},
                    {label:'Document Generation', url:'/features/document-generation-api'},
                    {label:'PDF Generation', url:'/features/pdf-generation-api'},
                    {label:'Open-Graph Generation', url:'/features/open-graph-generation-api'},
                    {label:'Social Preview Generation', url:'/features/social-preview-generation-api'}
                ]},


                {title: 'About', links: [
                    //{label:'About', url:'/about'},
                    //{label:'Status', url:''},
                    //{label:'Contact', url:''},
                    {label:'Privacy Policy', url:'/legal/privacy-policy'},
                    {label:'Cookie Policy', url:'/legal/cookie-policy'},
                    {label:'Terms Of Use', url:'/legal/terms-of-service'}
                ]}
            ]
        }
    }
}
</script>


<style scoped>
.wrapper{
}

footer{
    margin-top:4rem;
    background-color: #3B404B;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    color: #D0D6E1;
}


footer p{
    font-size:0.9rem;
    line-height: 1.5rem;
}

.relevant{
    font-size: 1.25rem;
    margin: .25rem 0;
}
.less{
    margin-top: 0;
    font-size: 0.8rem;
}


.little{
    font-size: .9em;
}

footer a{
    color: #fff;
    text-decoration: none;
}

footer ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
footer li{
    margin: 0;
    padding: .25rem 0 ;
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

.row{
    display: flex;
    flex-wrap: wrap;
}

a:hover{
    color: #3B404B;
}

.col{
    margin-top: 1.5rem;
    width: 50%;
}
.col p{
    font-size: 1.15rem;
    margin: .4rem 0;
}
.col a{
    font-size: .85rem;
}

@media screen and (min-width: 600px) {
    footer{
        padding: 2rem 4rem;
    }
    .col{
        flex:1;
        padding: 1rem;
    }
    .col:first-child{
        padding-left: 0;
    }
    .col:last-child{
        padding-right: 0;
    }
    .row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }    
}


</style>