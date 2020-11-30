<template>
    <div class="wap-container place-center grid">
        <div class="page-controls flex">
            <button @click="emitAddWap" class="addWap-btn"><i class="fas fa-plus"></i></button>
        </div>
        <wap-preview v-for="wap in waps" :key="wap._id" :wap="wap" />
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
    },
    methods: {
        emitAddWap(){
            this.$emit('addWap')
        }
        }
}
</script>

<style>
</style>