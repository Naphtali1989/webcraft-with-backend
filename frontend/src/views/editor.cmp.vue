<template>
    <section class="editor-container flex column" :class="hideEditor">
        <editor-dashboard
            :samples="samples"
            :cmpToEdit="currCmpToEdit"
            @pickedSample="pickSample"
            @updated="updateCmpToShow"
            @switched="emptyCmpToEdit"
        >
            <slot>
                <button @click="toggleEditor" class="toggle-dashboard">
                    Toggle Me
                </button>
            </slot>
        </editor-dashboard>
        <section class="flex column">
            <user-controls @saveWap="saveWap" />
            <editor-workspace
                v-if="currWap"
                @droppedSample="pickSample"
                :cmps="currWap.cmps"
                @clicked="setCmpToEdit"
                @updatedTxt="updateTxt"
                @copy="copySection"
                @delete="deleteSection"
                @moveSection="moveSection"
                @droppedSection="dropSection"
            />
        </section>
    </section>
</template>

<script>
import editorDashboard from '@/cmps/editor/editor-dashboard.cmp.vue';
import editorWorkspace from '@/cmps/editor/editor-workspace.cmp.vue';
import userControls from '@/cmps/editor/user-controls.cmp.vue';
import { utilService } from "@/services/util.service";


export default {
    name: "editor",
    data() {
        return {
            currWap: null,
            currCmpToEdit: null,
            isEditorShow: true,
        };
    },
    computed: {
        hideEditor() {
            return { 'hide-editor': !this.isEditorShow };
        },
        samples() {
            return this.$store.getters.sampleList;
        },
    },
    components: {
        editorDashboard,
        editorWorkspace,
        userControls
    },
    methods: {
        async saveWap() {
            this.currWap = await this.$store.dispatch({
                type: 'saveWap',
                wap: this.currWap
            })
        },
        findByIdRecursive(nodes, _id) {
            for (let i = 0; i < nodes.length; i++) {
                const child = nodes[i];
                if (child._id === _id) {
                    return child;
                } else {
                    if (child.children) {
                        const found = this.findByIdRecursive(child.children, _id);
                        if (found) {
                            return found;
                        }
                    }
                }
            }
        },
        replaceIds(node) {
            node._id = utilService.makeId();
            if (node.children) {
                node.children.forEach((child) => {
                    this.replaceIds(child);
                });
            }
        },
        setCmpToEdit(_id) {
            var cmpToEdit = this.findByIdRecursive(this.currWap.cmps, _id);
            this.currCmpToEdit = cmpToEdit;
        },
        updateCmpToShow(updatedCmp) {
            this.currCmpToEdit = updatedCmp;
        },
        updateTxt(txtValue) {
            this.currCmpToEdit.txt = txtValue;
        },
        toggleEditor() {
            this.isEditorShow = !this.isEditorShow;
        },
        copySection(_id) {
            const section = this.currWap.cmps.find((cmp) => cmp._id === _id);
            const cmp = JSON.parse(JSON.stringify(section));
            this.replaceIds(cmp);
            const idx = this.currWap.cmps.findIndex((cmp) => cmp._id === _id);
            this.currWap.cmps.splice(idx, 0, cmp);
        },
        dropSection(dragResult) {
            this.currWap.cmps = utilService.applyDrag(this.currWap.cmps, dragResult);
        },
        deleteSection(_id) {
            const idx = this.currWap.cmps.findIndex((cmp) => cmp._id === _id);
            this.currWap.cmps.splice(idx, 1);
        },
        moveSection(_id, diff) {
            const section = this.currWap.cmps.find((cmp) => cmp._id === _id);
            const idx = this.currWap.cmps.findIndex((cmp) => cmp._id === _id);
            if (idx === 0 && diff === -1) return;
            this.currWap.cmps.splice(idx, 1);
            this.currWap.cmps.splice(idx + diff, 0, section);
        },
        emptyCmpToEdit() {
            this.currCmpToEdit = null;
        },
        async pickSample(_id, idx) {
            const res = await this.$store.dispatch({
                type: 'pickedSample',
                _id,
            });
            let sample = JSON.parse(JSON.stringify(res));
            //replace the ids of sample in order to differ from section to section
            this.replaceIds(sample);
            const dragResult = {
                payload: sample,
                addedIndex: idx,
                removedIndex: null,
            };
            this.dropSection(dragResult);
        },
    },
    async created() {
        //load sample for type list
        await this.$store.dispatch({ type: 'loadSamples' });
        const _id = this.$route.params.id;
        if (_id) {
            const wap = await this.$store.dispatch({ type: 'loadWap', _id })
            this.currWap = wap;
        }
        else {
            this.currWap = { name: '', cmps: [] }
        }
    }
}
</script>
