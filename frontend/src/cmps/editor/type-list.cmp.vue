<template>
    <section class="type-list">
        <h1>This is add mode</h1>
        <div class="element-picker-container" v-if="!selectedType">
            <button v-for="type in types" :key="type" @click="togglePicker(type)">
                {{type}}
            </button>
        </div>
        <div v-if="selectedType">
            <span ><i class="fas fa-arrow-left" @click="selectedType = ''"></i></span>
            <sample-list :samples="samples" />
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
        togglePicker(elem) {
            console.log('picked:',elem);
            this.selectedType=elem+'-picker';
        }
    },
    computed: {
        currPicker() {
            return this.selectedElem;
        }
    },
    components: {
        sampleList
    }
}
</script>

<style lang="scss">
.element-picker-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 100px);
    justify-content: center;
    button {
        font-family: cursive;
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
</style>