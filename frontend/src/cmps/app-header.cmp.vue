<template>
    <section class="app-header flex wrap space-between">
        <div class="logo align-center" @click="pushHome">
            <i class="fas fa-hammer fa-2x"></i>Web<span class="logo-span">craft</span>
        </div>
        <div class="nav-links flex align-center">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/wap" exact>Templates</router-link>
            <router-link to="/editor" exact>Editor</router-link>
            <router-link to="/playground">Playground</router-link>
            <span @click="showSignup">Login</span>
            <div v-if="loggedInUser">
                <router-link to="/playground">Profile</router-link>
            </div>
            <avatar :username="loggedInUser.username" :size="45" :color="'#03A9F4'" @click.native="toggleModal" v-if="loggedInUser" />

        </div>
        <avatar-modal v-if="showModal" :loggedInUser="loggedInUser" @closeModal="showModal = false" />
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
        toggleModal() {
            this.showModal=!this.showModal;
        },
        pushHome() {
            this.$router.push('/')
        },
        showSignup() {
            this.$emit('openSignupModal')
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        }
    },
    components: {
        avatar,
        avatarModal
    },
};
</script>
