<template>
    <div class="wap-container grid">
        <button @click="emitAddWap" class="add-wap-btn btn">
            <i class="fas fa-plus"></i>
        </button>
        <wap-preview v-for="wap in waps" :key="wap._id" :wap="wap"  />
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
        emitAddWap() {
            this.$emit('addWap')
        }
    }
}
</script>

<style>
</style>