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
                            fontSize: "1.5rem",
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
                                    fontSize: "1rem",
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
                                    fontSize: "1rem",
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
                                    fontSize: "1rem",
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
                                        // marginBottom: "2rem"
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
                                    borderRadius: "2px",
                                    height: "500px",
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