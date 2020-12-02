<template>
    <section class="video-editor flex column align-center">
        <div class="video-editor flex align-center column" v-if="cmpToEdit.name === 'iframe'">
            <p>Please enter a youtube link</p>
            <form @submit.prevent="setVidUrl">
                <input type="text" v-model="vidUrl" />
                <button class="sumbit-btn">Change</button>
                <h3 class="warning-txt" v-if="isInvalid">
                    This link is invalid, please try another one.
                </h3>
            </form>
            <iframe v-if="cmpToEdit.vidUrl" width="270" height="270" :src="convertedUrl" frameBorder="0"></iframe>
            <p class="normal-txt">Or search on YouTube</p>
            <video-search @setVideo="setVideo" />
        </div>
        <div class="map-editor flex align-center column" v-if="cmpToEdit.name === 'google-map'">
            <h1>Map fucking editor!</h1>
            <!-- <form @submit.prevent="">
                <p>Set Zoom</p>

       
                <input type="text" placeholder="Search Location...">

            </form> -->
        </div>
    </section>
</template>

<script>

import videoSearch from '@/cmps/editor/editors/video-search.cmp.vue';
import myRange from '@/cmps/custum-cmps/my-range.cmp.vue';
import inputNumber from '@/cmps/custum-cmps/input-number.cmp.vue';
export default {
    name: 'video-editor',
    data() {
        return {
            vidUrl: null,
            isInvalid: false,
            zoom: 16
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
        setMapZoom(zoomNum) {
            console.log('zoomNum:',zoomNum);
            this.$emit('setZoom',zoomNum)
        },
        setVideo(id) {
            const url=`https://www.youtube.com/watch?v=${id}`;
            // this.cmpToEdit.vidUrl=vidUrl
            this.vidUrl=url
            this.setVidUrl()
            // this.$emit('vidChanged',vidUrl)
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
    components: {
        videoSearch,
        myRange,
        inputNumber
    },
    updated(vidUrl) {
        console.log('maybe?',this.cmpToEdit.vidUrl);

    },
    created() {
        this.vidUrl=this.cmpToEdit.vidUrl;
        //*TODO > START FROM HERE*/
        // if(this.cmpToEdit.vidUrl) this.vidUrl=vidUrl
        // if(this.cmpToEdit.info) this.cmpToEdit.zoom=this.info.zoom
    },
};
</script>

