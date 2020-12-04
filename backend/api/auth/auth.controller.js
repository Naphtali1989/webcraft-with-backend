const authService = require('./auth.service')
const logger = require('../../services/logger.service')

async function login(req, res) {
    const { email, password } = req.body
    try {
        const user = await authService.login(email, password)
            // user.isConncted = true
        req.session.user = user;
        console.log('session:', req.session.user);
        res.json(user)
    } catch (err) {
        console.log(err);
        console.log('err msg:', err.message);
        // res.status(401).send({ error: err })
        res.status(401).send({ msg: err.message })
    }
}

async function signup(req, res) {
    try {
        const { email, password, username } = req.body
        console.log(email)
        console.log(password)
        console.log(username)
        const account = await authService.signup(email, password, username)
        logger.debug(`auth.route - new account created: ` + JSON.stringify(account))
        const user = await authService.login(email, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        logger.error('[SIGNUP] ' + err)
        res.status(500).send({ error: 'could not signup, please try later' })
    }
}

async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ message: 'logged out successfully' })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}

module.exports = {
    login,
    signup,
    logout
}