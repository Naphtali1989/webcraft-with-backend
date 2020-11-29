<template>
    <section></section>
</template>

<script>
export default {
    name: 'big-footer',
    data() {
        return {
            _id: Math.random().toString(36).substring(2,12),
            name: 'section',
            type: 'footer',
            class: 'flex space-around',
            style: {
                background: 'rgb(22, 22, 22)',
                borderRadius: '0px',
                width: '100%',
                padding: '3rem 1rem',


            },
            children: [
                {

                    _id: Math.random().toString(36).substring(2,12),
                    name: 'div',
                    style: {
                        background: '',
                        borderRadius: '0px'
                    },
                    children:
                        [
                            {
                                _id: Math.random().toString(36).substring(2,12),
                                name: 'div',
                                class: 'flex column align-center',
                                style: {
                                    background: '',
                                    borderRadius: '0px'
                                },
                                children:
                                    [
                                        {
                                            id: Math.random().toString(36).substring(2,12),
                                            name: 'txt',
                                            txt: "Item 1",
                                            style: {
                                                "fontSize": " 1.25rem",
                                                letterSpacing: '1px',
                                                fontWeight: 'bold',
                                                background: '#fff',
                                                padding: '12px 40px',
                                                border: 'none',
                                                "lineHeight": "",
                                                "textDecoration": "",
                                                "fontStyle": "",
                                                "textAlign": "",
                                                "fontFamily": "",
                                                "color": '#fff'
                                            }
                                        },
                                        {
                                            id: Math.random().toString(36).substring(2,12),
                                            name: 'txt',
                                            txt: "Item 2",
                                            style: {
                                                "fontSize": "14px",
                                                letterSpacing: '1px',
                                                fontWeight: '600px',
                                                background: '#fff',
                                                padding: '12px 40px',
                                                border: 'none',
                                                "lineHeight": "",
                                                "textDecoration": "",
                                                "fontStyle": "",
                                                "textAlign": "",
                                                "fontFamily": "",
                                                "color": '333'
                                            }
                                        },
                                        {
                                            id: Math.random().toString(36).substring(2,12),
                                            name: 'txt',
                                            txt: "Item 3",
                                            style: {
                                                "fontSize": "14px",
                                                letterSpacing: '1px',
                                                fontWeight: '600px',
                                                background: '#fff',
                                                padding: '12px 40px',
                                                border: 'none',
                                                "lineHeight": "",
                                                "textDecoration": "",
                                                "fontStyle": "",
                                                "textAlign": "",
                                                "fontFamily": "",
                                                "color": '333'
                                            }
                                        },
                                        {
                                            id: Math.random().toString(36).substring(2,12),
                                            name: 'txt',
                                            txt: "Item 4",
                                            style: {
                                                "fontSize": "14px",
                                                letterSpacing: '1px',
                                                fontWeight: '600px',
                                                background: '#fff',
                                                padding: '12px 40px',
                                                border: 'none',
                                                "lineHeight": "",
                                                "textDecoration": "",
                                                "fontStyle": "",
                                                "textAlign": "",
                                                "fontFamily": "",
                                                "color": '333'
                                            }
                                        },

                                    ]
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