<template>
    <section class="avatar-modal flex column align-center">
        <div class="info flex column align-center" v-if="loggedInUser">
            <avatar :username="loggedInUser.username" :imgUrl="loggedInUser.imgUrl" :size="65" :color="'#124a76'" />
            <h3>{{loggedInUser.username}}</h3>
            <span>{{loggedInUser.email}}</span>
        </div>
        <div class="seperator"></div>
        <section class="modal-links flex column">
            <!-- <div v-if="!loggedInUser">
                <span><i class="far fa-user"></i>Login</span>
                <span><i class="fas fa-sign-out-alt"></i> Sign up</span>
            </div> -->
            <router-link class="profile-btn" :to="`/user/${loggedInUser._id}`"><i class="fas fa-user"></i> Profile</router-link>
            <span v-if="loggedInUser" @click="logout"><i class="fas fa-times-circle"></i> Logout</span>
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
