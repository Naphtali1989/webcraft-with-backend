import { userService } from '../../services/user.service';


var localLoggedinUser = null;

//if there is a user in session storage i set the localLoggedUser.
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user)

export const userStore = {
    state: {
        loggedInUser: localLoggedinUser
    },
    getters: {
        loggedInUser(state) {
            return state.loggedInUser;
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedInUser = user;
        },
        setImgUrl(state, { imgUrl }) {
            state.loggedInUser.imgUrl = imgUrl;
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
        async logout({ commit }, state) {
            await userService.logout();
            commit({ type: 'setUser', user: null })
        },
        async loadLoggedInUser({ commit }, { _id }) {
            const user = await userService.getById(_id);
            commit({ type: 'setUser', user })
        },
        async updateUser({ commit }, { user }) {
            console.log('user in store:', user);
            const savedUser = await userService.update(user)
            console.log('user after update:', savedUser);
            commit({ type: 'setUser', savedUser })
        },

    }
}