<template>
    <div class="wrapper">

        <div class="feat varb">
            <div>
                <Decorator :tb="'top'" :lr="'right'" :col="'--forecolor'" />
                <Decorator :tb="'bottom'" :lr="'left'" :col="'--accentcolor'" />
                <div class="txt">
                    <h3><mark>Content First!</mark></h3>
                        <p>PRESENTA fosters the content-first principle. </p>
                        <p>Instead of starting positioning elements on canvas, it's better start writing great contents.</p>
                        <p>This seams obvious but the current status-quo of the presentation tools forces you the other way around.</p> 
                        <p>The best way to exploit PRESENTA is by starting with a solid message.</p>
                    </p>
                </div>
            </div>
            <div>
                <div class="img">
                    <img src="@/assets/500x500.png" />
                </div>
            </div>
        </div>

        <div class="feat inv vara">
            <div>
                <Decorator :tb="'top'" :lr="'right'" :col="'--forecolor'" />
                <Decorator :tb="'bottom'" :lr="'left'" :col="'--accentcolor'" />
                <div class="txt">
                    <h3><mark>Set the Look&Feel in seconds</mark></h3>
                    <p>Pushing pixels is boring and time consuming.</p>
                    <p>Use your time to write and structure valuable contents instead moving elements on screen.</p>
                    <p>PRESENTA comes with a set of sensible defaults with quick options to meet your style.</p>
                    <p>Something like, change the color scheme:</p>
                    <ColorSelector />
                </div>
                
            </div>
            <div>
                <div class="img">
                    <img src="@/assets/500x500.png" />
                </div>
            </div>
        </div>

        <div class="feat varc">
            <div>
                <Decorator :tb="'top'" :lr="'right'" :col="'--forecolor'" />
                <Decorator :tb="'bottom'" :lr="'left'" :col="'--accentcolor'" />
                <div class="txt">
                    <h3><mark>Enforce best practices</mark></h3>
                    <p>PRESENTA limits purposely what you can put on a slide. 
It forces you to put only the relevant that is able to boost your speech.</p>
                    <p>Embracing its constraints is the best way to enhancing presentation contents.</p>
                    </p>
                </div>
                
            </div>
            <div>
                <div class="img">
                    <img src="@/assets/500x500.png" />
                </div>
            </div>
        </div>

        <div class="feat varb">
            <div>
                <Decorator :tb="'top'" :lr="'right'" :col="'--forecolor'" />
                <Decorator :tb="'bottom'" :lr="'left'" :col="'--accentcolor'" />
                <div class="txt">
                    <h3><mark>Harness the web!</mark></h3>
                    <p>Include online resources with one click.</p>
                    <p>The web is full of fresh, live and interactive contents.</p>
                    <p>Why don't use them? Go to include them straight away.</p>
                    </p>
                </div>
                
            </div>
            <div>
                <div class="img">
                    <img src="@/assets/500x500.png" />
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import Decorator from '@/components/Decorator'
import ColorSelector from '~/components/ColorSelector.vue'

export default {
    components:{
        Decorator, ColorSelector
    }
}
</script>


<style scoped>
.wrapper, h3{
  font-family: Lato, sans-serif;
}

mark{
    background-color: var(--forecolor);
    color: var(--backcolor);
    padding:.2rem .6rem;
}

.feat{
    display: flex;
    flex-direction: column;
    background-color: var(--backcolor);
    color: var(--forecolor);
    margin-top: 3rem;
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
  height: 100%;
}

.feat img{
    object-fit: cover;
    object-position: top left;
    width: 100%;
    height: 100%;
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
}
</style>