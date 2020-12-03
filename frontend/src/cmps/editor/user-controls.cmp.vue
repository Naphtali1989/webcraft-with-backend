<template>
    <section>
        <section class="user-controls flex justify-center">
            <button class="btn choice-btn save" @click="saveWap">Save</button>
            <button class="btn choice-btn save" @click="saveSample">
                Save SAMPLE
            </button>
            <button class="btn choice-btn" @click="openPublishModal">
                Publish
            </button>
        </section>
        <!-- <publish-modal v-if="showPublishModal" /> -->
    </section>
</template>

<script>
import publishModal from '@/cmps/wap/publish-modal.cmp.vue';
export default {
    name: 'user-controls',
    data() {
        return {
            showPublishModal: false
        }
    },
    methods: {
        saveWap() {
            this.$emit('saveWap')
        },
        openPublishModal() {
            this.$emit('openPublishModal')
            console.log('clicked publish modal')
        },
        saveSample() {
            this.$emit('saveSample')
        }
    },
    components: {
        publishModal
    }
};
</script>