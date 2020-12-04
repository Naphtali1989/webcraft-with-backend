<template>
    <section
        class="editor-container flex column"
        :class="isEditorShown"
    >
        <editor-dashboard
            v-if="currWap"
            :wapTree="wapTree"
            :samples="samples"
            :cmpToEdit="currCmpToEdit"
            @switchedTab="emptyCmpToEdit"
            @vidChanged="setChangedVid"
            @mapZoomChanged="emitChangedZoom"
            @saveWap="saveWap"
            @focusedCmp="setCmpToEdit"
            @copiedCmp="copyCmp"
            @deletedCmp="deleteCmp"
            @movedCmp="moveCmp"
            @openPublishModal="publishWebsite"
            @saveSample="saveSample"
        >
            <toggle-editor
                slot="toggle-editor-btn"
                class="btn toggle-dashboard"
                :isEditorShow="this.isEditorShow"
                @toggled="toggleEditor"
            ></toggle-editor>
        </editor-dashboard>

        <editor-workspace
            v-if="!isLoading && currWap"
            :cmps="currWap.cmps"
            @focusedCmp="setCmpToEdit"
            @updatedTxt="updateTxt"
            @copy="copySection"
            @moveSection="moveSection"
            @droppedSample="dropSample"
            @droppedSection="dropSection"
            @delete="deleteSection"
        />
        <loader v-else />
        <publish-modal
            v-if="showPublishModal"
            @closePublishModal="togglePublishModal"
            :currWebsiteLink="currWebsiteLink"
        />
    </section>
</template>

<script>
import editorDashboard from '@/cmps/editor/editor-dashboard.cmp.vue';
import editorWorkspace from '@/cmps/editor/editor-workspace.cmp.vue';
import toggleEditor from '@/cmps/custum-cmps/toggle-editor.cmp.vue';
import { editorService } from '@/services/editor.service';
import { utilService } from '@/services/util.service';
import { wapService } from '@/services/wap.service';
import loader from '@/cmps/custum-cmps/loader.cmp.vue';
import publishModal from '@/cmps/wap/publish-modal.cmp.vue';
import PublishModalCmp from '../cmps/wap/publish-modal.cmp.vue';
import { eventBus } from '@/services/event-bus.service.js'

