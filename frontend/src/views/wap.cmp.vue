<template>
    <section v-if="wapToShow">
        <wap-renderer
            v-for="cmp in wapToShow.cmps"
            :key="cmp._id"
            :cmp="cmp"
            @inputed="setInputValue"
            @submit="sendReview"
        />
    </section>
</template>

<script>
// import wapWorker from '@/cmps/wap/wap-worker.cmp.vue';
import wapRenderer from '@/cmps/wap/wap-renderer.cmp.vue';
import { wapService } from '@/services/wap.service';
import { utilService } from '@/services/util.service';

export default {
    name: 'wap',
    data() {
        return {
            wapToShow: null,
            inputValue: {}
        }
    },
    methods: {
        setInputValue(value, key) {
            this.inputValue[key] = value;
        },
        async sendReview() {
            const review = { _id: utilService.makeId(), payload: this.inputValue }
            if (!this.wapToShow.reviews || !this.wapToShow.reviews.length) {
                this.wapToShow.reviews = [];
            }
            this.wapToShow.reviews.push(review);
            await this.$store.dispatch({
                type: 'saveWap',
                wap: this.wapToShow
            })
            this.inputValue = {};
            const elInputs = document.querySelectorAll('input')
            elInputs.forEach(elInput=>{
                elInput.value = '';
            })
            const elTxt = document.querySelector('textArea')
            if(elTxt)elTxt.value = '';
        }
    },
    async created() {
        const _id = this.$route.params.id;
        this.wapToShow = await wapService.getById(_id);

        this.$store.commit({
            type: 'toggleUserSiteOpen',
        });
        document.title = this.wapToShow.title;
    },
    destroyed() {
        this.$store.commit({
            type: 'toggleUserSiteOpen',
        });
        document.title = 'Webcraft';
    },
    components: {
        // wapWorker,
        wapRenderer
    }
};
</script>