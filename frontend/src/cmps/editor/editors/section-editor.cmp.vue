<template>
    <section class="section-editor flex column align-center">
        <p class="editor-txt">Set Round Edges:</p>
        <my-range :options="{ initVal: 2, min: 0, max: 50 }" />
        <p class="editor-txt">Set Section Height:</p>
        <my-range :options="{ initVal:sectionHeight, min: 0, max: 900 }" @input="setSectionHeight" />
        <template v-if="cmpToEdit.name !== 'img'">
            <p class="editor-txt">Set A Background Color</p>
            <color-picker @changeColor="setColor" />
        </template>
        <div class="img-uploader">
            <div class="preview" v-if="cmpToEdit.imgUrl">
                <img :src="cmpToEdit.imgUrl" />
            </div>
            <p class="editor-txt">Or Add An Image As A Background</p>
            <label class="user-input input-file"><i class="fas fa-cloud-upload-alt"></i>
                <input class="hide" type="file" @change="emitUploadImg" />
            </label>
        </div>
        <unsplash-search @setImg="onSetImg" />
    </section>
</template>

<script>
import myRange from '@/cmps/custum-cmps/my-range.cmp.vue';
import colorPicker from '@/cmps/editor/color-picker.cmp.vue';
import unsplashSearch from '@/cmps/editor/editors/unsplash-search.cmp.vue';
import { uploadImg } from '@/services/upload.service'

export default {
    name: 'section-editor',
    props: {
        cmpToEdit: {
            type: Object
        }
    },
    methods: {
        async emitUploadImg(ev) {
            const res=await uploadImg(ev);
            this.cmpToEdit.style.background=`url(${res.url}) center / cover no-repeat`;
            this.cmpToEdit.imgUrl=res.url;
        },
        setColor(color) {
            this.cmpToEdit.style.background=color;
        },
        onSetImg(imgUrl) {
            this.cmpToEdit.imgUrl=imgUrl
            this.cmpToEdit.style.background=`url(${imgUrl}) center / cover no-repeat`;
        },
        setSectionHeight(height) {
            this.cmpToEdit.style.height=height+'px';
        }
    },
    computed: {
        sectionHeight() {
            const { height }=this.cmpToEdit.style;
            return parseInt(height,10);
        },
    },
    components: {
        myRange,
        colorPicker,
        unsplashSearch
    }
}
</script>

<style lang="scss" scoped>
.img-uploader {
    margin-block-start: 1rem;
}
.preview {
    margin-block-start: 1.5rem;
    width: 150px;
    height: 150px;
    border: 1px solid black;
    margin: 0 auto;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>