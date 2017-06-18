const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    console.log('Unable to connect to MongoDB server', err);
  }

  console.log('Connected to MongoDB server');

  /*db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });*/

  db.collection('Todos').find().count().then((count)=>{
    console.log(`todos count: ${count}`);
  }, (err)=>{
    console.log('Unable to fetch todos count');
  });

  db.close();
});
