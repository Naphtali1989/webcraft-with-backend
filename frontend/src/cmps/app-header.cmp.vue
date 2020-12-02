<template>
    <section class="app-header flex space-between">
        <div class="logo place-center flex" @click="pushHome">
            <i class="fas fa-hammer fa-2x"></i>Web<span class="logo-span">craft</span>
        </div>
        <div class="nav-links flex align-center">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/wap" exact>Templates</router-link>
            <router-link to="/editor" exact>Editor</router-link>
            <!-- <router-link to="/playground">Playground</router-link> -->
            <a @click="showSignup" class="cursor" v-if="!loggedInUser">Login</a>
            <avatar :username="loggedInUser.username" :imgUrl="loggedInUser.imgUrl" :size="45" :color="'#124a76'" @click.native="toggleModal" v-if="loggedInUser" />

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
        },

    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser;
        },
        // avatar() {
        //     if(this.loggedInUser&&this.loggedInUser.imgUrl) return this.loggedInUser.imgUrl
        //     return this.loggedInUser.username
        // }
    },
    components: {
        avatar,
        avatarModal
    },
};
</script>
