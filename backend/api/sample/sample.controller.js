const sampleService = require('./sample.service')

async function getSamples(req, res) {
    console.log('req query:', req.query);
    try {
        const samples = await sampleService.query(req.query);
        // console.log('waps:', waps);
        res.json(samples)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getSamples
}