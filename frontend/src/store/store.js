import vue from 'vue';
import vuex from 'vuex';

import { userStore } from '@/store/modules/user.store';
import { wapStore } from '@/store/modules/wap.store';
import { editorStore } from '@/store/modules/editor.store';

vue.use(vuex);

export default new vuex.Store({
    strict: true,
    state: {
        isUserSiteclosed: true
    },
    getters: {
        webcraft(state) {
            return state.isUserSiteclosed
        }
    },
    mutations: {
        setUserSiteOpen(state) {
            state.isUserSiteclosed = !state.isUserSiteclosed
        }
    },
    actions: {},
    modules: {
        userStore,
        wapStore,
        editorStore
    }
});