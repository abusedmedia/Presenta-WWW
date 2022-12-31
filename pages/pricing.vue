<template>
    <div class="body">

        <div class="hero">
            <h2>Pay As You Go!</h2>
            <h1><b>0.01€</b> &#215; <b>Credit</b></h1>

            <h3>No monthly or fixed fee.</h3>
            <p>VAT added if applicable.</p>

        </div>

        <div class="faq">
            <h4>Frequently Asked Questions:</h4>

            <details>
                <summary>
                    <span class="plus">&#43;</span> 
                    <span class="minus">&#8722;</span> 
                    What can I do with <b>1 Credit</b>?</summary>
                <div class="content">
                    
                    <ul>
                        <li>You need <b>1 Credit</b> to generate <b>1 Image</b> with the <b>No-Cache</b> end-point.</li>
                        <li>You need <b>5 Credits</b> to generate and publish <b>1 Image</b> to a Social Network automatically.</li>
                        <li>You need <b>5 Credits</b> to generate <b>1 Image</b> with the <b>Daily-Cache</b> end-point.</li>
                        <li>You need <b>50 Credits</b> to generate <b>1 Image</b> with the <b>Monthly-Cache</b> end-point.</li>
                    </ul>

                    <p>Some real-world examples:</p>
                    <ul>
                        <li><b>Newsletter: </b>Send a newsletter to 1000 recipients with a personalized banner and 400 of them open the email, it costs <b>4€</b>.</li>
                        <li><b>Social Media: </b>Publishing a social-media post twice per day with a generated media-image costs <b>3€</b>.</li>
                        <li><b>Open-Graph: </b>A website with 200 articles and 100 are shared within the current month with a generated social preview (open-graph) costs <b>1€</b> a month.</li>
                        <li><b>Landing Page 1: </b>Using a dynamic banner (that update itself every day) on a landing page (using the Daily-Cache) costs <b> 1.5€</b>.</li>
                        <li><b>Landing Page 2: </b>Using 2 dynamic banners (that update themself every month) on a landing page (using the Monthly-Cache) costs <b>1€</b>.</li>
                        <!-- <li>A PDF with <b>20 pages</b>, once generated, will count <b>20 Credits</b>, therefore,  will cost <b>0.2€</b>. (soon)</li> -->
                        <!-- <li>An animated GIF composed by <b>8 frames</b> will count <b>8 Credits</b>, therefore,  will cost <b>0.08€</b>. (soon)</li> -->
                    </ul>
                </div>
            </details>

            <details>
                <summary>
                    <span class="plus">&#43;</span> 
                    <span class="minus">&#8722;</span>
                    How can I monitor my <b>costs</b>?</summary>
                <div class="content">
                    <p>In the Profile section you can see the <b>usage' dashboard</b> to monitor in real-time the generation amount as well as its current cost.</p>
                    <p>In any case, before any charge, <b>we'll inform you few days before</b> of the upcoming operation. <br />We call it <b>No-Surprise policy</b>.</p>
                </div>
            </details>



            <details>
                <summary>
                    <span class="plus">&#43;</span> 
                    <span class="minus">&#8722;</span>
                    Tell me about <b>FREE</b> and <b>PRO</b> plans.</summary>
                <div class="content">
                    <p>By creating an account you'll be set as <b>FREE</b> plan by default that allows you to:</p>
                    <ul>
                        <li>Import <b>Figma design</b>, manage and publish <b>Templates</b>.</li>
                        <li>Use the <b>Monthly Cache</b> end-point with your Templates.</li>
                        <li>Every generated image will have a <b>watermark</b> applied and a <b>resolution limit</b>.</li>
                    </ul>

                    <p>By adding a <b>Credit-Card</b> to your account you'll be set as <b>PRO</b> that allows to:</p>
                    <ul>
                        <li>Use the <b>Monthly Cache</b>, <b>Daily Cache</b> and <b>No Cache</b> end-points with your Templates <b>without the Free limitations</b>.</li>
                        <li>Unlock additional features such as <b>Real-time Scripting</b>, <b>Location & TimeZone props</b>.</li>
                    </ul>

                </div>
            </details>


            <details>
                <summary>
                    <span class="plus">&#43;</span> 
                    <span class="minus">&#8722;</span>
                    What about <b>Privacy</b> and <b>GDPR</b> ?</summary>
                <div class="content">
                    <p>We strongly adhere to the main GDPR principle: <b>Privacy By Design</b></p>
                    <ul>
                        <li>We collect information <b>as little as possible</b> to run our service.</li>
                        <li>Did you notice? You didn't accept any coockie banner in this marketing site because there's no need to.</li>
                        <li>The <b>No-Cache</b> end-point is 1000% GDPR, the image is sent to the user directly. We cannot even see it.</li>
                    </ul>


                </div>
            </details>

        </div>

        <CTA />

        <FooterComp />
    </div>
</template>


<script>
import HeroHeader from '~/components/HeroHeader.vue'
import CTA from '~/components/CTA.vue'
import FooterComp from '~/components/FooterComp.vue'
import ToolsExamples from '~/components/ToolsExamples.vue'

export default {
  components:{
      HeroHeader,CTA,FooterComp,ToolsExamples
  },
  head () {
        return {
            title: 'Pricing Pay as You Go!'
        }
  },
}

</script>



<style scoped>

.faq{
    text-align: center;
    font-size: 1.4rem;
    width: 95%;
    margin: auto;
}

details{
    margin-bottom: .2rem;
    text-align: left;
}
details[open]{
    margin-bottom: 1rem;
}
details[open] summary{
    background: #eee;
}
details summary .minus{
    display: none;
}
details[open] .content{
    background: linear-gradient(#fff, #f8f8f8);
}

details[open] summary .minus{
    display: inline;
}
details[open] summary .plus{
    display: none;
}

details .content{
    padding: .5rem;
    margin: 0;
    font-size: 1.2rem;
}
.content p, .content ul{
    margin: .5rem 0;
}
summary{
    background: #f8f8f8;
    cursor: pointer;
    text-align: left;
    padding: .5rem;
}
summary:hover{
    background: #eee;
}

details > summary {
  list-style: none;
}

details summary::-webkit-details-marker {
  display:none;
}

@media(min-width: 600px){
    .faq{
        width: 70%;
        font-size: 2rem;
    }
    details .content{
        padding: 1.5rem;
        font-size: 1.2rem;
        line-height: 2rem;
        color: #555;
    }
}
</style>