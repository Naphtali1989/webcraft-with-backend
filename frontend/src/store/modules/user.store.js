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
            // await userService.signup
            console.log('getting user creds:', userCreds);
            const user = await userService.signup(userCreds)
            commit({ type: 'setUser', user })
        },
        async login({ commit }, { userCreds }) {
            console.log('user creds in store:', userCreds);
            const user = await userService.login(userCreds)
            commit({ type: 'setUser', user })
        },
        async logout(context, state) {
            await userService.logout();
            context.commit({ type: 'setUser', user: null })
        }
    }
}