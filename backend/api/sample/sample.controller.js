const sampleService = require('./sample.service')

async function getSamples(req, res) {
    try {
        const samples = await sampleService.query(req.query);
        res.json(samples)
    } catch (error) {
        console.log(error);
    }
}

async function addSample(req, res) {
    try {
        const sample = req.body
        console.log('session:', req.session);
        await sampleService.add(sample)
        res.json(sample)

    } catch (error) {
        console.log(error);
    }
}

async function updateSample(req, res) {
    try {
        const sample = req.body;
        await sampleService.update(sample)
        res.json(sample);

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getSamples,
    addSample,
    updateSample
}