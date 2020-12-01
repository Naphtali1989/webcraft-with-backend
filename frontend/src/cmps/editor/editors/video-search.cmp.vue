<template>
    <section class="video-search">
        <form @submit.prevent="searchVideos">
            <input type="text" v-model.trim="term">
            <button>Search video!</button>
        </form>
    </section>
</template>

<script>
export default {
    name: 'video-search',
    data() {
        return {
            term: '',
            videos: []
        }
    },
    async searchVideos() {
        const videos=await utilService.videoSearch();
        console.log('videos from api:',videos);
        this.videos=videos;
        this.term='';
    },


}
</script>

<style>
</style>