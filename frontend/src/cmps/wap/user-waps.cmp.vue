<template>
    <section class="user-waps">
        <h1>User waps here</h1>
        <div class="user-wap-grid">
            <div
                v-for="(msg,idx) in msgs"
                :key="idx"
            >
                {{msg.wap.title}}
                <img :src="msg.wap.thumbnail" />
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'user-waps',
    props: {
        msgs: Array
    },
}
</script>

<style lang="scss" scoped>
.user-wap-grid {
    display: grid;
    grid-auto-columns: repeat(auto-fit, minmax(250px, 1fr));
    place-items: center;
}
</style>
