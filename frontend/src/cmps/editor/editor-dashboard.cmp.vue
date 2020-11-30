<template>
    <section class="editor-dashboard">
        <section class="tab-container flex">
            <button
                v-for="tab in tabs"
                :key="tab"
                class="btn tab-btn"
                :class="{ selected: currTab === tab }"
                @click="toggleTabs(tab)"
            >
                {{ tab }}
            </button>
        </section>
        <slot name="toggle-editor-btn"></slot>
        <component
            class="editor-body"
            :is="currDashboard"
            :samples="samples"
            :cmpToEdit="cmpToEdit"
            :wapTree="wapTree"
            @focused="emitFocusCmp"
        >
        </component>
    </section>
</template>

<script>
import editorsContainer from '@/cmps/editor/editors-container.cmp.vue';
import typeList from '@/cmps/editor/type-list.cmp.vue';
import dataTree from '@/cmps/editor/data-tree.cmp.vue';

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
            currTab: 'tree',
            tabs: ['tree', 'add', 'edit'],
        }
    },
    methods: {
        toggleTabs(tab) {
            this.currTab = tab;
            if (this.currTab !== 'edit') {
                this.$emit('switchedTab');
            }
        },
        emitFocusCmp(_id) {
            this.$emit('focusedCmp', _id)
            console.log('before time out:', _id)
            setTimeout(() => {
                this.toggleTabs('edit')
            }, 500)
        },
    },
    computed: {
        currDashboard() {
            if (this.currTab === 'tree') return 'data-tree';
            if (this.currTab === 'edit') return 'editors-container';
            return 'type-list';
        }
    },
    updated() {
        if (this.cmpToEdit) this.currTab = 'edit';
    },
    components: {
        typeList,
        editorsContainer,
        dataTree
    }
}
</script>
