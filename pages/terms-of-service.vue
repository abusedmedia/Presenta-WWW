<template>
    <div v-html="md"></div>
</template>

<script>
import MD from './terms-of-service.md'

export default {
  layout: 'legal',
  computed:{
      md(){
        return MD
      }
  }
}
</script>