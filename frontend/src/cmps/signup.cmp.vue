<template>
    <section class="signup-modal">
        <div class="forms-container">
            <div class="signin-signup">
                <h2 class="title">{{modalHeader}}</h2>
                <form class="flex column align-center" @submit.prevent="modalAction">
                    <div class="form-control" v-if="isSignup">
                        <span class="fas fa-user"></span>
                        <input type="text" :placeholder="placeholder" v-model="user.username" required>
                    </div>
                    <div class="form-control">
                        <span><i class="fas fa-envelope"></i></span>
                        <input type="text" placeholder="Enter Email..." v-model="user.email" required>
                    </div>

                    <div class="form-control">
                        <span @click="toggleFieldType" class="fas fa-lock"></span>
                        <input :type="passwordType" placeholder="Enter Password..." v-model="user.password" required>
                    </div>
                    <button class="btn form-btn">Sign Up</button>
                    <a @click="toggleModalMode">Already have an account? Login</a>
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
            user: {}
        }
    },
    methods: {
        toggleModalMode() {
            this.isSignup=!this.isSignup
            if(this.isSignup) this.user={ username: '',email: '',password: '' }
            else this.user={ email: '',password: '' }
        },
        modalAction() {
            if(this.isSignup) this.signup(this.user)
            else this.login(this.user)
        },
        async signup() {
            const userCreds=JSON.parse(JSON.stringify(this.user))
            await this.$store.dispatch({ type: 'signup',userCreds })
            this.user={ name: '',email: '',password: '' }
        },
        async login() {
            const userCreds=JSON.parse(JSON.stringify(this.user));
            await this.$store.dispatch({ type: 'login',userCreds });
            this.user={ email: '',password: '' }

        },
        toggleFieldType() {
            this.passwordType=this.passwordType==='password'? 'text':'password'
        }
    },
    computed: {
        modalHeader() {
            return this.isSignup? 'Sign Up':'Login';
        },
        placeholder() {
            return this.isSignup? 'Enter Username....':'Enter Email...'
        },
        modelMode() {
            return this.isSignup? 'user.username':'user.email'
        }



    },

}
</script>

<style>
</style>