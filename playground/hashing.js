const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 3
};

var token = jwt.sign(data, 'abc123');

var decoded = jwt.verify(token, 'abc123');
console.log(decoded);

// var message = 'dis a test';
// var hash = SHA256(message).toString();

// var data = {
//     id: 4
// };

// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'salt').toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + 'salt').toString();

// console.log('Message: ', message);
// console.log('Hash: ', hash);

// if (resultHash === token.hash) {
//     console.log('Success');
// } else {
//     console.log('invalid data');
// }