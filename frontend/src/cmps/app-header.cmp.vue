<template>
    <section class="app-header">
        <div class="logo">
            <!-- <img src="@/assets/img/logo1.png" alt="" class="app-logo"> -->
            Logo
        </div>
        <div class="nav-links flex align-center">
            <router-link to="/">Home</router-link>
            <router-link to="/wap">templates</router-link>
            <router-link to="/editor">Editor</router-link>
            <router-link to="/playground">Playground</router-link>
            <avatar :username="'matan cohen'" :size="45" :color="'#03A9F4'" @click.native="toggle" />
        </div>
        <avatar-modal v-if="showModal" />
    </section>
</template>

<script>
import avatar from '@/cmps/avatar.cmp.vue';
import avatarModal from '@/cmps/avatar-modal.cmp.vue';
export default {
    name: "app-header",
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        toggle() {
            this.showModal=!this.showModal;
        }
    },
    components: {
        avatar,
        avatarModal
    },
};
</script>
