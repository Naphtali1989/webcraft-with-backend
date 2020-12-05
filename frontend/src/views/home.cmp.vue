<template>
    <section class="content-wrapper main-layout">
        <div class="main-hero flex column full">
            <h1>Build a website easily!</h1>
            <img
                class="hero-img"
                src="../assets/img/temp-hero.jpg"
            />
            <button
                class="home-btn hero-btn btn"
                @click="pushEditor"
            >Start Building</button>
        </div>

        <div class="home-card flex column">
            <div class="card-content flex column space-between">
                <span class="home-tag text-left">Imagination</span>
                <h2 class="title">Build your own websites that you can be proud of!</h2>
                <p>
                    Our platform will let you build you own websites using only
                    your imagination. <span class="logo-name">Webcraft</span> empowers you to to build
                    professional, custom websites in a completely visual canvas.
                </p>
                <button
                    class="home-btn btn"
                    @click="pushEditor"
                >Lets Create</button>
            </div>
            <img
                class="card-img"
                src="https://imagizer.imageshack.com/img924/8105/aLPK9v.png"
            />
        </div>
        <div class="home-card flex column">
            <div class="card-content flex column space-between">
                <span class="home-tag text-right">Accessibility</span>
                <h2 class="title">Suited for all your needs</h2>
                <p class="intro-text">
                    Suited for any of your needs
                    Design and build your own high-quality websites. Whether you’re promoting your business, showcasing your work,
                    opening your store or starting a blog — you can do it all with the <span class="logo-name">Webcraft</span> website editor.

                </p>
                <button
                    class="home-btn btn"
                    @click="pushTemplate"
                >Check Templates</button>
            </div>
            <img
                class="card-img"
                src="https://imagizer.imageshack.com/img922/6240/9IpCzn.png"
            />
        </div>
        <div class="home-card flex column">
            <div class="card-content flex column space-between">
                <span class="home-tag text-left">Just Drag</span>
                <h2 class="title">Just Drag &amp; Drop</h2>
                <p class="intro-text">
                    With a simple and drag and drop website builder, you can
                    design any website you want. Just <span>Drag</span>,
                    <span>Drop</span> and <span>Customise!</span> All the
                    templates below were built using the <span class="logo-name">Webcraft</span> platform.
                </p>
                <button
                    class="home-btn btn"
                    @click="pushEditor"
                >Give It A Try</button>
            </div>

            <img
                class="card-img"
                src="https://imagizer.imageshack.com/img924/328/88wVuo.png"
            />
        </div>

        <!-- <loader /> -->
    </section>
</template>


<script>
import loader from '@/cmps/custum-cmps/loader.cmp';
export default {
    name: 'home',
    components: {
        loader,
    },
    methods: {
        pushEditor() {
            this.$router.push('/editor')
        },
        pushTemplate() {
            this.$router.push('/wap')
        }
    }
};
</script>