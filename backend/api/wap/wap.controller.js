const wapService = require('./wap.service');

async function getWaps(req, res) {
    try {
        const waps = await wapService.query(req.query);
        res.json(waps)
    } catch (error) {
        console.log(error);
    }
}

async function getWapById(req, res) {
    try {
        const wap = await wapService.getById(req.params.id)
        res.json(wap)
    } catch (error) {
        console.log(error);

    }

}
async function deleteWap(req, res) {
    try {
        const id = req.params.id
        await wapService.remove(id)
        res.json('DELETE A WAP!')

    } catch (error) {
        console.log(error);
    }
}

async function addWap(req, res) {
    try {
        const wap = req.body
        console.log('session:', req.session);
        wap.userId = req.session.user._id
            // wap.userId = req.session.user._id;
        await wapService.add(wap)
        res.json(wap)

    } catch (error) {
        console.log(error);
    }
}

async function updateWap(req, res) {
    try {
        const wap = req.body;
        console.log('get wap to update:', wap);
        await wapService.update(wap)
        res.json(wap);

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getWaps,
    getWapById,
    addWap,
    updateWap,
    deleteWap,
}