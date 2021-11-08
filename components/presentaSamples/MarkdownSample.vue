<template>
    <div class="feature">
        <div class="left">
            <h2><mark>Markdown 👉 Slides</mark></h2>

            <p>Write <b>Markdown</b> and build a presentation:</p>
                
            <textarea rows="13" v-model="source"></textarea>
        </div>

        <div class="right">
            <client-only>
                <Markdown :source="source" />
            </client-only>
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