//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
  return console.log('Unable to connect to Mongodb server');
}
console.log('Connected to Mongodb server');
//find and update
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5979b615b9634421b8096f20')
},
{
  $set:{ location: 'Iran' },
  $inc:{ Age: - 10 }
}, {
  returnOrignal: false
}).then((result) => {
  console.log(result);
});
db.close();
});
