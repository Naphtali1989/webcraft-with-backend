<template>
    <section class="gallery-section">
        <div class="gallery-card"></div>
        <div class="gallery-card"></div>
        <div class="gallery-card"></div>
    </section>
</template>

<script>
export default {
    name: 'gallerySample',
    data() {
        return {
            id: Math.random().toString(36).substring(2,10),
            name: "section",
            type: "gallery",
            class: "gallery flex",
            thumbnail: "https://imagizer.imageshack.com/img924/5872/s3ba6B.png",
            style: {
                background: "",
                borderRadius: "0px",
                height: "0px",
                width: '100%',
                height: '35vw',
            },
            children: [
                {
                    id: Math.random().toString(36).substring(2,10),
                    name: "img",
                    type: "gallery",
                    class: "",
                    style: {
                        borderRadius: '0px',
                        width: '100%',
                        background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4a%2Fbc%2Fa8%2F4abca8abdfda6359581be1153434266f.jpg&f=1&nofb=1) center center / cover no-repeat scroll',

                    },
                },
                {
                    id: Math.random().toString(36).substring(2,10),
                    name: "img",
                    type: "gallery",
                    class: "",
                    style: {
                        borderRadius: '0px',
                        background: "#69D2E7",
                        width: '100%',
                        background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4a%2Fbc%2Fa8%2F4abca8abdfda6359581be1153434266f.jpg&f=1&nofb=1) center center / cover no-repeat scroll',

                    },
                },
                {
                    id: Math.random().toString(36).substring(2,10),
                    name: "img",
                    type: "gallery",
                    class: "",
                    style: {
                        borderRadius: '0px',
                        width: '100%',
                        background: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4a%2Fbc%2Fa8%2F4abca8abdfda6359581be1153434266f.jpg&f=1&nofb=1) center center / cover no-repeat scroll',

                    },
                }

            ]
        }
    }
}
</script>

 <style scoped lang="scss">
// .gallery-section {
//     width: 100%;
//     height: 35vw;
//     display: flex;

//     .gallery-card {
//         background: "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4a%2Fbc%2Fa8%2F4abca8abdfda6359581be1153434266f.jpg&f=1&nofb=1) center center / cover no-repeat scroll";
//     }
// }
//
</style>