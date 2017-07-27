//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
  return console.log('Unable to connect to Mongodb server');
}
console.log('Connected to Mongodb server');

//delete multiple
// db.collection('Users').deleteMany({name: 'Muhammad Yousaf Al Raza'}).then((result) => {
//   console.log(result);
// });

//delete One
// db.collection('Users').deleteOne({name: 'Muhammad'}).then((result) => {
//   console.log(result);
// });

//find one and delete one
// db.collection('Users').findOneAndDelete({name: 'Muhammad'}).then((result) => {
//   console.log(result);
// });

//delete one by ID
db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5979b6137aafb51cc812d1eb')
}).then((result)=> {
  console.log(result);
});

db.close();
});
