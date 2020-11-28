<template>
    <section>
        <div class="wap-preview">
            <h3 class="wap-title">{{ wap.title }}</h3>
            <img :src="wap.imgUrl" />
            <div class="wap-prev-controls flex place-center">
                <router-link><i class="fas fa-eye"></i></router-link>
                <router-link><i class="fas fa-pen"></i></router-link>
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

<style>
</style>
