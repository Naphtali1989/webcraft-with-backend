<template>
    <section class="modal-container">
        <div
            class="flex align-center justify-center screen"
            @click="closePublishModal"
        ></div>
        <section class="publish-modal-container">
            <h1 class="modal-title">Your Website Link:</h1>
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
            isCopy: false
        }
    },
    methods: {
        closePublishModal() {
            console.log('clicked');
            this.$emit('closePublishModal')
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

