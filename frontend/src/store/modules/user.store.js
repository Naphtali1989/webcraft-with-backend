import { userService } from '../../services/user.service';

export const userStore = {
    state: {
        loggedInUser: null
    },
    getters: {
        loggedInUser(state) {
            return state.loggedInUser;
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedInUser = user;
        }
    },
    actions: {
        async signup({ commit }, { userCreds }) {
            const user = await userService.signup(userCreds)
            commit({ type: 'setUser', user })
        },
        async login({ commit }, { userCreds }) {
            const user = await userService.login(userCreds)
            commit({ type: 'setUser', user })
            return user;
        },
        async logout(context, state) {
            await userService.logout();
            context.commit({ type: 'setUser', user: null })
        }
    }
}