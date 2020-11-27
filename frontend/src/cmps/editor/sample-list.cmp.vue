<template>
    <div class="sample-list ">
        <Container
            behaviour="copy"
            group-name="editor"
            :get-child-payload="getChildPayload"
        >
            <Draggable v-for="sample in samples" :key="sample.id">
                    <div class="sample-preview">
                        <h3 class="sample-title">{{ sample.title }}</h3>
                        <img :src="sample.thumbnail"/>
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
            console.log('Drop results!', dropResult)
            this.$emit('droppedSample', dropResult)
        },
        getChildPayload(index) {
            console.log(index)
            return this.samples[index];
        },
    },
    components: {
        Container,
        Draggable
    }

}

</script>

<style>
</style>