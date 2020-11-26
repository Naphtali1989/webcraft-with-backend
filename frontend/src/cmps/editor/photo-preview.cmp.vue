<template>
    <img class="unsplash-photo" :src="src" @click="photoSelect(this)" />
</template>

<script>
export default {
    name: 'photo-preview',
    props: {
        src: String
    },
    methods: {
        photoSelect(this) {
            console.log(this)
        }
    }
}
</script>

<style>
</style>