const dbService = require('../../services/db.service');

async function query() {
    const collection = await dbService.getCollection('sample')
    try {
        const samples = await collection.find({}).toArray();
        return samples;
    } catch (error) {
        console.log('error:', error);
        throw error;
    }
}

async function update(sample) {
    const collection = await dbService.getCollection('sample')
    console.log('sample update??', sample)
    sample._id = ObjectId(sample._id);
    try {
        sample.updatedAt = Date.now()
        await collection.updateOne({ _id: sample._id }, { $set: sample })
        return sample
    } catch (err) {
        throw err;
    }
}

async function add(sample) {
    const collection = await dbService.getCollection('sample')
    console.log('sample create??', sample)
    try {
        sample.createdAt = Date.now();
        await collection.insertOne(sample);
        return sample;
    } catch (err) {
        console.log(`ERROR: cannot insert sample`)
        throw err;
    }
}

module.exports = {
    query,
    update,
    add
}