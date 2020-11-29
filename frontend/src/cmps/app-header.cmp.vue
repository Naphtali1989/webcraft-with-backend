<template>
    <section class="app-header">
        <div class="logo" @click="home">
            <i class="fas fa-hammer fa-2x"></i><span> Webcraft</span>
        </div>
        <div class="nav-links flex align-center">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/wap" exact>Templates</router-link>
            <router-link to="/editor" exact>Editor</router-link>
            <!-- <router-link to="/playground">Playground</router-link> -->
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
        },
        home() {
            this.$router.push('/')
        }

    },
    components: {
        avatar,
        avatarModal
    },
};
</script>
