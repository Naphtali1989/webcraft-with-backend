<template>
    <section>
        <header class="main-head">
            <nav class="flex space-between align-items wrap">
                <!-- <div class="logo">
                    <h1><img src="@/assets/img/code.svg" alt=""> Name</h1>
                </div> -->
                <!-- 
                <div class="links flex space-between">
                    <a href="#">Home</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div> -->
            </nav>
        </header>
        <section class="intro">
            <h2>Webcraft</h2>
            <!-- <h3>Build website with ease</h3> -->
            <h3>Building websites is fun!</h3>
            <div class="intro-social">
                <span><i class="fab fa-github fa-3x"></i></span>
                <span><i class="fab fa-linkedin-in fa-3x"></i></span>
            </div>
        </section>
        <div class="intro-images">
            <img src="@/assets/img/splash.svg" alt="" class="splash">
            <img src="@/assets/img/me.svg" class="me" />
        </div>
        <footer class="main-footer">
            <h3>Webcraft</h3>
            <div class="social-links">
                <span><i class="fab fa-instagram"></i></span>
                <span><i class="fab fa-youtube"></i></span>
                <span><i class="fab fa-facebook"></i></span>
            </div>
        </footer>
    </section>
</template>

<script>

import avatar from '@/cmps/avatar.cmp.vue';

export default {
    name: 'home',
    components: { avatar }
};

</script>