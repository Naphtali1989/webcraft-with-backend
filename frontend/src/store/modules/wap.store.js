import { wapService } from '@/services/wap.service';
export const wapStore = {
    state: {
        waps: [

        ]

    },
    getters: {
        wapList(state) {
            return state.waps.map(wap => {
                const { _id, thumbnail, title } = wap
                return {
                    _id,
                    thumbnail,
                    title
                };
            });
        },

    },
    mutations: {
        setWaps(state, { waps }) {
            state.waps = waps
        }
    },
    actions: {
        async loadWaps({ commit }) {
            const waps = await wapService.query();
            commit({ type: "setWaps", waps })
        },
        async loadWap(context, { _id }) {
            const wap = await wapService.getById(_id);
            return wap;
        },
        async saveWap(context, { wap }) {
            const savedWap = await wapService.save(wap);
            return savedWap
        }
    }
}