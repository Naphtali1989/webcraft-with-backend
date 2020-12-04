import { wapService } from '@/services/wap.service';
import { userService } from '@/services/user.service'
export const wapStore = {
    state: {
        waps: [

        ]

    },
    getters: {
        getWaps(state) {
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
            commit({ type: 'setIsLoading', isLoading: true });
            const waps = await wapService.query();
            commit({ type: "setWaps", waps });
            commit({ type: 'setIsLoading', isLoading: false });
        },
        async loadWap(context, { _id }) {
            // commit({ type: 'setIsLoading', isLoading: true })
            const wap = await wapService.getById(_id);
            // commit({ type: 'setIsLoading', isLoading: false })
            return wap;
        },
        async saveWap(context, { wap }) {
            // commit({ type: 'setIsLoading', isLoading: true })
            const savedWap = await wapService.save(wap);
            // commit({ type: 'setIsLoading', isLoading: false })
            return savedWap
        },
        async getOwnerWapReviews({ commit }, { userId }) {
            const waps = await wapService.query(userId);
            const msgs = waps.map(wap => {
                // console.log('what we get from stoere?', wap);
                const { thumbnail, reviews, _id, title } = wap;
                return {
                    wap: { thumbnail, _id, title },
                    reviews: reviews ? reviews : ''
                }
            });
            return msgs
        }
    }
}