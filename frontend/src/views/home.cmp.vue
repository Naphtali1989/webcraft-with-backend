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
        <!-- <vue-aos animation-class="fadeIn animated" @animationstart="checkAnime"> -->
        <div class="home-card flex column" data-aos="fade-right">
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
        <!-- </vue-aos> -->
        <!-- <vue-aos animation-class="fadeIn animated" @animationstart="checkAnime"> -->
        <div class="home-card flex column" data-aos="fade-left">
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
        <!-- </vue-aos> -->
        <!-- <vue-aos animation-class="fadeIn animated" @animationstart="checkAnime"> -->
        <div data-aos="zoom-out" class="home-card flex column">
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

        <div data-aos="fade-right" class="home-card flex column">
            <div class="card-content flex column space-between">
                <span class="home-tag text-left">Collaborate</span>
                <h2 class="title">Collaborate With Friends</h2>
                <p class="intro-text">
                    We are proud to introduce the collaboration mode. Just go to
                    the editor, Click "Start Collaborate" and send the the link
                    to all your Friends and start work toghter using the
                    <span class="logo-name">Webcraft</span> platform
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

        <section v-if="waps" class="home-wap-gallery grid" data-aos="zoom-in">
            <div
                v-for="(wap, idx) in waps.slice(pageNum, pageNum + 3)"
                :key="wap._id"
                class="wap-preview"
                @click="paginate(idx)"
            >
                <h3>{{ wap.title }}</h3>
                <img :src="wap.thumbnail" />
            </div>
        </section>

        <!-- <img src="../assets/webcraft-svg/editor-alone.svg" /> -->
        <!-- <img src="../assets/webcraft-svg/webcraft-boy.svg" /> -->
        <!-- <img src="../assets/webcraft-svg/editor-alone-v3.svg" /> -->
        <!-- <img src="../assets/webcraft-svg/picture-editor.svg" /> -->

        <!-- <loader /> -->
    </section>
</template>


<script>
import VueAos from 'vue-aos';
import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init({ disable: "phone" });
import loader from '@/cmps/custum-cmps/loader.cmp';
AOS.init({
    duration: 2400,
})


// import wapList from '@/cmps/wap/wap-list.cmp.vue';
export default {
    name: 'home',
    data() {
        return {
            isLoading: false,
            pageNum: 0,
            // wapsToShow: null
        }
    },
    computed: {
        waps() {
            const copyWaps = JSON.parse(JSON.stringify(this.$store.getters.getWaps));
            // const wapsToShow = copyWaps.slice((this.pageNum), this.pageNum + 3);
            return copyWaps;
        },
        wapLength() {
            return this.$store.getters.getWaps.length
        }
    },
    methods: {
        async paginate(idx) {
            // var timeout;
            // if (timeout) clearTimeout(timeout)
            // if (idx === this.waps.length - 1) {
            //     timeout = setTimeout(() => {
            this.pageNum += 1;
            if (this.pageNum === this.wapLength -4) {
                console.log(this.pageNum)
                this.pageNum = 0;
                // await this.$store.dispatch({ type: 'loadWaps' });
            }
            // const copyWaps = JSON.parse(JSON.stringify(this.$store.getters.getWaps));
            // this.wapsToShow = copyWaps.slice((this.pageNum), this.pageNum + 3);
            // if (this.pageNum >= this.wapLength - 3) this.pageNum = 0;
            // }, 1200)
            // }
            // else if (idx === 0) {
            //     timeout = setTimeout(() => {
            //         this.pageNum -= 1;
            //     }, 1200)
            // }
        },
        pushEditor() {
            this.$router.push('/editor')
        },
        pushTemplate() {
            this.$router.push('/wap')
        },
        checkAnime(ev) {
            console.log('eve is?', ev)
        }
    },
    async created() {
        await this.$store.dispatch({ type: 'loadWaps' });
        // this.paginate()
    },
    components: {
        loader,

        // wapList
    },
};
</script>