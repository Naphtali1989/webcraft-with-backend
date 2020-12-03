import vue from 'vue';
import vuex from 'vuex';

import { userStore } from '@/store/modules/user.store';
import { wapStore } from '@/store/modules/wap.store';
import { editorStore } from '@/store/modules/editor.store';

vue.use(vuex);

export default new vuex.Store({
    strict: true,
    state: {
        isUserSiteclosed: true,
        isLoading: false
    },
    getters: {
        isViewMode(state) {
            return !state.isUserSiteclosed;
        },
        isLoading(state) {
            return state.isLoading;
        }
    },
    mutations: {
        toggleUserSiteOpen(state) {
            state.isUserSiteclosed = !state.isUserSiteclosed;
        },
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading
        }
    },
    actions: {},
    modules: {
        userStore,
        wapStore,
        editorStore
    }
});