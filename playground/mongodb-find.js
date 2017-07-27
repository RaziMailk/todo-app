//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
  return console.log('Unable to connect to Mongodb server');
}
console.log('Connected to Mongodb server');

// db.collection('Todos').find({completed: false}).toArray().then((docs) => {
//   console.log('Todos');
//     return console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('unable to find todos');
// });
//
//



// db.collection('Todos').find().count().then((count) => {
// console.log(`Todos count: ${count}` );
// }, (err) => {
//   console.log('unable to fetch todos');
// });

db.collection('Users').find({name: 'Muhammad Yousaf Al Raza'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs , undefined, 2));
}, (err) => {
  console.log('unable to fetch todos');
});


db.close();
});
