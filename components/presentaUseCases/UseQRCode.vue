<template>

    <div class="feature">

        <div class="columns">
            
            <div class="left">
                <div class="incipit">
                    
                    <h4>QRCode Generation</h4>

                    <h2>Add QRCodes to any Custom Templates</h2>

                    <p>Generate fully functional QR-Codes dynamically at scale for any occasions. Create <b>coupons</b>, <b>tickets</b> or <b>badges</b> with one click using the API endpoint of a CSV file as well.</p>

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
                    a:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:z2O9wALBl?&code=aaw&bg=rect:fill:AliceBlue&subtitle=1st November, 2021&img=https://source.unsplash.com/random/700x350',
                    b:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:z2O9wALBl?&code=eqwj2egqwyegqw&bg=rect:fill:Beige&subtitle=2nd November, 2021&img=https://source.unsplash.com/random/701x350',
                    c:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:z2O9wALBl?&code=28837741&bg=rect:fill:Cornsilk&subtitle=3rd November, 2021&img=https://source.unsplash.com/random/702x350'
                },
                {
                    a:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:eJ3yMSmxY?code=www.google.com&text=www.google.com',
                    b:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:eJ3yMSmxY?code=www.yahoo.com&text=www.yahoo.com',
                    c:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:eJ3yMSmxY?code=www.amazon.com&text=www.amazon.com'
                },
                {
                    a:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:52w3Irt2L?code=www.google.com&company=Google&name=John Ars&role=Account&img=https://cdn.presenta.cc/faces/s_6F9FA8C635E5B49A4AA9474CB76D1146BC1F6408CE5EEC320713FFF4758F98B5_1569007594109_010105.jpg',
                    b:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:52w3Irt2L?code=www.yahoo.com&company=Yahoo&name=Ben Jimdo&role=Developer&img=https://cdn.presenta.cc/faces/s_6F9FA8C635E5B49A4AA9474CB76D1146BC1F6408CE5EEC320713FFF4758F98B5_1569007593599_010085.jpg',
                    c:'https://cloud.presenta.cc/v1/url/zGywhb2oJn:52w3Irt2L?code=www.amazon.com&company=Amazon&name=Clara Benny&role=Advisor&img=https://cdn.presenta.cc/faces/s_6F9FA8C635E5B49A4AA9474CB76D1146BC1F6408CE5EEC320713FFF4758F98B5_1569007594237_003057.jpg'
                }
            ]
        }
    }
}
</script>

