<template>
    <div></div>
</template>



<script>
import { interpolate } from '@presenta/config-interpolator'
import marked from 'marked'
import frontmatter from '@github-docs/frontmatter'

export default {
    props:{
        source:String
    },
    data(){
        return {
            preso:null
        }
    },
    watch:{
        source(){
            this.build()
        }
    },
    async mounted(){
        this.build()
    },
    methods:{
        async build(){
            if(this.preso) this.preso.destroy()
            this.$el.innerHTML = ''

            const doc = frontmatter(this.source)

            const themes = {
                two: {
                    fore: '#D0CAA9',
                    back: '#30302F',
                    accent: '#EC4A25',
                    alt: '#555'
                },
                one: {
                    fore: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
                    back: '#fff',
                    accent: '#8914F8',
                    alt: '#eee'
                },
                three:{
                    fore: '#fff',
                    back: '#0B24FB',
                    accent: '#eee',
                    alt: '#b5bcff'
                }
            }

            const slides = doc.content.split('---')
            
            const frames = slides.map((d,i) => {
                return {
                    text: marked(d),
                    footer: `A Presentation from Markdown - slide ${i+1} of ${slides.length}`
                }
            })
            
            const config = await interpolate({frames}, '92716be452cf87ff39726fdc54bb102f')

            config.controllers.focus = false

            const theme = doc.data.theme
            config.modules.colors = themes[theme] || null
            console.log(themes[theme])
            
            this.preso = await new Presenta(this.$el, config)
        }
    }
}
</script>



