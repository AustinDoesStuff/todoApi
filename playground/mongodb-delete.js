// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }


    console.log('We are connected to the database');


    //delete many
    // db.collection('Todos').deleteMany({text: 'get married'}).then((result) => {
    //     console.log(result);
    // });


    //delete one
    // db.collection('Todos').deleteOne({text: 'get married'}).then((result) => {
    //     console.log(result);
    // });

    //find one and delete
    // db.collection('Todos').findOneAndDelete({ completed: true }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Users').deleteMany({name: 'George'});
    db.collection('Users').findOneAndDelete({name: 'Mike'}).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    });


    // db.close();
});
