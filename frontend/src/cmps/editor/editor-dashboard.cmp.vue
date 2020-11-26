<template>
    <section class="editor-dashboard">
        <slot></slot>
        <section class="editor-nav flex">
            <div class="tab-container">
                <button v-for="tab in tabs" :key="tab" @click="toggleTabs(tab)" :class="{ selected: currTab === tab }" class="tab-item">
                    {{ tab }}
                </button>
            </div>
            <!-- clicking a button will highlight it  -->
        </section>
        <section class="editor-body">
            <!-- The relevant editing component will go here -->
            <component :is="currDashboard" :cmpToEdit="cmpToEdit" @updated="emitUpdate" @uploading="emitUploadImg" />
        </section>
    </section>
</template>

<script>
import editorsContainer from '@/cmps/editor/editors-container.cmp.vue';
import typeList from '@/cmps/editor/type-list.cmp.vue';

export default {
    name: 'editor-dashboard',
    props: {
        cmpToEdit: {
            type: Object
        },
        // startEdit: {
        //     type: String
        // }
    },
    data() {
        return {
            currTab: 'add',
            tabs: ['add','edit']
        }
    },
    methods: {
        toggleTabs(tab) {
            console.log('tab:',tab)
            this.currTab=tab;
        },
        emitUploadImg(ev) {
            console.log('in the dashboard',ev)
            this.$emit('uploading',ev)
        },
        emitUpdate(updatedCmp) {
            this.$emit('updated',updatedCmp);
        }
    },
    computed: {
        selectedTab(tabName) {
            console.log('tabname:',tabName);
            return { selected: this.currTab===tabName };
        },
        currDashboard() {
            if(this.currTab==='edit') return 'editors-container';
            return 'type-list';
        }
    },
    // updated() {
    //     if (this.cmpToEdit && this.currTab==='add') this.currTab = 'edit';
    //     else if (this.cmpToEdit) this.currTab = 'add'
    // },
    components: {
        typeList,
        editorsContainer
    }
}
</script>
<style lang="scss">
.tab-container {
    display: flex;
    width: 100%;
    button {
        font-family: monospace;
        width: 50%;
        padding: 0.5rem 1rem;
        background: transparent;
        border: 0;
        outline: 0;
        text-transform: uppercase;
        padding: 1rem;

        &.selected {
            background: red;
        }
    }
}
.nav-item {
    margin-block-start: 10px;
}
</style>