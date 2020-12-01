<template>
    <ul class="tree-branch">
        <li
            class="tree-branch-name"
            :id="'el-' + workerHoverClass"
            @focused="onFocus"
            @click.stop="toggleAccordionItem(!isItemOpen)"
        >
            <h3>
                {{ cmp.name }}
            </h3>
            <button
                class="btn branch-btn"
                @click.stop.prevent="onFocus(cmp._id)"
            ></button>
            <template v-if="cmp.children && isItemOpen">
                <transition-group name="open-branch" />
                <tree-branch
                    slot="branch-slot"
                    v-for="child in cmp.children"
                    :key="child._id"
                    :cmp="child"
                    @focused="onFocus"
                />
                <transition-group />
            </template>
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
            this.$emit('focused', _id)
        },
        registerItem(item) {
            this.items.push(item)
            if (this.open === null) {
                item.toggleAccordionItem(true)
            }
        },
        unregisterItem(item) {
            if (this.open === item) {
                this.open = null
            }
            const idx = this.items.findIndex(i => i._uid === item._uid)
            this.items.splice(idx, 1)
        },
        setItemOpen(item, isOpen) {
            for (let i = 0; i < this.items.length; i++) {
                const currItem = this.items[i]
                if (isOpen === true && currItem._uid !== item._uid) {
                    currItem.toggleAccordionItem(false)
                }
            }
            if (isOpen === false) {
                this.open = null;
            } else {
                this.open = item;
            }
        },
        toggleAccordionItem(value) {
            if (value !== this.isItemOpen) {
                this.isItemOpen = value
                this.$parent.setItemOpen(this, this.isItemOpen)
            }
        }
    },
    computed: {
        workerHoverClass() {
            return this.cmp._id
        }
    },
    beforeMount() {
        this.$parent.registerItem(this)
    },
    beforeDestroy() {
        this.$parent.unregisterItem(this)
        this.$el.removeEventListener("mouseover", () => {
            // do the same of above
        }, true);
        this.$el.removeEventListener("mouseleave", () => {
            // do the same of above
        }, true);

    },
    mounted() {
        const el = document.querySelectorAll(`#el-${this.cmp._id}`)
        this.$el.addEventListener('mouseover', (ev) => {
            ev.stopPropagation();
            // Branch element:
            el[0].style.outline = '1.5px dashed blue';
            // Workspace element:
            el[1].style.outline = '2.5px dashed blue';
            var timer = setTimeout(() => {
                 // Branch element:
                el[0].style.outline = null;
                // Workspace element:
                el[1].style.outline = null;
            }, 3000)
        })
        this.$el.addEventListener('mouseleave', (ev) => {
            ev.stopPropagation();
             // Branch element:
            el[0].style.outline = null;
            // Workspace element:
            el[1].style.outline = null;
        })
    },
}
</script>

