<template>
    <section class="content-wrapper main-layout">
        <div class="main-hero flex">
            <h1>Build a website easily!</h1>
        </div>
        <div class="home-card flex">
            <div class="card-content">
                <h2>Build your own websites that you can be proud of!</h2>
                <p>
                    Our platform will let you build you own websites using only
                    your imagination.
                </p>
                <p>
                    Webcraft empowers you to to build professional, custom
                    websites in a completely visual canvas.
                </p>
            </div>
            <img
                class="card-img"
                src="https://imagizer.imageshack.com/img924/8105/aLPK9v.png"
            />
        </div>
        <div class="home-card flex">
            <div class="card-content">
                <h2 class="title">Just Drag &amp; Drop</h2>
                <p class="intro-text">
                    With a super most innovative drag and drop website builder,
                    you can design any website you want. Just Drag, Drop and
                    Customize! All the templates below were built using Webcraft
                    Platform.
                </p>
            </div>
            <img
                class="card-img"
                src="https://imagizer.imageshack.com/img922/6240/9IpCzn.png"
            />
        </div>

        <loader />
    </section>
</template>

<script>
// import LottieAnimation from 'lottie-vuejs'
import loader from '@/cmps/custum-cmps/loader.cmp';
export default {
    name: 'home',
    components: {
        loader,
        // LottieAnimation
    }
};
</script>