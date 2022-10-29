<template>
    <div class="body">

        <div class="hero">
            <h1><b>API</b> Quick&nbsp;Start</h1>

            <h2>An Overview of the API Endpoints.</h2>
        </div>


        
        <div class="feature">
            <div class="incipit">
                <h4><span class="badge free">FREE + PRO</span> Sync + Cache </h4>

                <h2>It's just an URL.</h2>

                <div class="endpoint">[GET] /v1/url/:templateID?:params</div>

                <p>The quickest way to integrate our Cloud API infrastructure! <br />
                <b>Common use-case:</b> open-graph image (or social preview image) generation, email marketing.</p>
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
                <h4><span class="badge">PRO Only</span> Sync + User params </h4>

                <h2>Get it as fast as possible, always fresh!</h2>

                <p>No cache or CDN, you get the file buffer. It's fast and always up-to-date.<br />
                <b>Common use-case:</b> images with real-time graphics, location, time or api based.</p>

            </div>
            <div class="columns">
                <div class="left">
                    <highlight-code class="code" lang="js">
                        coming soon...
                    </highlight-code>
                </div>
            </div>
        </div>




<!--
        <div class="feature coming">
            <div class="incipit">
                <h4><span class="badge free">FREE + PRO</span> Sync + CDN </h4>

                <h2>Integrate with your pipeline!</h2>

                <div class="endpoint">[POST] /v1/render/:templateID</div>

                <p>Get the URL of the generated file, do what you want with it.<br />
                <b>Common use-case:</b> document generation after a trigger (user interaction, bot, cron job, etc).</p>

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



        




        <div class="feature coming">
            <div class="incipit">
                <h4><span class="badge">PRO Only</span> Async + CDN (coming soon) </h4>

                <h2>Merge your data, Choose the format.</h2>

                <div class="endpoint">[POST] /v1/export/:projectID</div>

                <p>The <b>/export</b> end-point allows to merge multi-frames complex documents and get it as <b>PDF</b>, <b>GIF</b> and <b>PNG</b> as well.<br />
                <b>Common use-case:</b> reports, catalogs, multi-page documents</p>
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



        <div class="feature coming">
            <div class="incipit">
                <h4><span class="badge">PRO Only</span> Async + CDN (coming soon) </h4>

                <h2>Structure Complex Documents</h2>

                <div class="endpoint">[POST] /v1/export/:projectID</div>

                <p>By using the <b>frames</b> key, generate custom and complex document structures and get it as <b>PDF</b>, <b>GIF</b> and <b>PNG</b> as well.<br />
                <b>Common use-case:</b> reports, catalogs, multi-page documents</p>
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
-->

        <!-- <div class="cta">
            <nuxt-link class="btn" to="/docs">
                <span>Learn more on Cloud API</span>
            </nuxt-link>
        </div> -->
        <CTA />

        <FooterComp />
    </div>
</template>


<script>
import HeroHeader from '~/components/HeroHeader.vue'
import FooterComp from '~/components/FooterComp.vue'
import LibExamples from '~/components/LibExamples.vue'
import CTA from '~/components/CTA.vue'

export default {
  components:{
      HeroHeader,FooterComp,LibExamples,CTA
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
.coming{
    opacity: .35;
    pointer-events: none;
    filter: blur(3px);
}
</style>