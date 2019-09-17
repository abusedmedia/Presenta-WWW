<template>
    <div class="blog">
        <div class="wrapper">
            <div class="posthead">
                <h1>{{meta.title}}</h1>
                <small>{{date}}</small>
            </div>
            
            <div class="body" v-html="html"></div>
        </div>
    </div>
</template>


<script>
export default {
    layout: 'blog',
    async asyncData({ params }) {
        return await import(`~/content/blog/${params.id}.md`)
    },
    computed:{
        meta(){
            return this.attributes
        },
        date(){
            return new Date(this.meta.date).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
        }
    }
}
</script>



<style scoped>
.blog{
    display: flex;
    flex-direction: column;
    align-items: center;
}


@media screen and (min-width: 400px){
    .wrapper{
        width: 70%;
    }
}
.posthead{
    text-align: center;
}
.posthead h1{
    border-bottom:1px solid #eee;
    margin-bottom:0;
}

.body{
    text-align: justify;
}


</style>


<style>
blockquote{
    border-left:6px solid #ccc;
    padding-left:2rem;
    padding-top:1rem;
    padding-bottom:1rem;
    margin:0;
    font-size: 1.6rem;
}
blockquote p{
    margin: 0;
}
</style>