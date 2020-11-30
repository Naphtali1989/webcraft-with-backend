import { editorService } from '@/services/editor.service';

export const editorStore = {
    state: {
        pickedSample: null,
        samples: [],
    },
    getters: {
        sampleList(state) {
            return state.samples.map(sample => {
                const { _id, type, thumbnail, title } = sample
                return {
                    _id,
                    type,
                    thumbnail,
                    title
                };
            });
        },
        sampleToAdd(state) {
            return state.pickedSample;
        }
    },
    mutations: {
        setPickedSample(state, sample) {
            state.pickedSample = sample;
        },
        setSamples(state, { samples }) {
            state.samples = samples
        }
    },
    actions: {
        async loadSamples({ commit }) {
            const samples = await editorService.query();
            commit({
                type: 'setSamples',
                samples
            })
        },
        pickedSample({ commit, state }, { _id }) {
            const sample = state.samples.find(sample => sample._id === _id);
            commit({
                type: 'setPickedSample',
                sample
            })
            return sample;
        },
    }
}