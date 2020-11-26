<template>
    <div class="sample-list flex column align-center">
        <div v-for="sample in samples" class="sample" :key="sample.id">
            <!-- <img :src="sample.thumbnail" alt="" /> -->
            <span @click="emitPickSample(sample.id)">{{sample.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sample-list',
    props: {
        samples: {
            type: Array
        }
    },
    methods:{
        emitPickSample(id){
            this.$emit('pickedSample',id)
        }
    }
    
}

</script>

<style>
</style>