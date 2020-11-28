<template>
    <section :class="emptyWorkspace" class="editor-workspace flex column">
        <Container
            class="dnd-container"
            drag-class="card-ghost"
            drop-class="card-ghost-drop"
            :drop-placeholder="dropPlaceholderOptions"
            :get-child-payload="getChildPayload"
            group-name="editor"
            @drop="onDrop"
        >
            <Draggable v-for="cmp in cmps" :key="cmp.id">
                <wap-worker
                    :cmp="cmp"
                    @clicked="emitUserChoice"
                    @updatedTxt="emitUpdateTxt"
                    @copy="emitCopy"
                    @delete="emitDelete"
                    @moveSection="emitMoveSection"
                >
                </wap-worker>
            </Draggable>
        </Container>
    </section>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd';
import wapWorker from '@/cmps/wap/wap-worker.cmp.vue';
export default {
    name: 'editor-workspace',
    props: {
        cmps: {
            type: Array
        }
    },
    data() {
        return {
            dropPlaceholderOptions: {
                className: "drop-preview",
                animationDuration: "80",
                showOnTop: false
            },
        }
    },
    components: {
        Container,
        Draggable,
        wapWorker,
    },
    methods: {
        onDrop(dropResult) {
            //if there is no removed index
            if (!dropResult.removedIndex && dropResult.removedIndex === null) {
                this.$emit('droppedSample', dropResult.payload.id, dropResult.addedIndex)
            } else {
                this.$emit('droppedSection', dropResult)
            }
        },
        getChildPayload(index) {
            return this.cmps[index];
        },
        emitUserChoice(id) {
            this.$emit('clicked', id);
        },
        emitUpdateTxt(txtValue) {
            this.$emit('updatedTxt', txtValue);
        },
        emitCopy(id) {
            this.$emit('copy', id)
        },
        emitDelete(id) {
            this.$emit('delete', id)
        },
        emitMoveSection(id, diff) {
            this.$emit('moveSection', id, diff)
        }
    },
    computed: {
        emptyWorkspace() {
            return { "empty-workspace": !this.cmps.length }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>