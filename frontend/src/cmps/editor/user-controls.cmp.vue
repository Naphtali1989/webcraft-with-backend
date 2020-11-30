<template>
    <section class="user-controls flex row-reverse">
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
            this.$emit('saveWap')
        }
    },
    components: {

    }
};
</script>