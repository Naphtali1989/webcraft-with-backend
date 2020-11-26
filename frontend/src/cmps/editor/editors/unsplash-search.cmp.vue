<template>
    <section class="unsplash-search">
        <form @submit.prevent="searchPhotos">
            <input type="text" placeholder="Search photo..." v-model="term" />
            <button>Submit</button>
        </form>
        <div class="unsplash-imgs-container grid">
            <div
                class="unsplash-img-card"
                v-for="(photo, idx) in photos"
                :key="idx"
            >
                <img class="unsplash-img" :src="photo.thumb" />
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'unsplash-search',
    data() {
        return {
            term: '',
            photos: []
        }
    },
    methods: {
        async searchPhotos() {
            const apiKey = 'DL-fOJKfzUbQ2irbF2Oleeza3GuX2LyJ-mVPCUJsJc8';
            const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${this.term}&client_id=${apiKey}`)
            const data = await res.json()
            console.log('data from api:', data);
            const photos = this.getUrls(data.results);
            this.photos = photos;
        },
        getUrls(results) {
            const res = results.map(result => result.urls)
            console.log('res:', res);
            return res;
        }
    },
    components: {
    }
}
</script>

<style scoped lang="scss">
</style>