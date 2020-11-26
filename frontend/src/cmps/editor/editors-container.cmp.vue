<template>
    <section class="editors-container">
        <h1>{{ editorName }} editor</h1>
        <component
            :is="currEditorName"
            :cmpToEdit="cmpToEdit"
            v-if="cmpToEdit"
            @updated="emitUpdated"
            @uploading="emitUploadImg"
        />
    </section>
</template>

<script>
import textEditor from '@/cmps/editor/editors/text-editor.cmp.vue';
import sectionEditor from '@/cmps/editor/editors/section-editor.cmp.vue';
export default {
    name: 'editors-container',
    props: {
        cmpToEdit: {
            type: Object
        }
    },
    data() {
        return {
            currEditor: 'text'
        }
    },
    computed: {
        currEditorName() {
            return this.currEditor + '-editor';
        },
        editorName() {
            if (this.cmpToEdit.type === 'img') return 'Image';
            return this.cmpToEdit.type;
        }
    },
    methods: {
        emitUpdated(updatedCmp) {
            this.$emit('updated', updatedCmp);
        },
        emitUploadImg(ev) {
            this.$emit('uploading', ev)
        },
    },
    updated() {
        if (this.cmpToEdit && (this.cmpToEdit.type === 'txt' || this.cmpToEdit.type === 'link')) this.currEditor = 'text'
        else this.currEditor = 'section'
    },
    components: {
        textEditor,
        sectionEditor,
    }
}
</script>