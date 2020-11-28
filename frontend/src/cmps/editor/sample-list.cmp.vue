<template>
    <div class="sample-list">
        <Container
            behaviour="copy"
            group-name="editor"
            :get-child-payload="getChildPayload"
            :get-ghost-parent="getGhostParent"
        >
            <Draggable v-for="sample in samples" :key="sample._id">
                <div class="sample-preview">
                    <h3 class="sample-title">{{ sample.title }}</h3>
                    <img :src="sample.thumbnail" />
                </div>
            </Draggable>
        </Container>
    </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd';
export default {
    name: 'sample-list',
    props: {
        samples: {
            type: Array
        },
    },
    methods: {
        onDrop(dropResult) {
            this.$emit('droppedSample', dropResult)
        },
        getChildPayload(index) {
            return this.samples[index];
        },
        getGhostParent() {

        }
    },
    components: {
        Container,
        Draggable
    }

}

</script>

