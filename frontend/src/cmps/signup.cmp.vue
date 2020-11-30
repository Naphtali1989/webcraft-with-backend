<template>
    <section class="signup-modal">
        <div class="forms-container">
            <div class="signin-signup">
                <h2 class="title">Sign in</h2>
                <form class="flex column align-center" @submit.prevent="signup">
                    <div class="form-control">
                        <span class="fas fa-user"></span>
                        <input type="text" placeholder="Enter Username..." v-model="user.username" required>
                    </div>
                    <div class="form-control" v-if="isSignup">
                        <span><i class="fas fa-envelope"></i></span>
                        <input type="text" placeholder="Enter Email..." v-model="user.email" required>
                    </div>
                    <div class="form-control">
                        <span @click="toggleFieldType" class="fas fa-lock"></span>
                        <input :type="passwordType" placeholder="Enter Password..." v-model="user.password" required>
                    </div>
                    <button class="btn form-btn">Sign Up</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'signup',
    data() {
        return {
            passwordType: 'password',
            isSignup: true,
            user: { username: '',email: '',password: '' }
        }
    },
    methods: {
        async signup() {
            const userCreds=JSON.parse(JSON.stringify(this.user))
            await this.$store.dispatch({ type: 'signup',userCreds })
            this.user={ name: '',email: '',password: '' }
        },
        toggleFieldType() {
            this.passwordType=this.passwordType==='password'? 'text':'password'
        }
    }

}
</script>

<style>
</style>