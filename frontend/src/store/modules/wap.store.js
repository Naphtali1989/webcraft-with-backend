export const wapStore = {
    state: {
        pickedSample: null,
        samples: [{
                id: Math.random().toString(36).substring(2, 10),
                type: "header",
                thumbnail: "https://imagizer.imageshack.com/img924/5872/s3ba6B.png",
                title: "Nav Bar",
                name: "section",
                class: "flex align-center",
                style: {
                    minHeight: "7.25rem",
                    padding: "2rem 2rem",
                    background: "beige",
                    width: "100%",
                    borderRadius: 0
                },
                children: [{
                        id: Math.random().toString(36).substring(2, 10),
                        name: "txt",
                        class: "logo",
                        txt: "Elena Joy",
                        style: {
                            lineHeight: "1.5",
                            backgroundColor: "",
                            color: 'black',
                            flex: "1 1 20rem",
                            fontFamily: "Vibes",
                            fontSize: "24px",
                            textAlign: '',
                            fontStyle: '',
                            textDecoration: '',
                            letterSpacing: '1',
                        }
                    },
                    {
                        id: Math.random().toString(36).substring(2, 10),
                        name: 'div',
                        class: "nav-links flex clean-list space-around",
                        style: {
                            background: "",
                            width: "40%",
                            borderRadius: 0,
                        },
                        children: [{
                                id: Math.random().toString(36).substring(2, 10),
                                name: 'link',
                                txt: "home",
                                style: {
                                    fontFamily: "Ruhl",
                                    color: "black",
                                    fontWeight: "700",
                                    paddingInlineStart: "2rem",
                                    fontSize: "16px",
                                    lineHeight: '2',
                                    letterSpacing: '1',
                                    backgroundColor: '',
                                    textDecoration: '',
                                    fontStyle: '',
                                    textAlign: '',
                                },
                                href: '#home'
                            },
                            {
                                id: Math.random().toString(36).substring(2, 10),
                                name: 'link',
                                txt: "work",
                                style: {
                                    fontFamily: "Ruhl",
                                    color: "black",
                                    fontWeight: "700",
                                    paddingInlineStart: "2rem",
                                    fontSize: "16px",
                                    lineHeight: '2',
                                    letterSpacing: '1',
                                    backgroundColor: '',
                                    textDecoration: '',
                                    fontStyle: '',
                                    textAlign: '',
                                },
                                href: '#work'
                            },
                            {
                                id: Math.random().toString(36).substring(2, 10),
                                name: 'link',
                                txt: "contact",
                                style: {
                                    fontFamily: "Ruhl",
                                    color: "black",
                                    fontWeight: "700",
                                    paddingInlineStart: "2rem",
                                    fontSize: "16px",
                                    lineHeight: '2',
                                    letterSpacing: '1',
                                    backgroundColor: '',
                                    textDecoration: '',
                                    fontStyle: '',
                                    textAlign: '',
                                },
                                href: '#contact'
                            }
                        ]
                    }
                ]
            },
            // next one
            {
                id: Math.random().toString(36).substring(2, 10),
                name: "section",
                type: "cards",
                title: "Photography",
                thumbnail: "https://imagizer.imageshack.com/img922/1905/up2tR2.png",
                class: "flex",
                style: {
                    maxHeight: "500px",
                    padding: "",
                    background: "beige",
                    width: "100%",
                    borderRadius: 0
                },
                children: [{
                    id: Math.random().toString(36).substring(2, 10),
                    name: "div",
                    class: "hero flex wrap",
                    style: {
                        lineHeight: "4",
                        backgroundColor: "",
                        color: 'black',
                        flex: "1 1 20rem",
                        fontFamily: "Ruhl",
                        fontSize: "16px",
                        textAlign: '',
                        fontStyle: '',
                        textDecoration: '',
                        letterSpacing: '1',
                        width: "95%",
                        flexWrap: "wrap",
                        margin: "0 0 0 auto",
                        overflow: "hidden"
                    },
                    children: [{
                            id: Math.random().toString(36).substring(2, 10),
                            name: "div",
                            class: "flex column hero-introduction",
                            style: {
                                background: "",
                                flex: "2 1 40rem",
                                textAlign: "center",
                                borderRadius: 0,
                            },
                            children: [{
                                    name: "div",

                                    id: Math.random().toString(36).substring(2, 10),
                                    type: "text",
                                    name: "txt",
                                    txt: "Elena Joy",
                                    style: {
                                        fontSize: "24px",
                                        lineHeight: "4",
                                        letterSpacing: "1",
                                        background: "",
                                        color: "rgb(63,63,63)",
                                        fontFamily: "Ruhl",
                                        textDecoration: "",
                                        fontStyle: "",
                                        textAlign: "",
                                        marginBlockEnd: "8px",
                                        marginBlockStart: "8px",
                                    }
                                }, {
                                    id: Math.random().toString(36).substring(2, 10),
                                    type: "text",
                                    name: "txt",
                                    txt: "Photography",
                                    style: {
                                        fontSize: "24px",
                                        lineHeight: "4",
                                        letterSpacing: "1",
                                        background: "",
                                        color: "rgb(63,63,63)",
                                        fontFamily: "Ruhl",
                                        textDecoration: "",
                                        fontStyle: "",
                                        textAlign: "",
                                    }
                                },
                                {
                                    id: Math.random().toString(36).substring(2, 10),
                                    type: "text",
                                    name: "txt",
                                    class: "",
                                    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima assumenda expedita similique quaerat maiores ab, itaque hic explicabo eaque!",
                                    style: {
                                        lineHeight: "2",
                                        backgroundColor: "",
                                        color: 'rgb(63,63,63)',
                                        fontFamily: "Ruhl",
                                        fontSize: "16px",
                                        textAlign: '',
                                        fontStyle: '',
                                        textDecoration: '',
                                        letterSpacing: '1',
                                        padding: "1rem 3rem",
                                        marginBottom: "1.5rem"
                                    }
                                }, {
                                    id: Math.random().toString(36).substring(2, 10),
                                    type: "link",
                                    name: "link",
                                    class: "",
                                    txt: "Gallery",
                                    href: "#Gallery",
                                    style: {
                                        lineHeight: "1",
                                        backgroundColor: "",
                                        color: 'rgb(63,63,63)',
                                        fontFamily: "Ruhl",
                                        fontSize: "16px",
                                        textAlign: '',
                                        fontStyle: '',
                                        textDecoration: '',
                                        letterSpacing: '1',
                                        padding: "2rem 4rem",
                                        border: "3px solid black",
                                        margin: "0 auto"
                                    }
                                }
                            ]
                        },
                        {
                            id: Math.random().toString(36).substring(2, 10),
                            name: "div",
                            class: "hero-images",
                            style: {
                                background: "linear-gradient(#dad8dd, #dad1d4)",
                                flex: "1 1 20rem",
                                borderRadius: 0,
                                zIndex: 1,
                                height: "500px"
                            },
                            children: [{
                                id: Math.random().toString(36).substring(2, 10),
                                name: "img",
                                class: "hero-elena",
                                style: {
                                    borderRadius: "",
                                    height: "500px",
                                    width: "100%",
                                    objectFit: "cover"
                                },
                                imgUrl: "https://imagizer.imageshack.com/img924/5680/fy20r8.png"
                            }]
                        }


                    ]
                }]
            },
            // next one
            {
                id: Math.random().toString(36).substring(2, 10),
                name: "section",
                type: "cards",
                class: "card-section flex",
                thumbnail: "https://imagizer.imageshack.com/img922/1905/up2tR2.png",
                style: {
                    background: "beige",
                    borderRadius: "0px",
                    height: "400px",
                },
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPu7BceUzLF-DvrMQdcldR3W_5Gn9BhKsiw&usqp=CAU',
                children: [{
                        id: Math.random().toString(36).substring(2, 10),
                        name: "div",
                        type: "card-div",
                        class: "card flex column align-center text-center",
                        style: {
                            borderRadius: '0px',
                            background: "#69D2E7",
                            width: '300px',
                            height: "380px",
                            position: 'relative'
                        },
                        //header
                        children: [{
                            id: Math.random().toString(36).substring(2, 10),
                            name: 'div',
                            type: 'header-div',
                            style: {
                                height: '120px',
                                width: '100%',
                                background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPu7BceUzLF-DvrMQdcldR3W_5Gn9BhKsiw&usqp=CAU)'
                            },
                            children: [{
                                    id: Math.random().toString(36).substring(2, 10),
                                    name: 'div',
                                    class: 'avatar-div',
                                    style: {
                                        width: "80px",
                                        height: "80px",
                                        position: "relative",
                                        margin: "0 auto"
                                    },
                                    children: [{
                                        id: Math.random().toString(36).substring(2, 10),
                                        name: 'img',
                                        class: 'card-img',
                                        imgUrl: 'https://yt3.ggpht.com/ytc/AAUvwnjr0yv7VKDZVgTVKU28P9ApPgt8nBaQwZjc78OOiw=s900-c-k-c0x00ffffff-no-rj',
                                        style: {
                                            display: 'block',
                                            position: 'relative',
                                            bottom: '-70px',
                                            border: "4px solid white",
                                            objectFit: 'cover',
                                            height: '100%',
                                            borderRadius: '50%'
                                        }
                                    }]
                                },
                                {
                                    id: Math.random().toString(36).substring(2, 10),
                                    name: 'div',
                                    type: 'card-div',
                                    class: 'card-body flex column align-center text-center',
                                    style: {
                                        padding: '68px'
                                    },
                                    children: [{
                                            id: Math.random().toString(36).substring(2, 10),
                                            name: 'txt',
                                            txt: "place holder",
                                            style: {
                                                fontSize: '20px',
                                                fontWeight: '600',
                                                marginBlockStart: '20px',
                                                lineHeight: '',
                                                letterSpacing: '',
                                                backgroundColor: 'transparent',
                                                textDecoration: '',
                                                fontStyle: '',
                                                textAlign: '',
                                                fontFamily: ''
                                            }
                                        },
                                        {
                                            id: Math.random().toString(36).substring(2, 10),
                                            name: 'txt',
                                            txt: 'Web craft for the win',
                                            style: {
                                                fontSize: '18px',
                                                color: '#999',
                                                marginBlockStart: '20px',
                                                lineHeight: '',
                                                letterSpacing: '',
                                                backgroundColor: 'transparent',
                                                textDecoration: '',
                                                fontStyle: '',
                                                textAlign: '',
                                                fontFamily: 'carme'
                                            }
                                        },
                                        {
                                            id: Math.random().toString(36).substring(2, 10),
                                            name: 'link',
                                            txt: 'Click Me',
                                            style: {
                                                padding: "16px 20px",
                                                borderColor: '#7f00ff',
                                                color: 'white',
                                                borderRadius: '100px',
                                                marginBlockStart: '20px',
                                                lineHeight: '',
                                                letterSpacing: '',
                                                backgroundColor: '#7f00ff',
                                                textDecoration: '',
                                                fontStyle: '',
                                                textAlign: '',
                                                fontFamily: '',
                                                fontSize: '18px'

                                            }
                                        }
                                    ]
                                }
                            ]
                        }],

                    }

                ]
            },
            {
                id: Math.random().toString(36).substring(2, 10),
                type: "footer",
                thumbnail: "https://imagizer.imageshack.com/img922/9372/4iyvDo.png",
                title: "Footer",
                name: "section",
                class: "footer flex wrap align-center",
                style: {
                    padding: "1rem 5%",
                    color: "white",
                    background: "lightblue",
                    backgroundColor: "lightblue",
                    borderRadius: 0,
                },
                children: [{
                    id: Math.random().toString(36).substring(2, 10),
                    name: "txt",
                    class: "logo",
                    txt: "Elena Joy",
                    style: {
                        lineHeight: "1.5",
                        backgroundColor: "transparent",
                        color: 'white',
                        fontFamily: "Ruhal",
                        fontSize: "30px",
                        textAlign: 'inherit',
                        fontStyle: 'normal',
                        textDecoration: 'none',
                        letterSpacing: '1',
                        flex: "3 1 40rem",
                    }
                }, {
                    id: Math.random().toString(36).substring(2, 10),
                    name: 'div',
                    class: "clean-list flex space-between align-center",
                    style: {
                        background: "transparent",
                        flex: "1 1 6rem",
                        borderRadius: 0,
                    },
                    children: [{
                        id: Math.random().toString(36).substring(2, 10),
                        name: 'link',
                        style: {
                            height: "50px"
                        },
                        children: [{
                            id: Math.random().toString(36).substring(2, 10),
                            name: "i",
                            class: "fab fa-twitter",
                            style: {
                                fontSize: "36px",
                                lineHeight: "1.5"
                            },
                        }]
                    }, {
                        id: Math.random().toString(36).substring(2, 10),
                        name: 'link',
                        style: {
                            height: "50px"
                        },
                        children: [{
                            id: Math.random().toString(36).substring(2, 10),
                            name: "i",
                            class: "fab fa-instagram",
                            style: {
                                fontSize: "36px",
                                lineHeight: "1.5"
                            },
                        }]
                    }, {
                        id: Math.random().toString(36).substring(2, 10),
                        name: 'link',
                        style: {
                            height: "50px"
                        },
                        children: [{
                            id: Math.random().toString(36).substring(2, 10),
                            name: "i",
                            class: "fab fa-facebook",
                            style: {
                                fontSize: "36px",
                                lineHeight: "1.5"
                            },
                        }]
                    }]
                }]

            },
            // Next!
            {
                "id": Math.random().toString(36).substring(2, 10),
                "name": "section",
                "type": "map",
                "class": "map-section flex space-around align-center",
                "thumbnail": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0",
                "style": {
                    "background": "url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTQxOX0) center center / cover no-repeat",
                    "borderRadius": "0px",
                    "height": "500px"
                },
                "children": [{
                        "id": Math.random().toString(36).substring(2, 10),
                        "name": "div",
                        "type": "inner-div",
                        "class": "inner-div flex column justify-center align-center",
                        "style": {
                            "background": "rgb(21, 28, 51)",
                            "borderRadius": "0px",
                            "height": "100%",
                            "width": "100%",
                            "padding": "2.5rem 1rem 1rem"
                        },
                        "children": [{
                                "id": Math.random().toString(36).substring(2, 10),
                                "name": "txt",
                                "type": "inner-text",
                                "class": "map-inner-text",
                                "txt": "CONTACT US",
                                "style": {
                                    "fontSize": "24px",
                                    "lineHeight": 1,
                                    "letterSpacing": "2px",
                                    "background": "inherit",
                                    "color": "rgb(212,212,212)",
                                    "fontFamily": "inherit",
                                    "textDecoration": "inherit",
                                    "fontStyle": "inherit",
                                    "textAlign": "center",
                                    "margin-block-end": "0.5rem"
                                }
                            },
                            {
                                "id": Math.random().toString(36).substring(2, 10),
                                "name": "txt",
                                "type": "inner-text",
                                "class": "map-inner-text",
                                "txt": "We are always here to help out whenever we can :)",
                                "style": {
                                    "fontSize": "14px",
                                    "lineHeight": 0.8,
                                    "letterSpacing": "0px",
                                    "background": "inherit",
                                    "color": "#c5c5c5",
                                    "fontFamily": "inherit",
                                    "textDecoration": "inherit",
                                    "fontStyle": "inherit",
                                    "textAlign": "center",
                                    "margin-block-end": "1rem"
                                }
                            },
                            {
                                "id": Math.random().toString(36).substring(2, 10),
                                "name": "input",
                                "type": "inner-input",
                                "class": "map-inner-input",
                                "placeholder": "Name",
                                "style": {
                                    "padding": "0.5rem",
                                    "lineHeight": 0.8,
                                    "background": "#1c274a",
                                    "color": "#6c7490",
                                    "fontFamily": "inherit",
                                    "fontSize": "18px",
                                    "borderRadius": "20px",
                                    "margin": "0 0 1rem",
                                    "width": "94%",
                                    "outline": "none",
                                    "border": "none"
                                }
                            },
                            {
                                "id": Math.random().toString(36).substring(2, 10),
                                "name": "input",
                                "type": "inner-input",
                                "class": "map-inner-input",
                                "placeholder": "Email",
                                "style": {
                                    "padding": "0.5rem",
                                    "lineHeight": 0.8,
                                    "background": "#1c274a",
                                    "color": "#6c7490",
                                    "fontFamily": "inherit",
                                    "fontSize": "18px",
                                    "borderRadius": "20px",
                                    "margin": "0 0 1rem",
                                    "width": "94%",
                                    "outline": "none",
                                    "border": "none"
                                }
                            },
                            {
                                "id": Math.random().toString(36).substring(2, 10),
                                "name": "input",
                                "type": "inner-input",
                                "class": "map-inner-input",
                                "placeholder": "Phone",
                                "style": {
                                    "padding": "0.5rem",
                                    "lineHeight": 0.8,
                                    "background": "#1c274a",
                                    "color": "#6c7490",
                                    "fontFamily": "inherit",
                                    "fontSize": "18px",
                                    "borderRadius": "20px",
                                    "margin": "0 0 1.5rem",
                                    "width": "94%",
                                    "outline": "none",
                                    "border": "none"
                                }
                            },
                            {
                                "id": Math.random().toString(36).substring(2, 10),
                                "name": "input",
                                "type": "inner-text",
                                "class": "map-inner-text",
                                "placeholder": "Type your message",
                                "style": {
                                    "padding": "0.5rem",
                                    "fontSize": "16px",
                                    "lineHeight": 0.7,
                                    "letterSpacing": "10px",
                                    "background": "transparent",
                                    "color": "#7E2D96",
                                    "fontFamily": "inherit",
                                    "textDecoration": "inherit",
                                    "fontStyle": "inherit",
                                    "textAlign": "center",
                                    "width": "94%",
                                    "border": "none",
                                    "borderBottom": "1px solid grey"
                                }
                            }, {
                                "id": Math.random().toString(36).substring(2, 10),
                                "name": "link",
                                "type": "inner-text",
                                "class": "map-inner-text",
                                "placeholder": "Type your message",
                                "style": {
                                    "display": "block",
                                    "padding": "0.5rem",
                                    "fontSize": "16px",
                                    "lineHeight": 0.7,
                                    "letterSpacing": "10px",
                                    "background": "transparent",
                                    "color": "#7E2D96",
                                    "fontFamily": "inherit",
                                    "textDecoration": "inherit",
                                    "fontStyle": "inherit",
                                    "textAlign": "center",
                                    "width": "94%",
                                    "border": "none",
                                    "borderBottom": "1px solid grey"
                                }
                            },
                            {
                                "id": Math.random().toString(36).substring(2, 10),
                                "name": "div",
                                "type": "inner-div",
                                "class": "inner-div flex column justify-center align-center",
                                "style": {
                                    "background": "transparent",
                                    "borderRadius": "0px",
                                    "height": "100%",
                                    "width": "100%"
                                },
                                "children": [{
                                        "id": Math.random().toString(36).substring(2, 10),
                                        "name": "txt",
                                        "type": "inner-text",
                                        "class": "map-inner-text",
                                        "txt": "contact@youremail.com",
                                        "style": {
                                            "fontSize": "18px",
                                            "lineHeight": 0.7,
                                            "letterSpacing": "4px",
                                            "background": "inherit",
                                            "color": "#7E2D96",
                                            "fontFamily": "inherit",
                                            "textDecoration": "inherit",
                                            "fontStyle": "inherit",
                                            "textAlign": "center"
                                        }
                                    },
                                    {
                                        "id": Math.random().toString(36).substring(2, 10),
                                        "name": "txt",
                                        "type": "inner-text",
                                        "class": "map-inner-text",
                                        "txt": "Phone: +972-666-6666",
                                        "style": {
                                            "fontSize": "24px",
                                            "lineHeight": 0.7,
                                            "letterSpacing": "1px",
                                            "background": "inherit",
                                            "color": "#7E2D96",
                                            "fontFamily": "inherit",
                                            "textDecoration": "inherit",
                                            "fontStyle": "inherit",
                                            "textAlign": "center"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": Math.random().toString(36).substring(2, 10),
                        "name": "google-map",
                        "type": "map",
                        "class": "google-map none-drag-area-selector",
                        "style": {
                            "background": "transparent",
                            "borderRadius": "2px",
                            "height": "100%",
                            "width": "100%"
                        }
                    }
                ]
            }
            // Next!


        ]
    },
    getters: {
        sampleList(state) {
            return state.samples.map(sample => ({ id: sample.id, name: sample.name, type: sample.type, thumbnail: sample.thumbnail, title: sample.title }))
        },
        sampleToAdd(state) {
            return state.pickedSample
        }
    },
    mutations: {
        setPickedSample(state, sample) {
            state.pickedSample = sample
        }
    },
    actions: {
        pickedSample({ commit, state }, { id }) {
            const sample = state.samples.find(sample => sample.id === id)
            commit({
                type: 'setPickedSample',
                sample
            })
            return sample
        },
    }
}