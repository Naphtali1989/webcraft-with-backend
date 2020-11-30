<template>
    <section class="section section-editor flex column align-center">
        <p class="editor-txt">Set Round Edges:</p>
        <my-range
            :options="{ initVal: sectionRadius, min: 0, max: 50 }"
            @input="setSectionRadius"
        />

        <template v-if="cmpToEdit.name !== 'img'">
            <p class="editor-txt">Set A Background Color</p>
            <color-picker @changeColor="setColor" />
        </template>
        <div class="img-uploader">
            <div
                v-if="showImgPreview"
                class="preview"
                :style="'background-color:' + cmpToEdit.style.background + ';'"
            >
                <img v-if="cmpToEdit.imgUrl"  :src="cmpToEdit.imgUrl" />
            </div>
            <p class="editor-txt">Or Add An Image As A Background</p>
            <label class="user-input input-file"
                ><i class="fas fa-cloud-upload-alt"></i>
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
import { uploadImg } from '@/services/upload.service';

export default {
    name: 'section-editor',
    props: {
        cmpToEdit: {
            type: Object
        }
    },
    methods: {
        async emitUploadImg(ev) {
            const res = await uploadImg(ev);
            this.cmpToEdit.style.background = `url(${res.url}) center / cover no-repeat`;
            this.cmpToEdit.imgUrl = res.url;
        },
        setColor(color) {
            if (this.cmpToEdit.imgUrl) this.cmpToEdit.imgUrl = null
            this.cmpToEdit.style.background = color;
        },
        onSetImg(imgUrl) {
            this.cmpToEdit.imgUrl = imgUrl
            this.cmpToEdit.style.background = `url(${imgUrl}) center / cover no-repeat`;
        },

        setSectionRadius(radius) {
            this.cmpToEdit.style.borderRadius = radius + 'px';
        }
    },
    computed: {
        sectionHeight() {
            const { height } = this.cmpToEdit.style;
            return parseInt(height, 10);
        },
        sectionRadius() {
            const { borderRadius } = this.cmpToEdit.style;
            return parseInt(borderRadius, 10)
        },
        showImgPreview() {
            return this.cmpToEdit.imgUrl || this.cmpToEdit.style.background !== 'transparent';
        }
    },
    components: {
        myRange,
        colorPicker,
        unsplashSearch
    }
};
</script>

<style lang="scss" scoped>
.img-uploader {
    margin-block-start: 1rem;
}
.preview {
    width: 150px;
    height: 150px;
    border: 1px solid black;
    margin: 1.5rem auto;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>