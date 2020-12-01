<template>
    <section class="user-controls flex  justify-center">
        <button class="btn choice-btn">Publish</button>
        <button class="btn choice-btn" @click="saveWap"><i class="far fa-save"></i></button>
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