export const wapStore = {
    state: {
        pickedSample: null,
        samples: [{
                id: Math.random().toString(36).substring(2, 10),
                name: "navbar-sample",
                type: "header",
                class: "flex align-center",
                style: {
                    minHeight: "7.25rem",
                    padding: "2rem 2rem",
                    background: "beige",
                    width: "100%",


                },
                children: [{
                        id: Math.random().toString(36).substring(2, 10),
                        type: "txt",
                        class: "logo",
                        txt: "Elena Joy",
                        style: {
                            lineHeight: "1.5",
                            background: "",
                            color: 'black',
                            flex: "1 1 20rem",
                            fontFamily: "Vibes",
                            fontSize: "1.5rem",
                        }
                    },
                    {
                        id: Math.random().toString(36).substring(2, 10),
                        type: 'section',
                        class: "nav-links flex  clean-list space-around",
                        style: {
                            background: "",
                            width: "40%",

                        },
                        children: [{
                                id: Math.random().toString(36).substring(2, 10),
                                type: 'link',
                                txt: "home",
                                style: {
                                    fontFamily: "Ruhl",
                                    color: "black",
                                    fontWeight: "700",
                                    paddingInlineStart: "2rem",
                                    fontSize: "1rem",
                                },
                                href: '#home'
                            }, {
                                id: Math.random().toString(36).substring(2, 10),
                                type: 'link',
                                txt: "work",
                                style: {
                                    fontFamily: "Ruhl ",
                                    color: "black",
                                    fontWeight: "700",
                                    paddingInlineStart: "2rem",
                                    fontSize: "1rem",
                                },
                                href: '#work'
                            },
                            {
                                id: Math.random().toString(36).substring(2, 10),
                                type: 'link',
                                txt: "contact",
                                style: {
                                    fontFamily: "Ruhl ",
                                    color: "black",
                                    fontWeight: "700",
                                    paddingInlineStart: "2rem",
                                    fontSize: "1rem",
                                },
                                href: '#contact'
                            }
                        ]
                    }
                ]
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