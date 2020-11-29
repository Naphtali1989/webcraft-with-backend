<template>
    <section>
        <!-- <hero /> -->
        <!-- <header-sample /> -->
        <!-- <grid-sample /> -->
        <!-- <unsplash-search> -->
        <!-- <hero-sample /> -->
        <!-- </unsplash-search> -->
        <!-- <navbar-sample /> -->
        <!-- <card-sample /> -->
        <!-- <avatar-modal /> -->
        <!-- <footer-sample /> -->
        <!-- <gallery-sample /> -->
        <!-- <card-sample2 /> -->
        <!-- <card-sample3 /> -->
        <card-video />
        <!-- <hero /> -->
    </section>
</template>

<script>
// import footerSample from '@/cmps/samples/footer-samples/footer-sample.cmp.vue';
// import gallerySample from '@/cmps/samples/gallery-samples/gallery-sample.cmp.vue';
// import cardSample2 from '@/cmps/samples/card-samples/card-sample2.cmp.vue';
// import cardSample3 from '@/cmps/samples/card-samples/card-sample3.cmp.vue';
import cardVideo from '@/cmps/samples/card-samples/card-video.cmp.vue';
// import navbarSample from '@/cmps/samples/header-samples/navbar-sample.cmp.vue';
// import cardSample from '@/cmps/samples/card-samples/card-sample.cmp.vue';
// import avatarModal from '@/cmps/avatar-modal.cmp.vue';
import hero from '@/cmps/samples/idantest/hero.vue';
// import GridSample from '../cmps/samples/header-samples/grid-sample.vue';
// import unsplashSearch from '@/cmps/editor/editors/unsplash-search.cmp.vue';
// import wapService from '@/services/wap.service'
export default {
    name: 'playground',
    components: {
        // avatarModal
        // headerSample,
        // hero,
        // gridSample,
        // unsplashSearch
        // navbarSample,
        // cardSample
        // heroSample
        // cardSample2,
        // footerSample
        // footerSample,
        // gallerySample
        cardVideo
        // cardSample3

    },
    // async mounted(){
    //     console.log('lets us see', this)
    //     const letsSee = await wapService.getWap(this)
    //     console.log('lets us see', letsSee)
    // }
}
</script>
