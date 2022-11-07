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
                    a:'https://cache.presenta.workers.dev/zGywhb2oJn:HpjEHTWyL?&name=SomeUserName',
                    b:'https://cache.presenta.workers.dev/zGywhb2oJn:HpjEHTWyL?&name=OtherName',
                    c:'https://cache.presenta.workers.dev/zGywhb2oJn:HpjEHTWyL?&name=AlternativeName'
                },
                {
                    a:'https://cache.presenta.workers.dev/zGywhb2oJn:2CA8kzSuG?&text=Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur&subtitle=1st November, 2021',
                    b:'https://cache.presenta.workers.dev/zGywhb2oJn:2CA8kzSuG?&text=Neque porro quisquam est qui dolore&subtitle=2nd November, 2021',
                    c:'https://cache.presenta.workers.dev/zGywhb2oJn:2CA8kzSuG?&text=Quia dolor sit amet, consectetur&subtitle=3rd November, 2021'
                }
            ]
        }
    }
}
</script>

