<template>
    <section class="section-editor flex column align-center">
        <p class="editor-txt">Set Round Edges:</p>
        <my-range :options="{ initVal: 2, min: 0, max: 50 }" />
        <template v-if="cmpToEdit.type === 'section'">
            <p class="editor-txt">Set A Background Color</p>
            <color-picker @changeColor="setColor" />
        </template>

        <p class="editor-txt">Or Add An Image As A Background</p>
        <div class="img-uploader">
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
        emitUploadImg(ev) {
            console.log(ev);
            this.$emit('uploading',ev)
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
</style>