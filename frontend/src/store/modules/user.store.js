import { userService } from '../../services/user.service';

export const userStore = {
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        async signup({ commit }, { userCreds }) {
            // await userService.signup
            console.log('getting user creds:', userCreds);
            await userService.signup(userCreds)
        }
    }
}