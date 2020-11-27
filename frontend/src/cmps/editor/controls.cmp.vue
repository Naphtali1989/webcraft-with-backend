<template>
    <div class="controls flex align-center">
        <button class="btn" @click="onDelete"><i class="fas fa-trash"></i></button>
        <button class="btn" @click="onCopy"><i class="fas fa-copy"></i></button>
        <button class="btn" @click="onMoveSection(-1)"><i class="fas fa-angle-double-up"></i></button>
        <button class="btn" @click="onMoveSection(1)"><i class="fas fa-angle-double-down"></i></button>
    </div>

</template>

<script>
export default {
    name: 'controls',
    props: {
        id: {
            type: String
        }
    },
    methods: {
        onCopy() {
            this.$emit('copy',this.id)
        },
        onDelete() {
            this.$emit('delete',this.id)
        },
        onMoveSection(diff) {
            this.$emit('moveSection',this.id,diff)
        }
    }
}
</script>

<style scoped lang="scss">
.controls {
    height: 20px;
    padding: 5px;
    background: #fafafa;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
}
</style>