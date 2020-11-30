<template>
    <div id="app">
        <app-header v-if="!isViewMode" />
        <router-view />
    </div>
</template>

<script>
import appHeader from '@/cmps/app-header.cmp.vue';

export default {
    components: {
        appHeader,
    },
    computed: {
        isViewMode() {
            return this.$store.getters.isViewMode;
        }
    }
};
</script>
