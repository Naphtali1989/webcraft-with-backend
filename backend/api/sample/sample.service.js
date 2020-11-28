const dbService = require('../../services/db.service');

async function query() {
    console.log('query mother!');
    const collection = await dbService.getCollection('sample')
    try {
        const samples = await collection.find({}).toArray();
        return samples;
    } catch (error) {
        console.log('error:', error);
        throw error;
    }
}

module.exports = {
    query
}