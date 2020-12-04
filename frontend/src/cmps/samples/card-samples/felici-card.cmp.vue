<template>
    <section>

    </section>
</template>

<script>
export default {
    data() {
        return {
            name: 'section',
            type: 'cards',
            class: 'main-layout',
            style: {
                background: '#fafafa',
                borderRadius: '0px'
            },
            children: [
                //div with 2 spans
                {
                    name: 'div',
                    style: {
                        background: '#fafafa',
                        borderRadius: '0px'
                    },
                    children: [
                        {
                            name: 'txt',
                            "style": {
                                "fontFamily": "athiti",
                                "color": "#fff",
                                "fontSize": "18px",
                                "padding": "0px 20px",
                                "lineHeight": "2",
                                "letterSpacing": "1",
                                "backgroundColor": "#d0a772",
                                "textDecoration": "",
                                "fontStyle": "",
                                "textAlign": "",
                                "borderRadius": "4px"
                            },


                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style>
</style>