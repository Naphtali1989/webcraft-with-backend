<template>
    <section class="content-wrapper main-layout">
        <div class="main-hero flex full">
            <h1>Build a website easily!</h1>
            <img class="hero-img" src="../assets/img/temp-hero.jpg" />
        </div>

        <div class="home-card flex">
            <div class="card-content flex column space-between">
                <span class="home-tag">Imagination</span>
                <h2>Build your own websites that you can be proud of!</h2>
                <p>
                    Our platform will let you build you own websites using only
                    your imagination. Webcraft empowers you to to build
                    professional, custom websites in a completely visual canvas.
                </p>
                <button class="home-btn btn">start building</button>
            </div>
            <img class="card-img" src="https://imagizer.imageshack.com/img924/8105/aLPK9v.png" />
        </div>
        <div class="home-card flex">
            <div class="card-content flex column space-between">
                <span class="home-tag">Accessibility</span>
                <h2 class="title">Suited for all your needs</h2>
                <p class="intro-text">
                    Suited for any of your needs
                    Design and build your own high-quality websites. Whether you’re promoting your business, showcasing your work,
                    opening your store or starting a blog—you can do it all with the Webcraft website editor.
                    <!-- With a simple and drag and drop website builder, you can
                    design any website you want. Just <span>Drag</span>,
                    <span>Drop</span> and <span>Customise!</span> All the
                    templates below were built using the Webcraft platform. -->
                </p>
                <button class="home-btn btn">start building</button>
            </div>
            <img class="card-img" src="https://imagizer.imageshack.com/img922/6240/9IpCzn.png" />
            <!-- <img src="../assets/showtoasi/img5.svg" /> -->
        </div>
        <div class="home-card flex">
            <div class="card-content flex column space-between">
                <span class="home-tag">Just Drag</span>
                <h2 class="title">Just Drag &amp; Drop To Begin!</h2>
                <p class="intro-text">
                    With a simple and drag and drop website builder, you can
                    design any website you want. Just <span>Drag</span>,
                    <span>Drop</span> and <span>Customise!</span> All the
                    templates below were built using the Webcraft platform.
                </p>
                <button class="home-btn btn">start building</button>
            </div>

            <img class="card-img" src="https://imagizer.imageshack.com/img924/328/88wVuo.png" />
        </div>

        <!-- <loader /> -->
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