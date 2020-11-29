<template>
    <section class="type-list flex align-center column">
        <h1>Pick an element</h1>
        <div class="element-picker-container" v-if="!selectedType">
            <button v-for="type in types" :key="type" @click="pickType(type)">
                {{ type }}
            </button>
        </div>
        <div v-if="selectedType">
            <span><i class="fas fa-arrow-left" @click="selectedType = ''"></i></span>
            <sample-list @pickedSample="emitPickSample" :samples="filterdSamples" />
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
            types: ['header','cards','footer','text','form','gallery','map','video'],
            selectedType: ''
        }
    },
    methods: {
        pickType(type) {
            this.selectedType=type
        },
        emitPickSample(id) {
            this.$emit('pickedSample',id)
        }
    },
    computed: {
        currPicker() {
            return this.selectedElem;
        },
        filterdSamples() {
            return this.samples.filter(sample => sample.type===this.selectedType)
        }
    },
    components: {
        sampleList
    }
}
</script>

<style lang="scss">
.type-list {
    margin-block-start: 1rem;
    margin-block-end: 1rem;

    h1 {
        padding: 0.5rem;
        font-size: 20px;
    }
}
.element-picker-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 100px);
    justify-content: center;
    button {
        font-family: carme;
        padding: 0.5rem 1rem;
        background: transparent;
        border: 0;
        outline: 0;
        text-transform: uppercase;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.26);
        background-color: hsla(0, 0%, 100%, 0.67);
        text-align: center;
        transition: 0.3s ease;
        &.selected {
            background: red;
        }
        &:hover {
            transform: scale(1.1);
        }
    }
}

.fa-arrow-left {
    font-size: 30px;
    padding: 0.8rem;
    cursor: pointer;
    transition: transform 0.4s ease;
}
.fa-arrow-left:hover {
    transform: scale(1.1);
}
</style>