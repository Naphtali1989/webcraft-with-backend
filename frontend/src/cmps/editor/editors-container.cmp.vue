<template>
    <section class="editors-container">

        <!-- Saving a spot to the user that there is no component to edit -->
        <component :is="currEditorName" :cmpToEdit="cmpToEdit" v-if="cmpToEdit" @updated="emitUpdated" @uploading="emitUploadImg" />
        <h1 v-if="cmpToEdit">{{ editorName }} editor</h1>
        <div v-else class="flex align-center">
            <h1>Please Click on a section to begin</h1>
        </div>
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
            return this.currEditor+'-editor';
        },
        editorName() {
            if(!this.cmpToEdit) return 'Text';
            if(this.cmpToEdit.name==='img') return 'Image';
            return this.cmpToEdit.name;
        }
    },
    methods: {
        emitUpdated(updatedCmp) {
            this.$emit('updated',updatedCmp);
        },
        emitUploadImg(ev) {
            this.$emit('uploading',ev)
        },
    },
    updated() {
        if(this.cmpToEdit&&(this.cmpToEdit.name==='txt'||this.cmpToEdit.name==='link')) this.currEditor='text'
        else this.currEditor='section'
    },
    components: {
        textEditor,
        sectionEditor,
    }
}
</script>