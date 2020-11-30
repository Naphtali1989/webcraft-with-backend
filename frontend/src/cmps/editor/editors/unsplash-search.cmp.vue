<template>
    <section class="unsplash-search">
        <form @submit.prevent="searchPhotos">
            <div class="form-container flex justify-center">
                <input
                    type="text"
                    placeholder="Search photo..."
                    v-model.trim="term"
                />
                <button class="btn btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </form>
        <div class="unsplash-imgs-container grid">
            <div
                class="unsplash-img-card"
                v-for="(photo, idx) in photos"
                :key="idx"
            >
                <img
                    class="unsplash-img"
                    :src="photo.thumb"
                    @click="onImgSelect(photo)"
                />
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
            const res = await fetch(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=${this.term}&client_id=${apiKey}`)
            const data = await res.json()
            const photos = this.getUrls(data.results);
            this.photos = photos;
            this.term = ''
        },
        getUrls(results) {
            const res = results.map(result => result.urls)
            return res;
        },
        onImgSelect(photo) {
            this.$emit('setImg', photo.regular)
        }
    },
    components: {
    }
}
</script>

<style scoped lang="scss">
</style>