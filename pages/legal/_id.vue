<template>
    <div v-html="html"></div>
</template>


<script>
export default {
    layout: 'legal',
    async asyncData({ params }) {
        const cnt = await import(`~/content/legal/${params.id}.md`)
        return cnt
    }
}
</script>