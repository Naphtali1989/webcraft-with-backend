<template>
    <GmapMap
        :center="{ lat: 32.088028, lng: 34.803222 }"
        :zoom="17"
        map-type-id="terrain"
        
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
                { position: { lat: 31.7843, lng: 35.2149 } },
                { position: { lat: 45.5035, lng: -73.5685 } },
                { position: { lat: 35.6798, lng: 139.7369 } },
            ]
        }
    },
  
}
</script>

<style>
</style>