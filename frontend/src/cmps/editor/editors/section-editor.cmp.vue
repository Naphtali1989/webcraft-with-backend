<template>
    <section class="section-editor flex column align-center">
        <p class="editor-txt">Set Round Edges:</p>
        <my-range :options="{ initVal: 2, min: 0, max: 50 }" />
        <template v-if="cmpToEdit.type === 'section'">
            <p class="editor-txt">Set A Background Color</p>
            <color-picker @changeColor="setColor" />
        </template>

        <div class="img-uploader">
            <div class="preview">
                <img :src="cmpToEdit.imgUrl" v-show="cmpToEdit.imgUrl" />
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
            // this.$emit('updatedCmp', this.cmpToEdit)
            // console.log('cmp changed:',this.cmpToEdit.imgUrl);
        },
        setColor(color) {
            this.cmpToEdit.style.background=color;
        },
        onSetImg(imgUrl) {
            console.log('picked photo:',imgUrl);
            this.cmpToEdit.imgUrl=imgUrl
            this.cmpToEdit.style.background=`url(${imgUrl}) center / cover no-repeat`;
            console.log('cmp changed:',this.cmpToEdit.imgUrl);

        }
    },
    watch: {
        'this.cmpToEdit.imgUrl'(to,from) {
            console.log('to:',to)
        }
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
    margin-block-start: 1.5rem;
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