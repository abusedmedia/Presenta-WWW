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
                        <li><b>1 Credit</b> can generate <b>1 PNG/JPG</b> file.</li>
                        <li><b>1 Credit</b> can generate <b>1 Page</b> of a multi-page PDF file. (soon)</li>
                        <li><b>1 Credit</b> can generate <b>1 Frame</b> of a multi-frame GIF file. (soon)</li>
                    </ul>

                    <p>For instance:</p>
                    <ul>
                        <li>A website with 100 articles with a generated social preview (open-graph) will cost <b>1€ top</b> per month (if all the article were shared, otherwise will cost less).</li>
                        <li>If you send 1000 newsletter with a personalized banner and 400 open the email, it will cost <b>4€</b>.</li>
                        <li>A PDF with <b>20 pages</b>, once generated, will count <b>20 Credits</b>, therefore,  will cost <b>0.2€</b>. (soon)</li>
                        <li>An animated GIF composed by <b>8 frames</b> will count <b>8 Credits</b>, therefore,  will cost <b>0.08€</b>. (soon)</li>
                    </ul>
                </div>
            </details>

            <!-- <details>
                <summary>
                    <span class="plus">&#43;</span> 
                    <span class="minus">&#8722;</span>
                    Why the <b>Stripe fee</b>?</summary>
                <div class="content">
                    <p><a href="https://stripe.com/" target="_blank">Stripe</a> handles the payment transaction and billing for us.</p>
                    <p>Since our true pay-per-use pricing model, the Stripe' fee needs to be added for small collected amounts.</p>
                    <p>For instance, for a <b>3.00€</b> amount, here what we're going to charge:</p>
                    <ul>
                        <li>As an <b>european</b>, we'll charge <b>3.29€</b></li>
                        <li>As <b>non-european</b>, we'll charge <b>3.34€</b></li>
                    </ul>
                    <p>For months that collect more than 10€ the Stripe' fee will be deducted.</p>
                    <p>You can review the current <a href="https://stripe.com/pricing" target="_blank">Stripe fee</a> on their website.</p>
                </div>
            </details> -->


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
                        <li>Use the <b>Cloud API</b> with your Templates with a <b>watermark</b> applied and a resolution limit.</li>
                    </ul>

                    <p>By adding a <b>Credit-Card</b> to your account you'll be set as <b>PRO</b> that allows to:</p>
                    <ul>
                        <li>Use the <b>Cloud API</b> with your Templates <b>without the limitations</b>.</li>
                        <li>Unlock <b>additional features</b> such as <b>Scripting</b> and <b>Geo/Time</b> injected props.</li>
                    </ul>

                </div>
            </details>


            <details>
                <summary>
                    <span class="plus">&#43;</span> 
                    <span class="minus">&#8722;</span>
                    How much cost the <b>CDN cache</b>?</summary>
                <div class="content">
                    <p>Each generated file will be available for download within the current month by our fast CDN for <b>FREE</b>!</p>
                </div>
            </details>


            <p>Need <b>high volume</b> pricing? <a href="mailto:support@presenta.cc">Contact us!</a></p>
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