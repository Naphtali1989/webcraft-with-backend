<template>
    <section class="avatar-modal flex column align-center">
        <div class="info flex column align-center">
            <avatar :username="loggedInUser.username" :size="80" :color="'#03A9F4'" />
            <h3>{{loggedInUser.username}}</h3>
            <span>{{loggedInUser.email}}</span>
        </div>
        <div class="seperator"></div>
        <section class="modal-links flex column">
            <span><i class="far fa-user"></i> Login</span>
            <span><i class="fas fa-sign-out-alt"></i> Sign up</span>
            <span @click="logout"><i class="fas fa-times-circle"></i> Logout</span>
        </section>
    </section>
</template>

<script>
import avatar from '@/cmps/avatar.cmp.vue';
export default {
    name: 'avatar-modal',
    props: {
        loggedInUser: Object
    },
    components: {
        avatar
    },
    methods: {
        logout() {
            this.$store.dispatch({ type: 'logout' })
            this.$emit('closeModal')

        }

    }
}
</script>
