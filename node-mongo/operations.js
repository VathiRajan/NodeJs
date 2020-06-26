// @ts-check
const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {

    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
        assert.equal(err, null);

        console.log("inserted " + result.result.n + " documents into collection");
        callback(result);
    })

};

exports.findDocument = (db, collection, callback) => {
    const coll = db.collection(collection);

    coll.find({}).toArray((err, result) => {
        assert.equal(err, null);
        callback(result);

    })
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
};