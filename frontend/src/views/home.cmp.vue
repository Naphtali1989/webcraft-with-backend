<template>
    <section>
        <h1>This is the home page</h1>
        <avatar :color="'red'" :size="50" :imgUrl="'https://yt3.ggpht.com/ytc/AAUvwng7U1ocP5NSaqKiwcApzXq9WGhWWYvdsfo6XTazvg=s900-c-k-c0x00ffffff-no-rj'"/>

        <avatar :color="'red'" :size="50" :imgUrl="'https://imagizer.imageshack.com/img923/3226/fgIcr0.jpg'"/>
        
    </section>
</template>

<script>

import avatar from '@/cmps/avatar.cmp.vue';

export default {
    name:'home',
    components:{avatar}
};

</script>