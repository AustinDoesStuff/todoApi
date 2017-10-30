const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$g2z4gicLWIaI1Fim7CaG5us/0jQ.mjazG2VyYSa2PGxG1LXnEslta';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 3
// };

// var token = jwt.sign(data, 'abc123');

// var decoded = jwt.verify(token, 'abc123');
// console.log(decoded);

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