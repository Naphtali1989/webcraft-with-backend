<template>

    <div class="container">
        <div class="img">
            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png">
        </div>
        <div class="login-content">
            <form action="index.html">
                <img src="../assets/img/profile.svg">
                <h2 class="title">Welcome</h2>
                <div class="input-div one">
                    <div class="i">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="div">
                        <h5>Username</h5>
                        <input type="text" class="input">
                    </div>
                </div>
                <div class="input-div pass">
                    <div class="i">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="div">
                        <h5>Password</h5>
                        <input type="password" class="input">
                    </div>
                </div>
                <a href="#">Forgot Password?</a>
                <input type="submit" class="btn" value="Login">
            </form>
        </div>
    </div>

</template>

<script>
export default {
    name: 'signup',
    data() {
        return {
            passwordType: 'password',
            isSignup: true
        }
    },
    methods: {
        toggleFieldType() {
            this.passwordType=this.passwordType==='password'? 'text':'password'
        }
    }

}
</script>

<style>
</style>