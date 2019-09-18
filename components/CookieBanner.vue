<template>
    <div class="wrapper" :class="{visible:needToBeVisible}" @click="isScroll">
        <div class="inner">

            <div class="close">Close</div>

            <p>This website or its third-party tools use cookies, 
                which are necessary for its functioning and required 
                to achieve the purposes illustrated in the cookie policy. 
                If you want to learn more or withdraw your consent 
                to all or some of the cookies, 
                please refer to the <nuxt-link to="/legal/cookie-policy">cookie policy</nuxt-link>.</p>

            <p>You accept the use of cookies by closing 
                or dismissing this notice, by scrolling this page, 
                by clicking a link or button or by continuing 
                to browse otherwise.</p>

        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            show:false
        }
    },
    mounted(){
        this.show = true
        this.attachScroll() // check cookie
    },
    methods:{
        attachScroll(){
            document.querySelectorAll('.body').forEach(e => {
                e.addEventListener('scroll', this.isScroll)
            })
        },
        detachScroll(){
            document.querySelectorAll('.body').forEach(e => {
                e.removeEventListener('scroll', this.isScroll)
            })
        },
        isScroll(){
            this.show = false
            this.detachScroll()
        }
    },
    computed:{
        needToBeVisible(){
            return this.show
        }
    }
}
</script>


<style scoped>
.wrapper{
    position: absolute;
    width:100%;
    bottom:0;
    padding:10px;
    opacity:0;
    transform: translate(0, 100%);
    transition: opacity .5s ease-out, transform .5s cubic-bezier(1, 0, 0, 1);
    user-select: none;
}

.wrapper.visible{
    opacity:1;
    transform: translate(0, 0);
}


.inner{
    background-color: #fff;
    border:1px solid #000;
    box-shadow: 5px 5px 0 #000;
    margin:10px;
    font-size:.6rem;
    padding:10px;
}
.close{
    position: absolute;
}

a{
    color:#000;
}


@media screen and (min-width: 400px){
    .wrapper{
        width:40%;
    }
}
</style>