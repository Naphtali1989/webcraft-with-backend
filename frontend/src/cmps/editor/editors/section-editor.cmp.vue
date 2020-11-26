<template>
    <section class="section-editor flex column align-center">
        <p class="editor-txt">Set Round Edges:</p>
        <my-range :options="{ initVal: 2, min: 0, max: 50 }" />
        <template v-if="cmpToEdit.type === 'section'">
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
    data() {
        return {
        }
    },
    methods: {
        async emitUploadImg(ev) {
            const res=await uploadImg(ev);
            this.cmpToEdit.style.background=`url(${res.url}) center / cover no-repeat`;
            this.cmpToEdit.imgUrl=res.url;
            console.log('res picture:',res);

            // this.$emit('uploading',ev)
            //     this.$store.commit({
            //         type:'setIsLoading',
            //         isLoading: true
            //     })
            //     const imgUrl = await uploadImg(ev)
            //     this.toyToEdit.imgUrl = imgUrl.url
            //     this.$store.commit({
            //         type:'setIsLoading',
            //         isLoading: false
            //     })
        },
        setColor(color) {
            this.cmpToEdit.style.background=color;
        },
        onSetImg(photo) {
            console.log('picked photo:',photo);
            this.cmpToEdit.style.background=`url(${photo}) center / cover no-repeat`;
            this.cmpToEdit.imgUrl=photo;
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
.preview {
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