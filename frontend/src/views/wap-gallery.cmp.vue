<template>
    <section>
        <!-- TODO: change this button to an empty template that leads to an empty editor -->
        <div class="page-controls flex">
            <h1 class="site-saying">Create a website as you wish</h1>
            <button class="big-btn btn" @click="openEditor">
                Click here to start!
            </button>
        </div>
        <wap-list :waps="waps"></wap-list>
    </section>
</template>

<script>
import wapList from '@/cmps/wap/wap-list.cmp.vue';
export default {
    name: 'wap-gallery',
    components: {
        wapList
    },
    methods: {
        openEditor() {
            this.$router.push('/editor');
        }
    },
    computed:{
        waps(){
            this.$store.wapList
        }
    },
    async created() {
        await this.$store.dispatch({ type: 'loadWaps' });
    }
}
</script>
                // TODO: refactor code to get waps from data base //