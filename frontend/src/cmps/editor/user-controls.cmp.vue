<template>
    <section>
        <section class="user-controls flex justify-center">
            <button
                class="btn choice-btn save"
                @click="saveWap"
            >Save</button>
            <button
                v-if="loggedInUser && loggedInUser.isAdmin"
                class="btn choice-btn save"
                @click="saveSample"
            >
                Save SAMPLE
            </button>
            <button
                class="btn choice-btn"
                @click="openPublishModal"
            >
                Publish
            </button>
        </section>
        <!-- <publish-modal v-if="showPublishModal" /> -->
    </section>
</template>

<script>
import publishModal from '@/cmps/wap/publish-modal.cmp.vue';
import { eventBus } from '@/services/event-bus.service.js'
export default {
    name: 'user-controls',
    data() {
        return {
            showPublishModal: false
        }
    },
    methods: {
        saveWap() {
            this.$emit('saveWap');
        },
        openPublishModal() {
            if(!this.loggedInUser) {
                eventBus.$emit('show-msg',{ txt: 'Please Login to publish your website',type: 'error' })
                return;
            }
            this.$emit('openPublishModal');
        },
        saveSample() {
            this.$emit('saveSample');
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser
        }
    },
    components: {
        publishModal
    }
};
</script>