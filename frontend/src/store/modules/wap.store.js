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
        async deleteWap({ commit }, { wapId }) {
            console.log('deleteing wap in collab mode', wapId);
            await wapService.remove(wapId)
        },
        async getOwnerWapReviews({ commit }, { userId }) {
            const waps = await wapService.query(userId);
            const curUserWaps = waps.map(wap => {
                const { thumbnail, _id, title } = wap;
                const reviews = wap.reviews ? wap.reviews : '';
                return {
                    thumbnail,
                    _id,
                    title,
                    reviews
                }
            });
            return curUserWaps
        }
    }
}