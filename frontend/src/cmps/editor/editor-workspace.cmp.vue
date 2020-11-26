<template>
    <section class="editor-workspace flex column">
        <wap-worker v-for="cmp in cmps" :key="cmp.id" :cmp="cmp" @clicked="emitUserChoice" @updatedTxt="emitUpdateTxt" @copy="emitCopy" @delete="emitDelete" @moveSection="emitMoveSection">

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
            console.log('edit mode is on');
            this.$emit('clicked',id);
        },
        emitUpdateTxt(txtValue) {
            this.$emit('updatedTxt',txtValue);
        },
        emitCopy(id) {
            this.$emit('copy',id)
        },
        emitDelete(id) {
            this.$emit('delete',id)
        },
        emitMoveSection(id,diff) {
            this.$emit('moveSection',id,diff)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>