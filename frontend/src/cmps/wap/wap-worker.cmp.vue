<template>
    <component class="editable" :is="type" :style="cmp.style" :class="cmp.class" @click.stop.prevent="onClick(cmp.id)" @clicked="onClick" @blur="updateTxt" :contenteditable="editable">
        <slot v-if="cmp.type === 'img' || cmp.type === 'section'">
            <controls :id="cmp.id" @copy="emitCopy" />
        </slot>
        {{ cmpTxt }}
        <template v-if="cmp.children">
            <wap-worker v-for="child in cmp.children" :key="child._id" :cmp="child" @clicked="onClick" @updatedTxt="emitUpdateTxt">
                <slot></slot>
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
        type() {
            if(this.cmp.type==='txt') return 'span';
            if(this.cmp.type==='link') return 'a';
            if(this.cmp.type==='vid') return 'iframe';
            else return this.cmp.type
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
            if(this.cmp.type==='txt'||this.cmp.type==='link') return true;
            return false
        }
    },
    methods: {
        emitCopy(id) {
            this.$emit('copy',id)
        },
        // onInput(ev) {
        //     console.log('let us see!', ev.target.value.trim())
        // },
        onClick(id) {
            // if (this.$el.localName !== 'button' && this.$el.localName !== 'a') return
            //  window.location.href = this.$el.href
            this.$emit('clicked',id)
        },
        updateTxt(ev) {
            if(this.cmp.type==='img') return
            this.$emit('updatedTxt',ev.target.innerText)
            // console.log('this:', this)
        },
        emitUpdateTxt(txtValue) {
            this.$emit('updatedTxt',txtValue)
        }
    },
    mounted() {
        console.log("cmp",this.cmp.type)
    },
    components: {
        googleMap,
        heroSample,
        controls
    },
};
</script>


