<template>
    <div id="app">
        <app-header v-if="!isViewMode" @openSignupModal="showModal = true" />
        <router-view />
        <sign-up v-if="showModal" @closeSignupModal="showModal = false" />
    </div>
</template>

<script>
import appHeader from '@/cmps/app-header.cmp.vue';
import signUp from '@/cmps/sign-up.cmp.vue';

export default {
    data() {
        return {
            showModal: false
        }
    },
    components: {
        appHeader,
        signUp
    },
    computed: {
        isViewMode() {
            return this.$store.getters.isViewMode;
        },
        toggleSignupModal() {
            this.showModal=!this.showModal;
        }
    }
};
</script>
