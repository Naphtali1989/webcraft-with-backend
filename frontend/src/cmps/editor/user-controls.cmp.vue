<template>
    <section class="user-controls flex  justify-center">
        <button class="btn choice-btn save" @click="saveWap">Save</button>
        <button class="btn choice-btn">Publish</button>
    </section>
</template>

<script>
export default {
    name: 'user-controls',
    data() {
        return {

        }
    },
    methods: {
        saveWap() {
            this.$emit('saveWap')
        }
    },
    components: {

    }
};
</script>