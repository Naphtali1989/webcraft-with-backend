<template>
    <section v-if="wapTree" class="data-tree">
        <h1>This is data tree!</h1>
        <tree-branch v-for="cmp in wapTree" :key="cmp._id" :cmp="cmp" @focused="emitFocusCmp"/>

    </section>
</template>

<script>
import treeBranch from '@/cmps/custum-cmps/tree-branch.cmp.vue';
export default {
    name: 'data-tree',
    props: {
        wapTree: {
            type: Array
        },
    },
    components:{
      treeBranch
    },
    methods: {
        emitFocusCmp(_id) {
            this.$emit('focused', _id)
        },
    }
};
</script>

