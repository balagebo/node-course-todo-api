const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }

    // db.collection('Todos').insertOne({
    //     text: 'Elkezdeni valamit',
    //     completed: false
    // }, (err, result) => {
    //     if (err) return 'Nem sikerült beszúrni';
    //
    //     console.log(JSON.stringify(result.ops));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Balage',
    //     age: 330,
    //     location: 'Butapest',
    //     _id: '123',
    // }, (err, result) => {
    //     if (err) return 'Nem sikerült beszúrni';
    //
    //     console.log(JSON.stringify(result.ops));
    // });

    db.close();
});
