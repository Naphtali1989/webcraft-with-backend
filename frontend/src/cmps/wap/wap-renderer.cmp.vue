<template>
    <!-- The flow goes from the bottom worker upwards -->
    <component
        class="render-class"
        frameborder="0"
        target="_blank"
        :is="name"
        :src="urlSrc"
        :allowfullscreen="video"
        :style="cmp.style"
        :class="cmp.class"
        @click.stop.prevent="onClick"
        :placeholder="cmp.placeholder"
    >
        {{ cmpTxt }}
        <template v-if="cmp.children">
            <wap-renderer
                v-for="child in cmp.children"
                :key="child._id"
                :cmp="child"
            >
            </wap-renderer>
        </template>
    </component>
</template>

<script>
import googleMap from '@/cmps/samples/google-map.cmp.vue';
export default {
    name: 'wap-renderer',
    props: {
        cmp: {
            type: Object,
            required: true
        }
    },
    computed: {
        name() {
            const { name } = this.cmp;
            if (name === 'txt') return 'span';
            if (name === 'link') return 'a';
            if (name === 'vid') return 'iframe';
            else return name
        },
        cmpTxt() {
            return this.cmp.txt || '';
        },
        urlSrc() {
            return (this.cmp.imgUrl) ? this.cmp.imgUrl : ((this.cmp.vidUrl) ? this.convertedUrl : '');
        },
        convertedUrl() {
            if (this.cmp.vidUrl.includes("?v=")) {
                const vidId = this.cmp.vidUrl.split("?v=")[1];
                return `https://www.youtube.com/embed/${vidId}`;
            }
            return this.cmp.vidUrl
        },
        video() {
            if (this.cmp.name === 'iframe') return true
            return false
        }
    },
    methods:{
        onClick(){
            if (this.cmp.name !== 'link') return;
            window.open(this.cmp.href) 
        }
    },
    components: {
        googleMap,
    },
};
</script>


