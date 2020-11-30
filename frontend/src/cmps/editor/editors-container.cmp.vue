<template>
    <section class="editors-container">
        <!-- Saving a spot to the user that there is no component to edit -->
        <h1 class="editor-name text-center" v-if="cmpToEdit">{{ editorName }} editor</h1>
        <component v-if="cmpToEdit" :is="currEditorName" :cmpToEdit="cmpToEdit" @updated="emitUpdated" @uploading="emitUploadImg" />
        <div v-else class="editor-message flex justify-center">
            <h1>Please click on an element to edit</h1>
        </div>
    </section>
</template>

<script>
import textEditor from '@/cmps/editor/editors/text-editor.cmp.vue';
import sectionEditor from '@/cmps/editor/editors/section-editor.cmp.vue';
import videoEditor from '@/cmps/editor/editors/video-editor.cmp.vue';
export default {
    name: 'editors-container',
    props: {
        cmpToEdit: {
            type: Object
        }
    },
    data() {
        return {
            currEditor: null
        }
    },
    computed: {
        currEditorName() {
            return this.currEditor+'-editor';
        },
        editorName() {
            if(this.cmpToEdit.name==='txt'||this.cmpToEdit.name==='i') return 'Text';
            if(this.cmpToEdit.name==='link') return 'Link'
            if(this.cmpToEdit.name==='img') return 'Image';
            if(this.cmpToEdit.name==='section') return 'Section';
            if(this.cmpToEdit.name==='iframe') return 'Video'
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
        if(this.cmpToEdit&&
            (this.cmpToEdit.name==='txt'||
                this.cmpToEdit.name==='link'||
                this.cmpToEdit.name==='input'||
                this.cmpToEdit.name==='i')) this.currEditor='text'
        else this.currEditor='section'
    },
    created() {
        // const {name} = this.cmpToEdit;
        if(this.cmpToEdit&&
            (this.cmpToEdit.name==='txt'||
                this.cmpToEdit.name==='link'||
                this.cmpToEdit.name==='input'||
                this.cmpToEdit.name==='i')) this.currEditor='text'
        else if(this.cmpToEdit.name==='section') this.currEditor='section'
        else this.currEditor='video'
    },
    components: {
        textEditor,
        sectionEditor,
        videoEditor
    }
}
</script>