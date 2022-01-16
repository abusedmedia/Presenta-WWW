<template>

    <div class="feature">

        <div class="columns">
            
            <div class="left">
                <div class="incipit">
                    
                    <h4>QRCode Generation</h4>

                    <h2>Add QRCodes in any Custom Templates</h2>

                    <p>...</p>

                </div>             
            </div>
                
            <div class="right">
               <client-only>
                    <SlideShow :images="images" />
                </client-only>
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
                    a:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:z2O9wALBl?&code=aaw&bg=rect:fill:AliceBlue&subtitle=1st Novembre 2021&img=https://source.unsplash.com/random/700x350',
                    b:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:z2O9wALBl?&code=eqwj2egqwyegqw&bg=rect:fill:Beige&subtitle=2nd Novembre 2021&img=https://source.unsplash.com/random/701x350',
                    c:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:z2O9wALBl?&code=28837741&bg=rect:fill:Cornsilk&subtitle=3rd Novembre 2021&img=https://source.unsplash.com/random/702x350'
                }
            ]
        }
    }
}
</script>

https://cloud.presenta.cc/v1/url/zGywhb2oJn:z2O9wALBl?