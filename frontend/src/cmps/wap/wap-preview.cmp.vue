<template>
    <section>
        <div class="wap-preview">
            <h3 class="wap-title">{{ wap.title }}</h3>
            <img :src="wap.imgUrl" />
            <div class="wap-prev-controls flex align-center space-around">
                <router-link :to="`/wap/${wap._id}`"><i class="fas fa-eye"></i></router-link>
                <router-link :to="`/editor/${wap._id}`"><i class="fas fa-pen"></i></router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'wapPreview',
    props: {
        wap: Object
    },
    methods: {
        enterWap() {
        },
        enterEditor() {
        }

    }
}
</script>

