<template>
    <section v-if="wapToShow">
        <wap-worker v-for="cmp in wapToShow.cmps" :key="cmp._id" :cmp="cmp" />
    </section>
</template>

<script>
import wapWorker from '@/cmps/wap/wap-worker.cmp.vue';
import { wapService } from '@/services/wap.service';

export default {
    name: 'wap',
    data() {
        return {
            wapToShow: null
        }
    },
    async created() {
        const _id = this.$route.params.id;
        this.wapToShow = await wapService.getById(_id);

        this.$store.commit({
            type: 'toggleUserSiteOpen',
        });
    },
    destroyed() {
        this.$store.commit({
            type: 'toggleUserSiteOpen',
        });
    },
    components: {
        wapWorker
    }
};
</script>