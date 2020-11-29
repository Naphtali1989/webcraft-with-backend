<template>
    <section>
        <div class="page-controls flex">
            <h1 class="site-saying">Create a website as you wish</h1>
            <button class="big-btn btn" @click="openEditor">
                Click here to start!
            </button>
        </div>
        <wap-list :waps="waps"></wap-list>
    </section>
</template>

<script>
import wapList from '@/cmps/wap/wap-list.cmp.vue'
export default {
    name: 'wapGallery',
    components: {
        wapList
    },
    data() {
        return {
            waps: [
                {
                    imgUrl: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
                    title: "grooti",
                    _id:"5fc2d397de678429e801edf6"
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    title: "gaming",
                    _id:"5fc36b6970a7273f445e975b"
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                    title: "lion",
                    _id:"5fc36b9b70a7273f445e975c"
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1591504771094-a1ca4de142d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                    title: "boxing",
                    _id:"5fc36bc80dc5eb5368180b12"
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                    title: "parrot",
                    _id:"5fc370040dc5eb5368180b13"
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
                    title: "kitchen",
                    _id:"5fc383f0355fe63da848a82b"
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1555992457-451f57ab92b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    title: "diner",
                    _id:"5fc391b6355fe63da848a82c"
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
                    title: "beach",
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1529511582893-2d7e684dd128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80",
                    title: "wheat",
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=604&q=80",
                    title: "cake",
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1533142266415-ac591a4deae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=588&q=80",
                    title: "art",
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1554889914-a5c84570ea3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
                    title: "parkour",
                },
            ]
        }
    },
    methods: {
        openEditor() {
            this.$router.push('/editor')
        }
    }
};
</script>