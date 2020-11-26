export const wapStore = {
    state: {
        samples: [{
                id: 112314,
                name: "navbar-sample",
                type: "header",
                info: {
                    class: "flex align-center",
                    style: {
                        minHeight: "7.25rem",
                        width: "90%",
                        padding: "2rem 0rem"
                    },
                    children: {
                        h1: {
                            class: "logo",
                            txt: "Elena Joy",
                            style: {
                                lineHeight: "1.5",
                                backgroundColor: "",
                                color: 'black',
                                flex: "1 1 20rem"
                            }
                        },
                        div: {
                            style: {
                                class: "nav-links flex space-around clean-list"
                            }

                        }
                    }
                }
            }

        ]
    },
    getters: {
        sampleList(state) {
            return state.samples.map(sample => ({ id: sample.id, name: sample.name, type: sample.type }))
        }
    },
    mutations: {

    },
    actions: {
        pickedSample({ commit }, { id }) {

        },
    }
}