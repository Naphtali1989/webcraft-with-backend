<template>
    <div id="app">
        <app-header v-if="webcraft" />
        <router-view />
    </div>
</template>

<script>
import appHeader from "@/cmps/app-header.cmp.vue";

export default {
    components: {
        appHeader,
    },
    computed: {
        webcraft() {
            return this.$store.getters.webcraft
        }
    }
};
</script>
