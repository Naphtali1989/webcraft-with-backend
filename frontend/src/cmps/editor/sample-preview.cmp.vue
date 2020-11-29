<template>
    <div class="sample-preview flex column">
        <h3 class="sample-title">{{ title }}</h3>
            <img :src="imgUrl" />
    </div>
</template>

<script>
export default {
    name: "sample-preview",
    props: {
        imgUrl: String,
        title: String
    }
}
</script>
