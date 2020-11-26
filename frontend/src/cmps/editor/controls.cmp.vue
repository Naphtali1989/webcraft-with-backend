<template>
    <div class="controls flex align-center">
        <button class="btn"><i class="fas fa-trash"></i></button>
        <button class="btn"><i class="fas fa-edit"></i></button>
        <button class="btn"><i class="fas fa-copy"></i></button>
        <button class="btn"><i class="fas fa-trash"></i></button>
    </div>

</template>

<script>
export default {
    name: 'controls',
    props: {
        id: {
            type: String
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