<template>
    <component class="editable" :is="name" :src="urlSrc" :style="cmp.style" :class="cmp.class" :contenteditable="editable" :placeholder="cmp.placeholder" frameborder="0" :allowfullscreen="video" @blur="updateTxt" @clicked="onClick" @click.stop.prevent="onClick(cmp._id)">
        <slot v-if="cmp.name === 'img' || cmp.name === 'section'">
            <controls :_id="cmp._id" @copy="emitCopy" @delete="emitDelete" @moveSection="emitMoveSection" />
        </slot>
        <!-- <slot name="video" v-if="video">//TODO -> Figure out how to get in the iframe inside this div
            <div class="site-video">
                <button class="iframe-btn">TEST VIDEO</button>
                <iframe src="https://test.com" />
            </div>
        </slot> -->
        {{ cmpTxt }}
        <template v-if="cmp.children">
            <wap-worker v-for="child in cmp.children" :key="child._id" :cmp="child" @clicked="onClick" @updatedTxt="emitUpdateTxt">
                <slot></slot>
                <slot name="video"></slot>
            </wap-worker>
        </template>
    </component>
</template>

<script>
import heroSample from "@/cmps/samples/hero-sample.cmp.vue";
import googleMap from '@/cmps/samples/google-map.cmp.vue';
import controls from '@/cmps/editor/controls.cmp.vue';
export default {
    name: 'wap-worker',
    props: {
        cmp: {
            type: Object,
            required: true
        },
        siteMode: {
            type: Boolean
        }
    },
    data() {
        return {}
    },
    computed: {
        name() {
            if(this.cmp.name==='txt') return 'span';
            if(this.cmp.name==='link') return 'a';
            if(this.cmp.name==='vid') return 'iframe';
            else return this.cmp.name
        },
        cmpTxt() {
            return this.cmp.txt||''
        },
        urlSrc() {
            return (this.cmp.imgUrl)? this.cmp.imgUrl:((this.cmp.vidUrl)? this.convertedUrl:'');
        },
        convertedUrl() {
            if(this.cmp.vidUrl.includes("?v=")) {
                const _id=this.cmp.vidUrl.split("?v=")[1];
                return `https://www.youtube.com/embed/${_id}`;
            }
            return this.cmp.vidUrl
        },
        editable() {
            if(this.cmp.name==='txt'||this.cmp.name==='link') return true;
            // if ((this.cmp.name === 'txt' || this.cmp.name === 'link') && this.siteMode) return true;
            return false
        },
        video() {
            if(this.cmp.name==='iframe') return true
            return false
        }
    },
    methods: {
        emitCopy(_id) {
            this.$emit('copy',_id)
        },
        emitDelete(_id) {
            this.$emit('delete',_id)
        },
        onClick(_id) {
            this.$emit('clicked',_id)
        },
        updateTxt(ev) {
            if(this.cmp.name==='img') return
            this.$emit('updatedTxt',ev.target.innerText)
        },
        emitUpdateTxt(txtValue) {
            this.$emit('updatedTxt',txtValue)
        },
        emitMoveSection(_id,diff) {
            this.$emit('moveSection',_id,diff)
        }
    },
    components: {
        googleMap,
        heroSample,
        controls
    },
};
</script>


