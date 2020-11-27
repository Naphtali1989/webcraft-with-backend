<template>
    <section class="editor-dashboard">
        <section class="editor-nav flex">
            <div class="tab-container">
                <button v-for="tab in tabs" :key="tab" @click="toggleTabs(tab)" :class="{ selected: currTab === tab }" class="tab-item">
                    {{ tab }}
                </button>
            </div>
        </section>
        <section class="editor-body">
            <component :is="currDashboard" :samples="samples" :cmpToEdit="cmpToEdit" @pickedSample="emitPickSample" @updated="emitUpdate" />
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
        samples: {
            type: Array
        }
    },
    data() {
        return {
            currTab: 'add',
            tabs: ['add','edit'],

        }
    },
    methods: {
        toggleTabs(tab) {
            this.currTab=tab;
            if(this.currTab==='add') {
                this.$emit('switched')
            }

        },
        emitUpdate(updatedCmp) {
            this.$emit('updated',updatedCmp);
        },
        emitPickSample(id) {
            this.$emit('pickedSample',id)
        }
    },
    computed: {
        selectedTab(tabName) {
            return { selected: this.currTab===tabName };
        },
        currDashboard() {
            if(this.currTab==='edit') return 'editors-container';
            return 'type-list';
        }

    },
    updated() {
        if(this.cmpToEdit) this.currTab='edit';
    },
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
            background: #2e4ead;
            color: white;
            border-radius: 5px;
        }
    }
}
.nav-item {
    margin-block-start: 10px;
}
</style>