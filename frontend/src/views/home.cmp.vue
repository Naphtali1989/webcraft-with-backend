<template>
    <section class="content-wrapper main-layout">
        <div class="main-hero flex column full">
            <div class="hero-screen"></div>
            <img
                class="hero-img"
                src="../assets/webcraft-svg/picture-editor.svg"
            />
            <div class="home-btn hero-btn from-top btn" @click="pushEditor">
                Start Building
            </div>
        </div>
        <h1>Build a website easily!</h1>
        <div class="home-card flex column">
            <div class="card-content flex column space-between">
                <span class="home-tag text-left">Imagination</span>
                <h2 class="title">
                    Build your own websites that you can be proud of!
                </h2>
                <p>
                    Our platform will let you build you own websites using only
                    your imagination.
                    <span class="logo-name">Webcraft</span> empowers you to to
                    build professional, custom websites in a completely visual
                    canvas.
                </p>
                <button class="home-btn btn" @click="pushEditor">
                    Let's Create!
                </button>
            </div>
            <img
                class="card-img"
                src="../assets/webcraft-svg/editor-alone-v3.svg"
            />
        </div>
        <div class="home-card flex column">
            <div class="card-content flex column space-between">
                <span class="home-tag text-right">Accessibility</span>
                <h2 class="title">Suited for all your needs</h2>
                <p class="intro-text">
                    Suited for any of your needs Design and build your own
                    high-quality websites. Whether you’re promoting your
                    business, showcasing your work, opening your store or
                    starting a blog — you can do it all with the
                    <span class="logo-name">Webcraft</span> website editor.
                </p>
                <button class="home-btn btn" @click="pushTemplate">
                    Check Templates
                </button>
            </div>
            <img
                class="card-img"
                src="../assets/webcraft-svg/webcraft-boy.svg"
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
                    templates below were built using the
                    <span class="logo-name">Webcraft</span> platform.
                </p>
                <button class="home-btn btn" @click="pushEditor">
                    Give it a try!
                </button>
            </div>

            <img
                class="card-img"
                src="../assets/webcraft-svg/editor-alone.svg"
            />
        </div>
        <wap-list v-if="!isLoading" :waps="waps"></wap-list>

        <!-- <img src="../assets/webcraft-svg/editor-alone.svg" /> -->
        <!-- <img src="../assets/webcraft-svg/webcraft-boy.svg" /> -->
        <!-- <img src="../assets/webcraft-svg/editor-alone-v3.svg" /> -->
        <!-- <img src="../assets/webcraft-svg/picture-editor.svg" /> -->

        <!-- <loader /> -->
    </section>
</template>


<script>
import loader from '@/cmps/custum-cmps/loader.cmp';
import wapList from '@/cmps/wap/wap-list.cmp.vue';
export default {
    name: 'home',
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        waps() {
            return this.$store.getters.getWaps;
        },
    },
    methods: {
        pushEditor() {
            this.$router.push('/editor')
        },
        pushTemplate() {
            this.$router.push('/wap')
        },
    },
    async created() {
        await this.$store.dispatch({ type: 'loadWaps' });
    },
    components: {
        loader,
        wapList
    },
};
</script>