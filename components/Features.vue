<template>
    <div class="wrapper">
       
        <QuoteStrip :message="'So, what\'s the catch?'" />


        <div class="feat first">
            <div>
                <div class="txt">
                    <h3><mark>Content First!</mark></h3>
                        <p><b>PRESENTA</b> enables the content-first principle. </p>
                        <p>Instead of starting positioning elements on the canvas, it's better <b>writing great contents</b> first.</p>
                        <p>This seems obvious but the current status-quo of the presentation tools forces people the other way around.</p> 
                        <p>The best way to exploit <b>PRESENTA</b> is by starting with a solid message.</p>
                        <!--<p><nuxt-link class="btn mini" to="/learn/content-first">Learn more</nuxt-link></p>-->
                    </p>
                </div>
            </div>
            <div class="preimg tl">
                <div class="img">
                    <img loading="lazy" alt="feature 1" src="@/assets/feature_1.gif" />
                </div>
            </div>
        </div>

        <div class="feat inv">
            <div>
                <div class="txt">
                    <h3><mark>Set the Look&Feel in seconds</mark></h3>
                    <p>Pushing pixels is boring and time-consuming.</p>
                    <p>Use your time to write and <b>structure valuable contents</b> instead of moving elements on the screen.</p>
                    <p><b>PRESENTA</b> comes with a set of sensible defaults with quick options to meet your style.</p>
                    
                </div>
                
            </div>
            <div class="preimg tr">
                <div class="img">
                    <img loading="lazy" alt="feature 2" src="@/assets/feature_2.gif" />
                </div>
            </div>
        </div>

        <div class="feat">
            <div>
                <div class="txt">
                    <h3><mark>Enforce best practices</mark></h3>
                    <p><b>PRESENTA</b> limits purposely what you can do and don't on a slide. 
                        It forces you to put only the relevant materials that can <b>boost your communication</b>.</p>
                    <p>Embracing its constraints is the best way to enhancing presentation contents.</p>
                    </p>
                </div>
                
            </div>
            <div class="preimg tr">
                <div class="img">
                    <img loading="lazy" alt="feature 3" src="@/assets/feature_3.gif" />
                </div>
            </div>
        </div>

        <div class="feat inv last">
            <div>
                <div class="txt">
                    <h3><mark>Harness the web!</mark></h3>
                    <p>Internet is full of fresh, live and interactive contents.</p>
                    <p><b>PRESENTA</b> doesn't want to reinvent wheels. It's better using other tools for specific tasks and outcomes.</p>
                    <p><b>Let's embed them!</b></p>
                </div>
                
            </div>
            <div class="preimg tl">
                <div class="img">
                    <img loading="lazy" alt="feature 4" src="@/assets/feature_4.gif" />
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import Decorator from '@/components/Decorator'
import ColorSelector from '~/components/ColorSelector.vue'
import QuoteStrip from '@/components/QuoteStrip'

export default {
    components:{
        Decorator, ColorSelector, QuoteStrip
    }
}
</script>


<style scoped>
h1{
    text-align: center;
}

.feat mark{
    background-color: var(--accentcolor);
    padding:.2rem .6rem;
}

.feat{
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    font-family: ivyjournal, sans-serif;
}
.feat.first{
    margin-top:2rem;
}
.feat.last{
    margin-bottom:2rem;
}



.feat > div{
    flex:1;
    position: relative;
}

.feat .txt{
    padding: 2rem;
    font-size: 2.4rem;
    
}


.feat .img{
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: hidden;
  width: 100%;
box-shadow: 0 0 20px #ccc;
}

.feat img{
    object-fit: contain;
    object-position: top left;
    width: 100%;
    height: 100%;
}

.feat .preimg{
    display: flex;
    align-items: center;
}


@media screen and (min-width:550px) {
    .feat .txt{
        font-size: 1.5rem;
    }
}


@media screen and (min-width:770px) {
    .feat{
        flex-direction: row;
    }
    .inv{
        flex-direction: row-reverse;
    }
    .feat .txt{
        font-size: 1.25rem;
    }

    
    .feat .tr img{
        object-position: top right;
    }
}
</style>