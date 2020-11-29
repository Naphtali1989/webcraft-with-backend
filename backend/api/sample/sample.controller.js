const sampleService = require('./sample.service')

async function getSamples(req, res) {
    try {
        const samples = await sampleService.query(req.query);
        res.json(samples)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getSamples
}