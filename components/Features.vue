<template>
    <div class="wrapper">

        <div class="feat varb">
            <div>
                <Decorator :tb="'top'" :lr="'right'" :col="'--forecolor'" />
                <Decorator :tb="'bottom'" :lr="'left'" :col="'--accentcolor'" />
                <div class="txt">
                    <h3><mark>Content First!</mark></h3>
                        <p>PRESENTA foster the content-first principles. </p>
                        <p>Instead of starting positioning elements on canvas, you should start writing great content.</p>
                        <p>This seams obvious but the current status-quo of the presentation tools forces you the other way around.</p> 
                        <p>This is why PRESENTA </p>
                    </p>
                </div>
            </div>
            <div>
                <div class="img">
                    <img src="@/assets/editor.gif" />
                </div>
            </div>
        </div>

        <div class="feat inv vara">
            <div>
                <Decorator :tb="'top'" :lr="'right'" :col="'--forecolor'" />
                <Decorator :tb="'bottom'" :lr="'left'" :col="'--accentcolor'" />
                <div class="txt">
                    <h3><mark>Look&Feel in seconds</mark></h3>
                    <p>Styling document can be more efficient. Moving pixels is boring and time consuming. </p>
                    <p>Use your time to write and structure valuable contents instead moving elements on screen.</p>
                    <p></p>PRESENTA comes with a set of defaults with options...</p>
                </div>
                
            </div>
            <div>
                <div class="img">
                    <img src="@/assets/styler.gif" />
                </div>
            </div>
        </div>

        <div class="feat varc">
            <div>
                <Decorator :tb="'top'" :lr="'right'" :col="'--forecolor'" />
                <Decorator :tb="'bottom'" :lr="'left'" :col="'--accentcolor'" />
                <div class="txt">
                    <h3><mark>Enforce best practices</mark></h3>
                    <p>Include online resources with one click.</p>
                    <p>The web if full of live and interactive contents and tools.</p>
                    <p>Why don't use them?</p>
                    </p>
                </div>
                
            </div>
            <div>
                <div class="img">
                    <img src="@/assets/chart.gif" />
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
                    <p>The web if full of live and interactive contents and tools.</p>
                    <p>Why don't use them?</p>
                    </p>
                </div>
                
            </div>
            <div>
                <div class="img">
                    <img src="@/assets/chart.gif" />
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import Decorator from '@/components/Decorator'

export default {
    components:{
        Decorator
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
    font-size: 2rem;
    
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