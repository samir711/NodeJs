
console.log('Starting app.js');
const fs = require('fs');
const os = require('os');
//const notes = require('./notes.js')
const _ = require('lodash');

let fiteredArray = _.uniq(['Andrew',1,3,3,5,5,4,4]);
console.log(fiteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

//console.log('Result : ' + notes.add(9 , -2))

// let res = notes.addNote();
// console.log(res);

// Option 2
// fs.appendFileSync('greeting1.txt', 'Hello World!');

// Option 3
// let user = os.userInfo();

// fs.appendFile('greeting2.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
//   if (err) {
        
//         console.log('Unable to write to file');
//   };
// });