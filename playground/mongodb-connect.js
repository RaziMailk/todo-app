const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'malik', age:21};
// var {name} = user;
// var {age} = user;
// console.log(name ,  age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
  return console.log('Unable to connect to Mongodb server');
}

console.log('Connected to Mongodb server');

// db.collection('Todos').insertOne({
//   text: 'someting to do',
//   completed: false
// }, (err, result) => {
//   if (err) {
//   return console.log('unable to insert todos', err);
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

// db.collection('Users').insertOne({
//   name: 'Muhammad Yousaf Al Raza',
//   Age: 21,
//   location: 'Pakistan'
// }, (err, result) =>{
//   if (err) {
//     return console.log('Unable to insert in Users');
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
//
// });

db.close();


});
