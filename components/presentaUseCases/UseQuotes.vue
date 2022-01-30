<template>

    <div class="feature">

        <div class="columns">
            
            <div class="left">
                <div class="incipit">
                    
                    <h4>Quote Cards</h4>

                    <h2>Generate Beautiful Quotes for scheduled Media campaigns.</h2>

                    <p>Beautiful and Graphical Quote Images for your Media campaigns. Generate them from a list of sentences in a CSV file or using our API endpoint for automatic integration.</p>

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
                    a:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:TEwf6udrw?&text=Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur&subtitle=1st November, 2021&img=https://source.unsplash.com/random/709x351',
                    b:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:TEwf6udrw?&text=Neque porro quisquam est qui dolore&subtitle=2nd November, 2021&img=https://source.unsplash.com/random/710x351',
                    c:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:TEwf6udrw?&text=Quia dolor sit amet, consectetur&subtitle=3rd November, 2021&img=https://source.unsplash.com/random/706x351'
                }
            ]
        }
    }
}
</script>

