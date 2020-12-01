<template>
    <section class="content-wrapper main-layout">
        <div class="main-hero flex">
            <h1>Build a website easily!</h1>
           
        </div>
        <div class="intro">
            <h1>Build a website easily!</h1>
             <img class="img1" src="https://imagizer.imageshack.com/img924/8105/aLPK9v.png" />
        </div>
        <div class="intro">
            <h1 class="title">Just Drag Drop</h1>
            <img class="img2" src="https://imagizer.imageshack.com/img922/6240/9IpCzn.png" />
            <p class="intro-text">With a super most innovative drag and drop website builder, you can design any website you want. Just Drag, Drop and Customize!
                All the templates below were built using Webcraft Platform.</p>
        </div>

        <loader />
    </section>
</template>

<script>

import loader from '@/cmps/custum-cmps/loader.cmp';
export default {
    name: 'home',
    components: {
        loader
    }
};
</script>