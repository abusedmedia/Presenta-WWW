<template>
    <div class="feature">
        
        <div class="incipit">
            <h4>Markdown 👉 Slides</h4>

            <h2>Turn Markdown into a Pitch.</h2>

            <p>Convert Markdown, or any other structured markup, into an interactive Presentation.<br />
            <span class="tiny">(You can edit live the following Markdown)</span></p>
        </div>

        <div class="columns">
            <div class="left">
                
                    
                <textarea rows="13" v-model="source"></textarea>
            </div>

            <div class="right">
                <client-only>
                    <Markdown :source="source" />
                </client-only>
            </div>
        </div>
    </div>
</template>


<script>
import Markdown from './Markdown.vue'

export default {
    components:{
        Markdown
    },
    data(){
        return{
            source:`---
theme: one
---

# Edit this text
Change also the theme with:
- one
- two
- three

---

## Subtitle
3 dashes creates a new slide

`
        }
    }
}
</script>



<style scoped>
textarea{
    width: 100%;
    border:none;
    padding: 1rem;
    font-size: 1rem;
    resize: none;
    box-shadow: 0 0 10px #ccc;
    color: blue;
    font-family: monospace;
}

@media screen and (min-width:550px) {
  textarea{
      font-size: 1.5rem;
  }
}
</style>