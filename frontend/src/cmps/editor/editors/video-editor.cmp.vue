<template>
    <section class="video-editor flex column align-center">
        <p>Please enter a youtube link</p>
        <form @submit.prevent="setVidUrl">
            <input type="text" v-model="vidUrl" />
            <button class="sumbit-btn">Change</button>
            <h3 class="warning-txt" v-if="isInvalid">
                This link is invalid, please try another one.
            </h3>
        </form>
        <iframe v-if="cmpToEdit.vidUrl" width="270" height="270" :src="convertedUrl" frameBorder="0"></iframe>
        <p>Or search on youtube</p>
        <form @submit.prevent="searchVideos">
            <input type="text" v-model.trim="term">
            <button>Search video!</button>
        </form>
    </section>
</template>

<script>
import { utilService } from '@/services/util.service';
export default {
    name: 'video-editor',
    data() {
        return {
            vidUrl: null,
            isInvalid: false,
            term: '',
            videos: []
        }
    },
    props: {
        cmpToEdit: Object
    },
    computed: {
        convertedUrl() {
            if(this.cmpToEdit.vidUrl.includes("?v=")) {
                const vidId=this.cmpToEdit.vidUrl.split("?v=")[1];
                return `https://www.youtube.com/embed/${vidId}`;
            }
            return this.cmpToEdit.vidUrl
        },
    },
    methods: {
        async searchVideos() {
            const videos=await utilService.videoSearch();
            console.log('videos from api:',videos);
            this.videos=videos;
            this.term=''
        },
        setVidUrl() {
            if(!this.matchYoutubeUrl(this.vidUrl)) returns
            this.isInvalid=false;
            this.$emit('vidChanged',this.vidUrl);
        },
        matchYoutubeUrl(url) {
            var p=/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            if(url.match(p)) {
                return url.match(p)[1];
            }
            this.isInvalid=true;
            if(timer) clearTimeout(timer);
            var timer=setTimeout(() => {
                this.isInvalid=false;
            },3000)
            return false;
        }
    },
    created() {
        this.vidUrl=this.cmpToEdit.vidUrl;
    },
};
</script>

