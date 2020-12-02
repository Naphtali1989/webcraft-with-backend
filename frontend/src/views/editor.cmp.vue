<template>
    <section class="editor-container flex column" :class="isEditorShown">
        <editor-dashboard
            v-if="currWap"
            :wapTree="wapTree"
            :samples="samples"
            :cmpToEdit="currCmpToEdit"
            @switchedTab="emptyCmpToEdit"
            @focusedCmp="setCmpToEdit"
            @vidChanged="setChangedVid"
            @mapZoomChanged="emitChangedZoom"
            @saveWap="saveWap"
        >
            <toggle-editor
                slot="toggle-editor-btn"
                class="btn toggle-dashboard"
                :isEditorShow="this.isEditorShow"
                @toggled="toggleEditor"
            ></toggle-editor>
        </editor-dashboard>
        <section class="flex column">
            <!-- <user-controls/> -->
            <editor-workspace
                v-if="currWap"
                :cmps="currWap.cmps"
                @focusedCmp="setCmpToEdit"
                @updatedTxt="updateTxt"
                @copy="copySection"
                @moveSection="moveSection"
                @droppedSample="dropSample"
                @droppedSection="dropSection"
                @delete="deleteSection"   
            />
        </section>
    </section>
</template>

<script>
import editorDashboard from '@/cmps/editor/editor-dashboard.cmp.vue';
import editorWorkspace from '@/cmps/editor/editor-workspace.cmp.vue';
import userControls from '@/cmps/editor/user-controls.cmp.vue';
import toggleEditor from '@/cmps/custum-cmps/toggle-editor.cmp.vue';
import { utilService } from '@/services/util.service';
import { wapService } from '@/services/util.service';


export default {
    name: 'editor',
    data() {
        return {
            currWap: null,
            currCmpToEdit: null,
            isEditorShow: true,
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
            const tree = this.getCurrWapTree();
            return tree;
        }
    },
    components: {
        editorDashboard,
        editorWorkspace,
        userControls,
        toggleEditor
    },
    methods: {
        setChangedVid(url) {
            console.log('url:', url);
            if (!this.currCmpToEdit) return
            this.currCmpToEdit.vidUrl = url;
        },
        
        emitChangedZoom(zoomValue){
            if (!this.currCmpToEdit) return
            this.currCmpToEdit.info.zoom = zoomValue;
        },
        getCurrWapTree() {
            const currTree = this.currWap.cmps.map(cmp => {
                return this.makeTree(cmp);
            });
            return currTree;
        },
        toggleEditor() {
            this.isEditorShow = !this.isEditorShow;
        },
        setCmpToEdit(_id) {
            var cmpToEdit = this.findByIdRecursive(this.currWap.cmps, _id);
            this.currCmpToEdit = cmpToEdit;
        },
        emptyCmpToEdit() {
            this.currCmpToEdit = null;
        },
        updateTxt(txtValue) {
            this.currCmpToEdit.txt = txtValue;
        },
        deleteSection(_id) {
            const idx = this.currWap.cmps.findIndex(cmp => cmp._id === _id);
            this.currWap.cmps.splice(idx, 1);
        },
        copySection(_id) {
            const idx = this.currWap.cmps.findIndex(cmp => cmp._id === _id);
            const section = this.currWap.cmps.find(cmp => cmp._id === _id);
            const sectionCopy = JSON.parse(JSON.stringify(section));
            this.replaceIds(sectionCopy);
            this.currWap.cmps.splice(idx, 0, sectionCopy);
        },
        dropSection(dragResult) {
            // dragResult holds the indexes of the current position of the section
            // and the new position for it to drop to, and the section object itself
            this.currWap.cmps = utilService.applyDrag(this.currWap.cmps, dragResult);
        },
        moveSection(_id, diff) {
            // Find the section index and replace its position according to the difference
            const idx = this.currWap.cmps.findIndex(cmp => cmp._id === _id);
            if (idx === 0 && diff === -1) return;
            const section = this.currWap.cmps.splice(idx, 1);
            this.currWap.cmps.splice(idx + diff, 0, section[0]);
        },
        findByIdRecursive(nodes, _id) {
            //Find the id of an element even if it is a child of another element
            for (let i = 0; i < nodes.length; i++) {
                const child = nodes[i];
                if (child._id === _id) {
                    return child;
                } else {
                    if (child.children) {
                        const foundElement = this.findByIdRecursive(child.children, _id);
                        if (foundElement) {
                            return foundElement;
                        }
                    }
                }
            }
        },
        replaceIds(node) {
            //replace the ids of sample in order to differ from section to section
            node._id = utilService.makeId();
            if (node.children) {
                node.children.forEach(child => {
                    this.replaceIds(child);
                });
            }
        },
        makeTree(node) {
            const parent = {
                name: node.name,
                _id: node._id,
                class: node.class,
                children: []
            };
            if (node.children) {
                node.children.forEach(child => {
                    parent.children.push(this.makeTree(child));
                });
            }
            return parent;
        },
        async saveWap() {
            this.currWap = await this.$store.dispatch({
                type: 'saveWap',
                wap: this.currWap
            });
        },
        async dropSample(dragResult) {
            // Getting the sample from the store to copy
            const sampleToCopy = await this.$store.dispatch({
                type: 'pickedSample',
                _id: dragResult.payload._id,
            });
            let sampleCopy = JSON.parse(JSON.stringify(sampleToCopy));
            this.replaceIds(sampleCopy);
            // Re-assign the payload with the copy of the cmp info
            dragResult.payload = sampleCopy;
            // Drop the section in the correct drop zone
            this.dropSection(dragResult);
        },
    },
    async created() {
        //load samples for the sample list
        await this.$store.dispatch({ type: 'loadSamples' });
        const _id = this.$route.params.id;
        if (_id) {
            const wap = await this.$store.dispatch({
                type: 'loadWap',
                _id
            });
            this.currWap = wap;
        }
        else {
            this.currWap = {
                name: '',
                cmps: [
                ]
            }
        }
    }
};
</script>
