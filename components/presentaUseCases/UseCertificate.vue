<template>

    <div class="feature">

        <div class="columns">
            
            <div class="left">
                <div class="incipit">
                    
                    <h4>Course Certificates</h4>

                    <h2>Generate Certificates for courses and other achievements.</h2>

                    <p>Personalize custom Certificate templates with your data. You can generate them also in bulk using a CSV file.</p>

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
                    a:'https://cloud.preso.cc/v1/url/zGywhb2oJn:wzODLn3PV?name=John Doe&course=Programming&time=1st November 2022',
                    b:'https://cloud.preso.cc/v1/url/zGywhb2oJn:wzODLn3PV?name=Mario Rossi&course=Social Media&time=2nd November 2022',
                    c:'https://cloud.preso.cc/v1/url/zGywhb2oJn:wzODLn3PV?&name=Jerry Lewis&course=UX Design&time=3rd November 2022'
                },
                {
                    a:'https://cloud.preso.cc/v1/url/zGywhb2oJn:GPVWRUfSB?name=John Doe&course=Programming&time=1st November 2022',
                    b:'https://cloud.preso.cc/v1/url/zGywhb2oJn:GPVWRUfSB?name=Mario Rossi&course=Social Media&time=2nd November 2022',
                    c:'https://cloud.preso.cc/v1/url/zGywhb2oJn:GPVWRUfSB?&name=Jerry Lewis&course=UX Design&time=3rd November 2022'
                }
            ]
        }
    }
}
</script>

