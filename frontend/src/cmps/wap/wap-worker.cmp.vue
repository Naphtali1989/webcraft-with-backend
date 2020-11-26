<template>
    <component
        class="editable"
        :is="type"
        :style="cmp.style"
        :class="cmp.class"
        @click.stop.prevent="onClick(cmp.id)"
        @clicked="onClick"
        @blur="updateTxt"
        :contenteditable="notSection"
    >
        {{ cmpTxt }}
        <template v-if="cmp.children">
            <wap-worker
                v-for="child in cmp.children"
                :key="child._uid"
                :cmp="child"
                @clicked="onClick"
                @updatedTxt="emitUpdateTxt"
            />
        </template>
    </component>
</template>

<script>
import googleMap from '@/cmps/samples/google-map.cmp.vue';
import heroSample from "@/cmps/samples/hero-sample.cmp.vue";
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
            if (this.cmp.type === 'txt') return 'span';
            if (this.cmp.type === 'link') return 'a';
            if (this.cmp.type === 'vid') return 'iframe';
            else return this.cmp.type
        },
        cmpTxt() {
            return this.cmp.txt || ''
        },
        urlSrc() {
            return (this.template.imgUrl) ? this.template.imgUrl : ((this.template.vidUrl) ? this.convertedUrl : '');
        },
        convertedUrl() {
            if (this.cmp.vidUrl.includes("?v=")) {
                const id = this.cmp.vidUrl.split("?v=")[1];
                return `https://www.youtube.com/embed/${id}`;
            }
            return this.cmp.vidUrl
        },
        notSection() {
            if (this.cmp.type !== 'section' && this.cmp.type !== 'img') return true;
            return false
        }
    },
    methods: {
        // onInput(ev) {
        //     console.log('let us see!', ev.target.value.trim())
        // },
        onClick(id) {
            // if (this.$el.localName !== 'button' && this.$el.localName !== 'a') return
            //  window.location.href = this.$el.href
            this.$emit('clicked', id)
        },
        updateTxt(ev) {
            if(this.cmp.type==='img') return
            this.$emit('updatedTxt', ev.target.innerText)
            // console.log('this:', this)
        },
        emitUpdateTxt(txtValue) {
            this.$emit('updatedTxt', txtValue)
        }
    },
    components: {
        googleMap,
        heroSample
    },
};
</script>


