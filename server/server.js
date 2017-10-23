var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    }
})

var newTodo = new Todo({
    text: 'finish the course             ',
});

var newUser = new User({
    email: 'a@a.com'
});

// newTodo.save().then((doc) => {
//     console.log(`saved todo: ${doc}`);
// }, (err) => {
//     console.log('Unable to save todo: ', err);
// });

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to add User: ', err);
});