<template>
    <div>
        <select v-model="color" @change="$emit('changed', color)">
            <option :key="col" v-for="col in colors">{{col}}</option>
        </select>
    </div>
</template>


<script>
export default {
    data(){
        return{
        color: 'original',
        colors:['', 'original', 'vibrant', 'polite', 'breeze', 'sunny']
        }
    }
}
</script>