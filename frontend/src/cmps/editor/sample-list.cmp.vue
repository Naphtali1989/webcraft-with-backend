<template>
    <div class="sample-list flex column align-center">
        <Container behaviour="copy" group-name="editor" :get-child-payload="getChildPayload">
            <Draggable v-for="sample in samples" :key="sample.id">
                <div class="sample">
                    <!-- <div v-for="sample in samples" class="sample" :key="sample.id"> -->
                    <!-- <img :src="sample.thumbnail" alt="" /> -->
                    <!-- <span @click="emitPickSample(sample.id)">{{ -->
                    <span>{{
                        sample.type
                    }}</span>
                </div>
            </Draggable>
        </Container>
    </div>
</template>

<script>
import { Container,Draggable } from 'vue-smooth-dnd';
export default {
    name: 'sample-list',
    props: {
        samples: {
            type: Array
        },
    },
    methods: {
        // emitPickSample({ payload }) {
        //     console.log('what do we getting?',id)
        //     this.$emit('pickedSample',payload.id)
        // },
        onDrop(dropResult) {
            console.log('Drop results!',dropResult)
            this.$emit('droppedSample',dropResult)
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