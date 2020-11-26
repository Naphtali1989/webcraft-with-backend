<template>
    <el-select class="user-input input-filter" v-model="value" placeholder="Select" @change="emitChange">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :style="'font-family:'+item.value+';'"
        >
        </el-option>
    </el-select>
</template>

<script>
export default {
    props:{
        options:Array
    },
    data() {
        return {
            value: ''
        }
    },

    methods:{
        emitChange(){
            this.$emit('change', this.value)
        }
    }
}
</script>