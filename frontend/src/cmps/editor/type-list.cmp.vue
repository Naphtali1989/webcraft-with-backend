<template>
    <section class="type-list flex column align-center ">
        <h1>Pick an element</h1>
        <div class="element-picker-container grid" v-if="!selectedType">
            <button v-for="type in types" :key="type" @click="pickType(type)">
                {{ type }}
            </button>
        </div>
        <div v-if="selectedType">
            <span
                ><i class="fas fa-arrow-left" @click="selectedType = ''"></i
            ></span>
            <sample-list
                @pickedSample="emitPickSample"
                :samples="filterdSamples"
            />
        </div>
    </section>
</template>
<script>

import sampleList from '@/cmps/editor/sample-list.cmp.vue';
export default {
    name: 'type-list',
    props: {
        samples: {
            type: Array
        }
    },
    data() {
        return {
            types: ['header', 'cards', 'footer', 'gallery', 'map', 'video'], //form , text removed for ui show
            selectedType: ''
        }
    },
    methods: {
        pickType(type) {
            this.selectedType = type
        },
        emitPickSample(id) {
            this.$emit('pickedSample', id)
        }
    },
    computed: {

        filterdSamples() {
            return this.samples.filter(sample => sample.type === this.selectedType)
        }
    },
    components: {
        sampleList
    }
}
</script>

