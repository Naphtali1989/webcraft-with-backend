import { wapService } from '@/services/wap.service';

export const wapStore = {
    state: {
        pickedSample: null,
        samples: [],
        wap: null
    },
    getters: {
        getWap(state) {
            return state.wap.cmps
        },
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
        loadWap(state, { wap }) {
            state.wap = wap;
        }
    },
    actions: {
        async loadWap({ commit }, { _id }) {
            console.log('id:', _id);
            const wap = await wapService.getById(_id);
            console.log('loading wap from backend:', wap);
            commit({ type: 'loadWap', wap })
        },
        async saveWap({ commit, state }, { wap }) {
            // cmps
            console.log('wap to save:', wap);
            await wapService.save(wap);
            // commit({ type: 'saveCurrWap', wap })
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