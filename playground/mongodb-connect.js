// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }


    console.log('We are connected to the database');
    // db.collection('Todos').insertOne({
    //     text: 'Finish class',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });
    //
    // db.collection('Users').insertOne({
    //     name: 'Austin',
    //     age: 24,
    //     location: 'St. Louis'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to add user', err);
    //     }
    //
    //     console.log(res.ops[0].getTimestamp());
    // });

    db.close();
});
