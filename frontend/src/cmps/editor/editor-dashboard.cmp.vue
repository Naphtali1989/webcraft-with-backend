<template>
    <section class="editor-dashboard">
        <section class="tab-container flex">
            <button
                v-for="tab in tabs"
                :key="tab"
                class="btn flex column align-center tab-btn"
                :class="{ selected: currTab === tab }"
                @click="toggleTabs(tab)"
            >
                {{ tab }}
            </button>
        </section>
        <slot name="toggle-editor-btn"></slot>
        <section class="dashboard-container">
            <component
                class="editor-body"
                :is="currDashboard"
                :samples="samples"
                :cmpToEdit="cmpToEdit"
                :wapTree="wapTree"
                @focused="emitFocusCmp"
                @copied="emitCopyCmp"
                @deleted="emitDeleteCmp"
                @moved="emitMoveCmp"
                @vidChanged="emitChangedVid"
                @mapZoomChanged="emitChangedZoom"
            >
            </component>
        </section>
        <user-controls @saveWap="emitSaveWap" @saveSample="emitSaveSample"/>
    </section>
</template>

<script>
import editorsContainer from '@/cmps/editor/editors-container.cmp.vue';
import typeList from '@/cmps/editor/type-list.cmp.vue';
import dataTree from '@/cmps/editor/data-tree.cmp.vue';
import userControls from '@/cmps/editor/user-controls.cmp.vue';

export default {
    name: 'editor-dashboard',
    props: {
        cmpToEdit: {
            type: Object
        },
        wapTree: {
            type: Array
        },
        samples: {
            type: Array
        }
    },
    data() {
        return {
            currTab: 'add',
            tabs: ['tree', 'add', 'edit'],
        }
    },
    methods: {
        emitDeleteCmp(_id) {
            this.$emit('deletedCmp', _id)
        },
        emitCopyCmp(_id) {
            this.$emit('copiedCmp', _id)
        },
        emitMoveCmp(_id) {
            this.$emit('movedCmp', _id)
        },
        toggleTabs(tab) {
            this.currTab = tab;
            if (this.currTab !== 'edit') {
                this.$emit('switchedTab');
            }
        },
        emitFocusCmp(_id) {
            this.$emit('focusedCmp', _id)
            setTimeout(() => {
                this.toggleTabs('edit')
            }, 500)
        },
        emitChangedVid(url) {
            this.$emit('vidChanged', url);
        },
        emitChangedZoom(zoomValue) {
            this.$emit('mapZoomChanged', zoomValue);
        },
        emitSaveWap() {
            this.$emit('saveWap')
        },
        emitSaveSample(){
            this.$emit('saveSample')
        }
    },
    computed: {
        currDashboard() {
            if (this.currTab === 'tree') return 'data-tree';
            if (this.currTab === 'edit') return 'editors-container';
            return 'type-list';
        },

    },
    updated() {
        if (this.cmpToEdit) this.currTab = 'edit';
    },
    components: {
        typeList,
        editorsContainer,
        dataTree,
        userControls
    }
}
</script>
