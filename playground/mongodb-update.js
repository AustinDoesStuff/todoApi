// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }


    console.log('We are connected to the database');

    // db.collection('Todos').findOneAndUpdate({text: 'get married'}, 
    //     {
    //         $set: {
    //         completed: true 
    //     }
    // }, {returnOriginal: false}
    // )
    // .then((res) => {
    //     console.log(JSON.stringify(res, undefined, 2));
    // }, (err) => {
    //     console.log('unable to update');
    // });

    db.collection('Users').findOneAndUpdate({name: "Mo'gan"},
    {
        $set: {
            name: 'Morgan'
        },
        $inc: {
            age: -1
        }
    }, {returnOriginal: false})
    .then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    }, (err) => {
        console.log('unable to update value', err);
    });
    // db.close();
});
