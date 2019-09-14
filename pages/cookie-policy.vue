<template>
    <div v-html="md"></div>
</template>

<script>
import MD from './cookie-policy.md'

export default {
  layout: 'legal',
  computed:{
      md(){
        return MD
      }
  }
}
</script>