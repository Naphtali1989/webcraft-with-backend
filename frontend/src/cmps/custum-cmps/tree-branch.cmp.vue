<template>
    <ul class="tree-branch">
        <li class="tree-branch-name" @focused="onFocus" @click.stop="toggleAccordionItem(!isItemOpen)">
            <h3>
                {{ cmp.name }}
            </h3>
            <!-- <div class="accordion-info" v-if="isItemOpen">
                <slot name="branch-slot" /> -->
            <button class="btn branch-btn" @click.stop.prevent="onFocus(cmp._id)">
                <!-- show -->
            </button>
            <template v-if="cmp.children && isItemOpen">
                <tree-branch slot="branch-slot" v-for="child in cmp.children" :key="child._id" :cmp="child" @focused="onFocus" />
            </template>
            <!-- </div> -->
        </li>
    </ul>
</template>

<script>
export default {
    name: 'tree-branch',
    props: {
        cmp: {
            type: Object
        }
    },
    data() {
        return {
            items: [],
            open: null,
            isItemOpen: false
        }
    },
    methods: {
        onFocus(_id) {
            this.$emit('focused',_id)
        },
        registerItem(item) {
            this.items.push(item)
            if(this.open===null) {
                item.toggleAccordionItem(true)
            }
        },
        unregisterItem(item) {
            if(this.open===item) {
                this.open=null
            }
            const idx=this.items.findIndex(i => i._uid===item._uid)
            this.items.splice(idx,1)
        },
        setItemOpen(item,isOpen) {
            for(let i=0;i<this.items.length;i++) {
                const currItem=this.items[i]
                if(isOpen===true&&currItem._uid!==item._uid) {
                    currItem.toggleAccordionItem(false)
                }
            }
            if(isOpen===false) {
                this.open=null;
            } else {
                this.open=item;
            }
        },
        toggleAccordionItem(value) {
            if(value!==this.isItemOpen) {
                this.isItemOpen=value
                this.$parent.setItemOpen(this,this.isItemOpen)
            }
        }
    },
    beforeMount() {
        this.$parent.registerItem(this)
    },
    beforeDestroy() {
        this.$parent.unregisterItem(this)
    }

}
</script>

<style>
</style>