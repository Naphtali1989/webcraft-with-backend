export const wapStore = {
    state: {
        pickedSample: null,
        samples: [{
                id: Math.random().toString(36).substring(2, 10),
                type: "header",
                name: "section",
                class: "flex align-center",
                style: {
                    minHeight: "116px",
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
                            letterSpacing: '',
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
                                    lineHeight: '',
                                    letterSpacing: '',
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
                                    lineHeight: '',
                                    letterSpacing: '',
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
                                    lineHeight: '',
                                    letterSpacing: '',
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
                class: "flex",
                style: {
                    minHeight: "872px",
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
                        lineHeight: "",
                        backgroundColor: "",
                        color: 'black',
                        flex: "1 1 20rem",
                        fontFamily: "Ruhl",
                        fontSize: "16px",
                        textAlign: '',
                        fontStyle: '',
                        textDecoration: '',
                        letterSpacing: '',
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
                                    id: Math.random().toString(36).substring(2, 10),
                                    type: "text",
                                    name: "txt",
                                    txt: "Elena Joy",
                                    style: {
                                        fontSize: "24px",
                                        lineHeight: "",
                                        letterSpacing: "",
                                        background: "",
                                        color: "rgb(63,63,63)",
                                        fontFamily: "Ruhl",
                                        textDecoration: "",
                                        fontStyle: "",
                                        textAlign: "",
                                        paddingTop: "3rem",
                                    }
                                }, {
                                    id: Math.random().toString(36).substring(2, 10),
                                    type: "text",
                                    name: "txt",
                                    txt: "Photography",
                                    style: {
                                        fontSize: "24px",
                                        lineHeight: "",
                                        letterSpacing: "",
                                        background: "",
                                        color: "rgb(63,63,63)",
                                        fontFamily: "Ruhl",
                                        textDecoration: "",
                                        fontStyle: "",
                                        textAlign: "",
                                        paddingTop: "3rem",
                                    }
                                },
                                {
                                    id: Math.random().toString(36).substring(2, 10),
                                    type: "text",
                                    name: "txt",
                                    class: "",
                                    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima assumenda expedita similique quaerat maiores ab, itaque hic explicabo eaque!",
                                    style: {
                                        lineHeight: "",
                                        backgroundColor: "",
                                        color: 'rgb(63,63,63)',
                                        fontFamily: "Ruhl",
                                        fontSize: "16px",
                                        textAlign: '',
                                        fontStyle: '',
                                        textDecoration: '',
                                        letterSpacing: '',
                                        padding: "5rem 10rem"
                                    }
                                }, {
                                    id: Math.random().toString(36).substring(2, 10),
                                    type: "link",
                                    name: "link",
                                    class: "",
                                    txt: "Gallery",
                                    href: "#Gallery",
                                    style: {
                                        lineHeight: "",
                                        backgroundColor: "",
                                        color: 'rgb(63,63,63)',
                                        fontFamily: "Ruhl",
                                        fontSize: "16px",
                                        textAlign: '',
                                        fontStyle: '',
                                        textDecoration: '',
                                        letterSpacing: '',
                                        padding: "2rem 8rem",
                                        border: "3px solid black",
                                        marginBottom: "4rem"
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
                                flex: "1 1 40rem",
                                borderRadius: 0,
                                zIndex: 1,
                            },
                            children: [{
                                id: Math.random().toString(36).substring(2, 10),
                                name: "img",
                                class: "hero-elena",
                                style: {
                                    borderRadius: "2px",
                                    height: "872px",
                                    width: "100%",
                                    objectFit: "cover"
                                },
                                imgUrl: "https://imagizer.imageshack.com/img924/5680/fy20r8.png"
                            }]
                        }


                    ]
                }]
            }

        ]
    },

    getters: {
        sampleList(state) {
            return state.samples.map(sample => ({ id: sample.id, name: sample.name, type: sample.type }))
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

// {
//     "name": "section",
//     "children": [{
//             "id": "5748"
//             "name": "section",
//             "imgUrl": '',
//             "class": "flex column justify-center align-center",
//             "color": "#222",
//             "style": {
//                 "background": "gray",
//                 "color": "red",
//                 "height": "300px"
//             },
//             "children": [{
//                 "id": "12343"
//                 "name": "txt",
//                 "class": "h1-heading",
//                 "txt": "MATAN THIS SHIT MAYBE WORKS",
//                 "style": {
//                    "fontSize": "25px",
//                     "lineHeight": 1.5,
//                     "letterSpacing": "10px",
//                     "backgroundColor": "",
//                     "color": "red",
//                     "fontFamily": "monospace",
//                     "textDecoration": "underline",
//                     "fontStyle": "italic",
//                     "fontWeight": "bold"

//                 }
//             }]

// }

// {
//     "name": "section",
//     "children": [{
//         "id": "5748",
//         "name": "section",
//         "imgUrl": '',
//         "class": "flex column justify-center align-center",
//         "color": "#222",
//         "style": {
//             "background": "gray",
//             "color": "red",
//             "height": "300px"
//         },
//         "children": [{
//             "id": "12343",
//             "name": "txt",
//             "class": "h1-heading",
//             "txt": "MATAN THIS SHIT MAYBE WORKS",
//             "style": {
//                 "fontSize": "25px",
//                 "lineHeight": "1.5",
//                 "letterSpacing": "10px",
//                 "backgroundColor": "",
//                 "color": "red",
//                 "fontFamily": "monospace",
//                 "textDecoration": "underline",
//                 "fontStyle": "italic",
//                 "fontWeight": "bold"
//             }
//         }]

//     }]
// }