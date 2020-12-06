<template>
    <section class="modal-container">
        <button
            class="flex align-center justify-center screen"
            @click="closePublishModal"
        >x<button>
                <section
                    class="publish-modal-container"
                    v-if="!currWebsiteLink"
                >
                    <h1>Please Enter Your website name:</h1>
                    <form @submit.prevent="setWapName">
                        <input
                            type="text"
                            v-model="wapName"
                            placeholder="Enter website name"
                        >
                    </form>
                    <div v-if="currWebsiteLink">
                        <h1 class="modal-title">Your Website Link:</h1>
                        <a :href="currWebsiteLink">Click here to visit your website</a>
                        <button
                            class="btn close-pub-btn"
                            @click="closePublishModal"
                        >x</button>
                        <div class="publish-container-input">
                            <input
                                type="text"
                                class="publish-input"
                                v-model="currWebsiteLink"
                            >
                            <button
                                class="btn copy-btn"
                                @click="copyWebLink"
                            >
                                <i class="fas fa-clipboard"></i>
                            </button>
                            <p
                                class="text-center"
                                v-if="isCopy"
                            >Your Link Has Been Copied!</p>
                        </div>
                    </div>
                </section>

    </section>
</template>

<script>
export default {
    name: 'publish-modal',
    props: {
        currWebsiteLink: String
    },
    data() {
        return {
            isCopy: false,
            wapName: ''
        }
    },
    methods: {
        closePublishModal() {
            this.$emit('closePublishModal')
        },
        async setWapName() {
            this.$emit('saveWapName',this.wapName)
            // await this.$store.dispatch({ type: 'saveWapName',wapName })
        },
        copyWebLink() {
            const body=document.querySelector('body');
            const input=document.querySelector('.publish-input');
            const textArea=document.createElement('textarea');
            textArea.value=input.value;
            body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
            this.isCopy=true
            this.restIsCopy();
        },
        restIsCopy() {
            setTimeout(() => {
                this.isCopy=false
            },1500)
        }
    }
}
</script>

<style>
</style>