export default {
    name: 'editor',
    data() {
        return {
            currWap: null,
            currCmpToEdit: null,
            isEditorShow: true,
            showPublishModal: false,
            currWebsiteLink: null
        };
    },
    computed: {
        isEditorShown() {
            return { 'hide-editor': !this.isEditorShow };
        },
        samples() {
            return this.$store.getters.sampleList;
        },
        wapTree() {
            const tree=this.getCurrWapTree();
            return tree;
        },
        isLoading() {
            return this.$store.getters.isLoading;
        }
    },

    methods: {
        togglePublishModal() {
            this.showPublishModal=!this.showPublishModal;
        },
        async publishWebsite() {
            const wap=await this.saveWap();
            const link=`https://webcraft-ca.herokuapp.com/#/wap/${this.currWap._id}`
            this.currWebsiteLink=link;
            this.togglePublishModal()
        },
        copyCmp(_id) {
            const parent=editorService.findParentNode(this.currWap,_id)
            this.copyCmpInsideParent(parent,_id)
        },
        deleteCmp(_id) {
            const parent=editorService.findParentNode(this.currWap,_id)
            this.deleteCmpInsideParent(parent,_id)
        },
        moveCmp(_id,diff) {
            const parent=editorService.findParentNode(this.currWap,_id)
            this.moveCmpInsideParent(parent,_id,diff)
        },
        deleteCmpInsideParent(parentEl,_id) {
            const children=parentEl.cmps||parentEl.children;
            const idx=children.findIndex(cmp => cmp._id===_id);
            children.splice(idx,1);
        },
        moveCmpInsideParent(parentEl,_id,diff) {
            // Find the element index and replace its position according to the difference
            const children=parentEl.cmps||parentEl.children;
            const idx=children.findIndex(cmp => cmp._id===_id);
            if(idx===0&&diff===-1) return;
            const section=children.splice(idx,1);
            children.splice(idx+diff,0,section[0]);
        },
        copyCmpInsideParent(parentEl,_id) {
            const children=parentEl.cmps||parentEl.children;
            const idx=children.findIndex(child => child._id===_id);
            const el=children.find(child => child._id===_id);
            const elCopy=JSON.parse(JSON.stringify(el));
            editorService.replaceIds(elCopy);
            children.splice(idx,0,elCopy);
        },
        setChangedVid(url) {
            if(!this.currCmpToEdit) return
            this.currCmpToEdit.vidUrl=url;
        },
        emitChangedZoom(zoomValue) {
            if(!this.currCmpToEdit) return
            this.currCmpToEdit.info.zoom=zoomValue;
        },
        getCurrWapTree() {
            const currTree=this.currWap.cmps.map(cmp => {
                return editorService.makeTree(cmp);
            });
            return currTree;
        },
        toggleEditor() {
            this.isEditorShow=!this.isEditorShow;
        },
        setCmpToEdit(_id) {
            var cmpToEdit=editorService.findByIdRecursive(this.currWap.cmps,_id);
            this.currCmpToEdit=cmpToEdit;
        },
        emptyCmpToEdit() {
            this.currCmpToEdit=null;
        },
        updateTxt(txtValue) {
            this.currCmpToEdit.txt=txtValue;
        },
        deleteSection(_id) {
            const idx=this.currWap.cmps.findIndex(cmp => cmp._id===_id);
            this.currWap.cmps.splice(idx,1);
        },
        copySection(_id) {
            const idx=this.currWap.cmps.findIndex(cmp => cmp._id===_id);
            const section=this.currWap.cmps.find(cmp => cmp._id===_id);
            const sectionCopy=JSON.parse(JSON.stringify(section));
            editorService.replaceIds(sectionCopy);
            this.currWap.cmps.splice(idx,0,sectionCopy);
        },
        dropSection(dragResult) {
            // dragResult holds the indexes of the current position of the section
            // and the new position for it to drop to, and the section object itself
            this.currWap.cmps=utilService.applyDrag(this.currWap.cmps,dragResult);
        },
        moveSection(_id,diff) {
            // Find the section index and replace its position according to the difference
            const idx=this.currWap.cmps.findIndex(cmp => cmp._id===_id);
            if(idx===0&&diff===-1) return;
            const section=this.currWap.cmps.splice(idx,1);
            this.currWap.cmps.splice(idx+diff,0,section[0]);
        },
        async saveWap() {
            this.currWap=await this.$store.dispatch({
                type: 'saveWap',
                wap: this.currWap
            });
            eventBus.$emit('show-msg',{ txt: `Your website has been saved!`,type: 'success' })
        },
        async dropSample(dragResult) {
            // Getting the sample from the store to copy
            const sampleToCopy=await this.$store.dispatch({
                type: 'pickedSample',
                _id: dragResult.payload._id,
            });
            let sampleCopy=JSON.parse(JSON.stringify(sampleToCopy));
            editorService.replaceIds(sampleCopy);
            // Re-assign the payload with the copy of the cmp info
            dragResult.payload=sampleCopy;
            // Drop the section in the correct drop zone
            this.dropSection(dragResult);
        },
        async saveSample() {
            if(!this.currCmpToEdit) return console.log('Idan And Matan, stop saving!')
            this.sample=await this.$store.dispatch({
                type: 'saveSample',
                sample: this.currWap
            });
        },
    },
    async created() {
        //load samples for the sample list
        await this.$store.dispatch({ type: 'loadSamples' });
        const _id=this.$route.params.id;
        if(_id) {
            const wap=await this.$store.dispatch({
                type: 'loadWap',
                _id
            });
            this.currWap=wap;
        }
        else {
            this.currWap={
                name: '',
                cmps: [
                ]
            }
        }
    },
    components: {
        editorDashboard,
        editorWorkspace,
        toggleEditor,
        loader,
        publishModal
    },
};
</script>
