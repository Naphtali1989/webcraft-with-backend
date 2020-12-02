<template>
    <section class="editors-container">
        <!-- Saving a spot to the user that there is no component to edit -->
        <template v-if="cmpToEdit">
            <h1 class="editor-name text-center">
                <span :class="editorIcon"></span>
                {{ editorTitle }}
            </h1>
            <component
                :is="renderedEditor"
                :cmpToEdit="cmpToEdit"
                @uploading="emitUploadImg"
                @vidChanged="emitChangedVid"
                @mapZoomChanged="emitChangedZoom"
            />
        </template>
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
        renderedEditor() {
            return this.currEditor + '-editor';
        },
        editorTitle() {
            if (this.cmpToEdit) {
                const { name } = this.cmpToEdit;
                if (name === 'section' || name === 'div') return 'Section Editor';
                if (name === 'txt' || name === 'i') return 'Text Editor';
                if (name === 'link') return 'Link Editor';
                if (name === 'img') return 'Image Editor';
                if (name === 'iframe') return 'Video Editor';
                if (name === 'google-map') return 'Map Editor';
                return this.cmpToEdit.name + ' Editor';
            }
        },
        editorIcon() {
            if (this.cmpToEdit.name === 'iframe') return 'fab fa-youtube'
            if (this.cmpToEdit.name === 'google-map') return 'fas fa-map-marked-alt'
        }
    },
    methods: {
        getEditorsName() {
            if (this.cmpToEdit) {
                const { name } = this.cmpToEdit;
                if (name === 'section' || name === 'div' || name === 'img') this.currEditor = 'section';
                else if (name === 'iframe' || name === 'google-map') this.currEditor = 'video';
                else this.currEditor = 'text';
            }
        },
        emitUploadImg(ev) {
            this.$emit('uploading', ev);
        },
        emitChangedVid(url) {
            this.$emit('vidChanged', url);
        },
        emitChangedZoom(zoomValue){
            this.$emit('mapZoomChanged', zoomValue);
        },
    },
    updated() {
        this.getEditorsName();
    },
    created() {
        this.getEditorsName();
    },
    components: {
        textEditor,
        sectionEditor,
        videoEditor
    }
};
</script>