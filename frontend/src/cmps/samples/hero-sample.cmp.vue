<template>
    <section class="sample-hero flex column" :class="info.class" :style="info.style">
        <!-- <component :is="" v-for=""/> -->
        <h1 class="sample-hero-heading" :class="info.children.h1.class" :style="info.style">{{info.children.h1.txt}}</h1>
        <p class="wap-hero-txt" :class="info.children.p.class" :style="txtStyle">{{info.children.p.txt}}</p>
        <a class="wap-hero-btn" :class="info.children.link.class" :style="linkStyle" :href="info.children.link.href">{{info.children.link.txt}}</a>
    </section>

</template>

<script>
export default {
    name: 'hero-sample',
    props: {
        info: Object
    }

}
</script>