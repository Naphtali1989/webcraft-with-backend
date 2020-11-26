export const wapStore = {
    state: {
        pickedSample: null,
        samples: [{
                id: 112314,
                name: "navbar-sample",
                type: "header",
                class: "flex align-center",
                style: {
                    minHeight: "7.25rem",
                    padding: "2rem 2rem",
                    backgroundColor: "beige",
                    width: "100%",

                },
                children: [{
                        type: "txt",
                        class: "logo",
                        txt: "Elena Joy",
                        style: {
                            lineHeight: "1.5",
                            backgroundColor: "",
                            color: 'black',
                            flex: "1 1 20rem",
                            fontFamily: "Vibes"
                        }
                    },
                    {
                        type: 'section',
                        class: "nav-links flex  clean-list space-around",
                        style: {
                            backgroundColor: "",
                            width: "40%",

                        },
                        children: [{
                                type: 'link',
                                txt: "home",
                                style: {
                                    fontFamily: "Ruhl",
                                    color: "black",
                                    fontWeight: "700",
                                    paddingInlineStart: "2rem"
                                },
                                href: '#home'
                            }, {
                                type: 'link',
                                txt: "work",
                                style: {
                                    fontFamily: "Ruhl ",
                                    color: "black",
                                    fontWeight: "700",
                                    paddingInlineStart: "2rem"
                                },
                                href: '#work'
                            },
                            {
                                type: 'link',
                                txt: "contact",
                                style: {
                                    fontFamily: "Ruhl ",
                                    color: "black",
                                    fontWeight: "700",
                                    paddingInlineStart: "2rem"
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