<template>
    <div class="block custom-range">
        <el-slider :max="options.max" :min="options.min" v-model="value" @input="emitChange"></el-slider>
    </div>
</template>

<script>
export default {
    props: {
        options: Object
    },
    data() {
        return {
            value: this.options.initVal
        }
    },

    methods: {
        emitChange() {
            this.$emit('input',this.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.custom-range {
    width: 70%;
}
</style>