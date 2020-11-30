<template>
    <section>
        <wap-list @addWap="pushEditor" v-if="waps" :waps="waps"></wap-list>
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
        pushEditor() {
            this.$router.push('/editor');
        }
    },
    computed:{
        waps(){
            return this.$store.getters.getWaps
        }
    },
    async created() {
        await this.$store.dispatch({ type: 'loadWaps' });
    }
}
</script>
