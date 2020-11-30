<template>
    <ul>
        <component
            :is="'li'"
            @focused="onFocus"
            @click.stop.prevent="onFocus(cmp._id)"
        >
            {{ cmp.name }}
            <template v-if="cmp.children">
                <tree-branch
                    v-for="child in cmp.children"
                    :key="child._id"
                    :cmp="child"
                    @focused="onFocus"
                />
            </template>
        </component>
    </ul>
</template>

<script>
export default {
    name: 'tree-branch',
    props: {
        cmp: {
            type: Object
        }
    },
    methods: {
        onFocus(_id) {
            this.$emit('focused', _id)
        },
    }

}
</script>

<style>
</style>