<template>
    <section class="user-controls flex  justify-center">
        <button class="btn choice-btn">Publish</button>
        <button class="btn choice-btn" @click="saveWap">Save</button>
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
            console.log('clicked!');
            this.$emit('saveWap')
        }
    },
    components: {

    }
};
</script>