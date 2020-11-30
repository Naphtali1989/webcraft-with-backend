<template>
    <div class="wap-container place-center grid">
        <wap-preview v-for="wap in waps" :key="wap._id" :wap="wap">
        </wap-preview>
    </div>
</template>

<script>
import wapPreview from '@/cmps/wap/wap-preview.cmp.vue'
export default {
    name: 'wap-list',
    props: {
        waps: Array
    },
    components: {
        wapPreview
    }
}
</script>

<style>
</style>