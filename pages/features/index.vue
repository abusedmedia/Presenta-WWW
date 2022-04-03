<template>
    <div class="list">

        <div class="hero">
            <h1>API Features</h1>
            <h2>Discover the PRESENTA Generation API</h2>
        </div>
        
        <ul class="grid">
            <li v-for="post in posts" :key="post.url">
                <nuxt-link :to="post.url">
                    <div class="img">
                        <img src="/500x500.png" />
                    </div>
                    <p>{{post.title}}</p>                
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>



<script>

export default {
  layout: 'commonPage',
  head () {
        return {
            title: 'All Features of PRESENTA Generation API'
        }
  },
  async asyncData(){
    return {
        posts: [
            {title:'Document Generation API', url:'/features/document-generation-api'},
            {title:'Image Generation API', url:'/features/image-generation-api'},
            {title:'Open-Graph Generation API', url:'/features/open-graph-generation-api'},
            {title:'Certificate Generation API', url:'/features/certificate-generation-api'},
            {title:'PDF Generation API', url:'/features/pdf-generation-api'},
            {title:'QR-Codes Generation API', url:'/features/qr-codes-generation-api'},
            {title:'Social Preview Generation API', url:'/features/social-preview-generation-api'},
            {title:'Robotic Process Automation and Document Generation API', url:'/features/robotic-process-automation-document-generation-api'},
            {title:'Robotic Process Automation and PDF Report Generation API', url:'/features/robotic-process-automation-pdf-report-generation-api'}
        ]
    }
  }
}
</script>





<style scoped>

.list{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center
}
</style>