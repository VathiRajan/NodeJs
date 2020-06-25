const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.10:27017/';
const dbname = 'generator'
MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('succesfuly connected to mongo server');
    const db = client.db(dbname);
    const collection = db.collection('dishes');

    collection.insertOne({
        "name": "masala-puri",
        "description": "masalapuri Play Rs.20"
    }, (err, result) => {

        assert.equal(err, null);
        console.log('After Insert:\n');
        console.log(result.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);
            console.log('found: \n');
            console.log(docs);
            db.dropCollection('dishes', (err, result) => {
                assert.equal(err, null);

                client.close();
            });

        })
    });

})
