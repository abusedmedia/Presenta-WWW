<template>
    <div class="body">

        <div class="hero">
            <h1><b>API</b> Quick&nbsp;Start</h1>

            <h2>An Overview of the API Endpoints.</h2>
        </div>


        
        <div class="feature">
            <div class="incipit">
                <h4>Sync, Image only</h4>

                <h2>It's just an URL.</h2>

                <div class="endpoint">[GET] /v1/url/:templateID?:params</div>

                <p>The quickest way to integrate our Cloud API infrastructure!</p>
            </div>
            <div class="columns">
                <div class="left">
                    <highlight-code class="code" lang="js">
                        https://cloud.presenta.cc/v1/url/templateID/?main=Hello
                    </highlight-code>
                </div>
            </div>
        </div>


        <div class="feature">
            <div class="incipit">
                <h4>Sync, Image only</h4>

                <h2>Get the image with full control!</h2>

                <div class="endpoint">[POST] /v1/render/:templateID</div>

                <p>To get images with more control, use the <b>POST</b> end-point.</p>

            </div>
            <div class="columns">
                <div class="left">
                    <highlight-code class="code" lang="js">
                        fetch('https://cloud.presenta.cc/v1/render/templateID', {
                            method: 'POST',
                            body: JSON.stringify({title: 'Hello'})
                        })
                    </highlight-code>
                </div>
            </div>
        </div>




        <div class="feature">
            <div class="incipit">
                <h4>Async, All formats</h4>

                <h2>Merge your data, Choose the format.</h2>

                <div class="endpoint">[POST] /v1/export/:projectID</div>

                <p>The <b>/export</b> end-point allows to merge multi-frames documents and get it as <b>PDF</b>, <b>GIF</b> and <b>PNG</b> as well.</p>
            </div>
            <div class="columns">
                <div class="left">
                    <highlight-code class="code" lang="js">
                        fetch('https://cloud.presenta.cc/v1/export/projectID', {
                            method: 'POST',
                            body: JSON.stringify({
                                title: 'Hello',
                                footer: 'Common String present in all frames',
                                exportFileFormat: 'pdf' // default pdf, can be gif or png
                            })
                        })
                    </highlight-code>
                </div>
            </div>
        </div>



        <div class="feature">
            <div class="incipit">
                <h4>Async, All formats</h4>

                <h2>Structure Complex Documents</h2>

                <div class="endpoint">[POST] /v1/export/:projectID</div>

                <p>By using the <b>frames</b> key, generate custom document structures and get it as <b>PDF</b>, <b>GIF</b> and <b>PNG</b> as well.</p>
            </div>
            <div class="columns">
                <div class="left">
                    <highlight-code class="code" lang="js">
                        fetch('https://cloud.presenta.cc/v1/export/projectID', {
                            method: 'POST',
                            body: JSON.stringify({
                                footer: 'Common String present in all frames',
                                title: 'This is default title',
                                frames:[
                                    {frameID: 'Aj4', title: 'Hello, new title'},
                                    {frameID: 'Aj4', title: 'Other, new title'},
                                    {frameID: 'Aj4'}, // default title
                                    {frameID: 'g5F', text: 'Other Text'},
                                ]
                            })
                        })
                    </highlight-code>
                </div>
            </div>
        </div>
        

        <div class="cta">
            <nuxt-link class="btn" to="/docs">
                <span>Learn more on Cloud API</span>
            </nuxt-link>
        </div>

        <FooterComp />
    </div>
</template>


<script>
import HeroHeader from '~/components/HeroHeader.vue'
import FooterComp from '~/components/FooterComp.vue'
import LibExamples from '~/components/LibExamples.vue'

export default {
  components:{
      HeroHeader,FooterComp,LibExamples
  },
  head () {
        return {
            title: 'Cloud API Quick Start'
        }
  },
}

</script>


<style scoped>
.code{
    border: 1px solid #ccc;
}

.cta{
    text-align: center;
}

.endpoint{
    font-size: 1rem;
    padding: .5rem;
    margin-top: 1rem;
    background: #eee;
}
</style>