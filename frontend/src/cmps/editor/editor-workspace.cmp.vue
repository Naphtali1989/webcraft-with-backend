<template>
    <section class="editor-workspace flex column">
        <!-- <component :is="cmp.type" v-for="(cmp,idx) in cmps" :key="idx" :info="cmp.info" /> -->
        <wap-worker v-for="cmp in cmps" :key="cmp.id" :cmp="cmp" @clicked="emitUserChoice" @updatedTxt="emitUpdateTxt">
        </wap-worker>
    </section>
</template>

<script>
// import heroSample from "@/cmps/samples/hero-sample.cmp.vue";
import wapWorker from "@/cmps/wap/wap-worker.cmp.vue";
export default {
    name: 'editor-workspace',
    props: {
        cmps: {
            type: Array
        }
    },
    components: {
        // heroSample,
        wapWorker,
    },
    methods: {
        emitUserChoice(id) {
            this.$emit('clicked',id);
        },
        emitUpdateTxt(txtValue) {
            this.$emit('updatedTxt',txtValue);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>