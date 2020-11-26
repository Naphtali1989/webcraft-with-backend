<template>
    <component class="editable" :is="name" :style="cmp.style" :class="cmp.class" @click.stop.prevent="onClick(cmp.id)" @clicked="onClick" @blur="updateTxt" :contenteditable="editable">
        <slot v-if="cmp.name === 'img' || cmp.name === 'section'">
            <controls />
        </slot>
        {{ cmpTxt }}
        <template v-if="cmp.children">
            <wap-worker v-for="child in cmp.children" :key="child._id" :cmp="child" @clicked="onClick" @updatedTxt="emitUpdateTxt">
                <slot :id="child._id"></slot>
            </wap-worker>
        </template>
    </component>
</template>

<script>
import googleMap from '@/cmps/samples/google-map.cmp.vue';
import heroSample from "@/cmps/samples/hero-sample.cmp.vue";
import controls from '@/cmps/editor/controls.cmp.vue';
export default {
    name: 'wap-worker',
    props: {
        cmp: {
            type: Object,
            required: true
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
                const id=this.cmp.vidUrl.split("?v=")[1];
                return `https://www.youtube.com/embed/${id}`;
            }
            return this.cmp.vidUrl
        },
        editable() {
            if(this.cmp.name==='txt'||this.cmp.name==='link') return true;
            return false
        }
    },
    methods: {
        onClick(id) {
            this.$emit('clicked',id)
        },
        updateTxt(ev) {
            if(this.cmp.name==='img') return
            this.$emit('updatedTxt',ev.target.innerText)
        },
        emitUpdateTxt(txtValue) {
            this.$emit('updatedTxt',txtValue)
        }
    },
    mounted() {
    },
    components: {
        googleMap,
        heroSample,
        controls
    },
};
</script>


