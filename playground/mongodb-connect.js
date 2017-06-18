// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    console.log('Unable to connect to MongoDB server.');
    return;
  }

    console.log('Connected to MongoDB server');

    /*db.collection('Todos').insertOne({
      text: 'Something to do',
      completed: false
    }, (err, result) => {
      if(err) {
        console.log('Unable to insert todo ', err);
        return;
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    });*/

/*    db.collection('Users').insertOne({
      name: 'Turdibay',
      age: 23,
      location: 'Nukus'
    }, (err, result) => {
      if(err) {
        console.log('Unable to insert to user ', err);
        return;
      }

      console.log(result.ops[0]._id.getTimestamp());
    });
*/
    db.close();

});
