import { wapService } from '@/services/wap.service';
import { sampleService } from '@/services/sample.service';

export const wapStore = {
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
        saveCurrWap(state, { cmps }) {
            state.currWap = cmps
        },
        setSamples(state, { samples }) {
            state.samples = samples
        }
    },
    actions: {
        async loadSamples({ commit }) {
            const samples = await sampleService.query();
            console.log('Samples from db:', samples);
            commit({ type: 'setSamples', samples })
        },
        async loadWap({ commit }, { _id }) {
            console.log('id:', _id);
            const wap = await wapService.getById(_id);
            console.log('loading wap from backend:', wap);
            return wap;
            // commit({ type: 'loadWap', wap })
        },
        async saveWap({ commit }, { wap }) {
            // cmps
            console.log('wap to save in store:', wap);
            const savedWap = await wapService.save(wap);
            return savedWap
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