<template>
    <section class="video-editor flex column align-center">
        <h1>Video Editor</h1>
        <p>Please enter a youtube link</p>
        <form>
            <input type="text">
        </form>
        <iframe width="270" height="270" :src="convertedUrl" frameBorder="0"></iframe>
    </section>
</template>

<script>
export default {
    name: 'video-editor',
    props: {
        cmpToEdit: Object
    }
};
</script>

