import httpService from './http.service';



export const userService = {
    login,
    signup,
    getEmptyUser,
    logout,
    getById,
    getLoggedinUser,
    getUsers,
    remove
}

//login to app
async function login(userCreds) {
    console.log('user creds on service', userCreds);
    try {
        const user = await httpService.post('auth/login', userCreds)
        console.log('user get back from db:', user);
        // return _handleLogin(user);
    } catch (error) {
        console.log("🚀 ~ file: user.service.js ~ line 22 ~ login ~ error", error.response)
            //this is how i get the error from the error response
        const msg = error.response.data.msg;
        throw msg;
    }
}


//signup
async function signup(userCreds) {
    console.log('signup to server', userCreds);
    const user = await httpService.post('auth/signup', userCreds);
    return user;
    // return _handleLogin(user);
}



function getUsers() {
    return httpService.get('user')
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}


async function logout() {
    console.log('doing logout');
    await httpService.post('auth/logout');
    //clean session storage
    sessionStorage.clear();
}

async function getById(userId) {
    console.log('userid from frontend:', userId);
    const user = await httpService.get(`user/${userId}`);
    return user;
}


//add user to session storage
function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}

function getLoggedinUser() {
    const user = sessionStorage.getItem('user');
    if (!user) return null;
    return JSON.parse(user);
}

function getEmptyUser() {
    return {
        username: '',
        password: '',
        email: ''
    }
}