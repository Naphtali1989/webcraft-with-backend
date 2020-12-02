<template>
    <section>

    </section>
</template>

<script>
export default {
    data() {
        return {
            name: "section",
            type: "card",
            class: "card",
            thumbnail: 'https://imagizer.imageshack.com/img922/7981/WgIDFl.png',
            style: {
                background: "#fff",
                borderRadius: "0px",
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 60px))',
                gridGap: '20px'
            },
            children: [
                {
                    name: "section",
                    type: "card",
                    class: "card",
                    thumbnail: 'https://imagizer.imageshack.com/img922/7981/WgIDFl.png',
                    style: {
                        background: "#fff",
                        borderRadius: "0px",
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 60px))',
                        gridGap: '20px'
                    },
                }
            ]
        }
    }
}
</script>

<style>
</style>