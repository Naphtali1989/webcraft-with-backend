<template>

    <GmapMap :center="getCoords" :zoom="getZoom" map-type-id="terrain">
        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center = m.position" />
    </GmapMap>
</template>

<script>
export default {
    name: 'google-map',
    props: {
        info: Object,
    },
    data() {
        return {
            markers: [
                { position: { lat: 32.088028,lng: 34.803222 } },
            ],

        }
    },
    methods: {
    },
    computed: {
        getCoords() {
            return {
                lat: this.info.position.lat,
                lng: this.info.position.lng,
            }
        },
        getZoom() {
            return this.info.zoom;
        }
    },

}
</script>

<style>
</style>