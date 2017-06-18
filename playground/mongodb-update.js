const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{

  if(err) {
    console.log('Unable to connect to MongoDB server');
    return;
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5946868ad16891107c3f98cb")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((reuslt) => {
    console.log(reuslt);
  });

  db.close();
});
