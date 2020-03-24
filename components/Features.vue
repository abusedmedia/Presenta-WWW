<template>
    <div class="wrapper">
       
        <!-- <QuoteStrip :message="'So, what\'s the catch?'" /> -->


        <div class="feat first">
            <div>
                <div class="txt">
                        <h2><mark>Content first!</mark></h2>
                        <h3>What do you mean? Structure your speech before you start playing with colors.</h3>
                        <p>Starting from the look of a template you like makes no communication sense. No wonder you end up frustrated!</p>
                        <p><b>PRESENTA</b> shifts the process because it makes creating, defining and adding content the first step in the process.</p>
                        
                        <!-- <p><nuxt-link to="/learn/content-first">Learn more</nuxt-link></p> -->
                </div>
            </div>
            <div class="preimg tl">
                <div class="img">
                    <img alt="feature 1" src="@/assets/feature_1.gif" />
                </div>
            </div>
        </div>


        <div class="feat inv">
            <div>
                <div class="txt">
                    <h2><mark>Constraints help</mark></h2>
                    <h3>With best practices embedded in PRESENTA's structure, you can't go wrong.</h3>
                    <p>Visually shaping information so it is clear and effective is hard! Designers and public speaking gurus make it look easy because they know the rules of the game.</p>
                    <p><b>PRESENTA</b> takes those rules and makes following them your only option, sparing you the guesswork and automatically steering you in the right direction.</p>
                    
                </div>
                
            </div>
            <div class="preimg tr">
                <div class="img">
                    <img alt="feature 3" src="@/assets/feature_3.gif" />
                </div>
            </div>
        </div>



        <div class="feat">
            <div>
                <div class="txt">
                    <h2><mark>Sensible defaults</mark></h2>
                    <h3>This is the most excited you'll ever be about formatting.</h3>
                    <p>We've all been there: too many choices – fonts, colors, size, and more! – can be daunting. </p>
                    <p><b>PRESENTA</b> comes with a set of defaults and options to refine the look and feel of your presentations in seconds. It's efficient, fun, done.</p>
                    
                </div>
                
            </div>
            <div class="preimg tr">
                <div class="img">
                    <img alt="feature 2" src="@/assets/feature_2.gif" />
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
.wrapper{
    padding-top:1rem;
}

.feat mark{
    background-color: var(--accentcolor);
    padding:.2rem .6rem;
    box-shadow: 5px 5px 0 #000;
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
    font-size: 2.8rem;
    padding-top:0;
}


.feat .img{
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: hidden;
  width: 100%;
    box-shadow: 10px 10px 0 #000;
    border:1px solid #000;
}

.feat img{
    object-fit: contain;
    object-position: top left;
    width: 100%;
}

.feat .preimg{
    
    padding:1rem;
    padding-right: 1.5rem;
    padding-top:0;
}


@media screen and (min-width:550px) {
    .feat .txt{
        font-size: 1.85rem;
    }
}


@media screen and (min-width:970px) {
    .feat h2{
        margin-top:0;
    }
    .feat{
        flex-direction: row;
    }
    .inv{
        flex-direction: row-reverse;
    }
    .feat .txt{
        font-size: 1.5rem;
    }

    
    .feat .tr img{
        object-position: top right;
    }
}


</style>