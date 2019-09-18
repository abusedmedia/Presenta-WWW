<template>
    <sidebar>
        <ul>
            <li v-for="item in menu" :key="item.id">{{item.label}}</li>
        </ul>
    </sidebar>
</template>


<script>
export default {
    props:{
        menu:Array
    }
}
</script>


<style scoped>
ul{
    position: sticky;
    top:20px;
}
</style>