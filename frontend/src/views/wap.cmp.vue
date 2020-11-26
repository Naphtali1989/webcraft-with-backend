<template>
    <div class="">NOTHING HERE TO SEE YET</div>
    <!-- <wap-renderer :template="template" /> -->
</template>

<script>
// import wapRenderer from '@/cmps/wap/wap-renderer.cmp.vue';
import { wapService } from '@/services/wap.service'

export default {
    name: 'userWebsite',
    data() {
        return {
            template: '',
        }
    },
    async mounted() {
        // console.log(this)
        // const website = await wapService.getWap(this);
        // console.log('Let us see what we get!', website)
    },
    components: {
        // wapRenderer,
        // colorPicker
    }
};
</script>