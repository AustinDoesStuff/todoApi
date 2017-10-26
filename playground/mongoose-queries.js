const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '59f220524a71fea5caccadb144';

// if(!ObjectID.isValid(id)){
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log(todo);
// }).catch((e) => {
//   console.log(e);  
// });

var userId = '59ee2b629604673d8430b22e';

User.findById(userId).then((user) => {
    console.log(user);
}).catch((e) => {
    console.log(e);
});

