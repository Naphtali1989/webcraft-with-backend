<template>
    <GmapMap
        :center="{ lat: 32.088028, lng: 34.803222 }"
        :zoom="15"
        map-type-id="terrain"
        @click.stop.prevent="doNothing"
        
    >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
        />
    </GmapMap>
</template>

<script>
export default {
    name:'google-map',
    props: {
        position: Object,
        lockIdx:Number
    },
    data() {
        return {
            markers: [
                { position: { lat: 32.088028, lng: 34.803222 } },

            ]
        }
    },
    methods:{
        doNothing(){
            console.log('Doing nothing!')
        }
    },
    computed:{
        
    }
  
}
</script>

<style>
</style>