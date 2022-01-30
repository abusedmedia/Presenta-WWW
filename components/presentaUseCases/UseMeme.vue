<template>

    <div class="feature">

        <div class="columns">
            
            <div class="left">
                <div class="incipit">
                    
                    <h4>Meme Generation</h4>

                    <h2>Generate Personalized Memes upon User interaction.</h2>

                    <p>Engage users with personalized meme generated on user 'Following', 'Reply' or 'Comment' interaction.</p>

                </div>             
            </div>
                
            <div class="right">
                <div class="img">
                    <SlideShow :images="images" />
                </div>
            </div>

        </div>
    </div>
</template>




<script>
import SlideShow from './SlideShow.vue'

export default {
    components:{
        SlideShow
    },
    data(){
        return {
            images:[
                {
                    a:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:9BAz5rb7T?&name=SomeUserName&namefront=SomeUserName',
                    b:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:9BAz5rb7T?&name=OtherName&namefront=OtherName',
                    c:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:9BAz5rb7T?&name=AlternativeName&namefront=AlternativeName'
                }
            ]
        }
    }
}
</script>

https://cloud.presenta.cc/v1/url/zGywhb2oJn:9BAz5rb7T?