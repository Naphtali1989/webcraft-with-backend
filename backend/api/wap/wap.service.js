//get access to db service
const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId

//get all toys
async function query() {
    const collection = await dbService.getCollection('wap')
    try {
        const waps = await collection.find({}).toArray();
        return waps;
    } catch (error) {
        console.log('error:', error);
        throw error;
    }
}

//Get toy by id
async function getById(wapId) {
    //connect to db
    const collection = await dbService.getCollection('wap')
    try {
        //find a toy with specific id, we turn the toyId string into an ObjectId for searching in the db
        const wap = await collection.findOne({ '_id': ObjectId(wapId) })
        return wap;
    } catch (error) {
        console.log('error', error);
        throw err;
    }
}



async function add(wap) {
    console.log('*********wap in service backend***********', wap);
    const collection = await dbService.getCollection('wap')
    console.log('collection?:', collection);
    try {
        wap.createdAt = Date.now();
        await collection.insertOne(wap);
        console.log('after adding.........');
        return wap;
    } catch (err) {
        console.log(`ERROR: cannot insert wap`)
        throw err;
    }
}

async function remove(wapId) {
    const collection = await dbService.getCollection('wap')
    try {
        //delete the user with this specific id
        await collection.deleteOne({ '_id': ObjectId(wapId) })
    } catch (err) {
        console.log(`ERROR: cannot remove wap ${wapId}`)
        throw err;
    }
}


//update user
async function update(wap) {
    const collection = await dbService.getCollection('wap')
        //convert the id which is a string to an objectId in order to update it in the db
    wap._id = ObjectId(wap._id);
    try {
        wap.updatedAt = Date.now()
            //replace a user with the user id and set in the db the new user
        await collection.updateOne({ _id: wap._id }, { $set: wap })
        return wap
    } catch (err) {
        throw err;
    }
}


// function _buildCriteria(filterBy) {
//     // console.log('getting from frontend filterby:', filterBy);
//     const criteria = {};
//     if (filterBy.name) {
//         criteria.name = { $regex: filterBy.name, $options: "$i" }
//     }

//     if (filterBy.type) {
//         criteria.type = filterBy.type
//     }
//     if (filterBy.inStock && filterBy.inStock !== 'all') {
//         criteria.inStock = JSON.parse(filterBy.inStock)
//     }

//     return criteria;
// }

module.exports = {
    query,
    getById,
    remove,
    add,
    update,
}