var express = require('express');
var router = express.Router();
const mngc = require('mongodb').MongoClient;

router.get('/pizzas', function (req, res, next) {
    mngc.connect("mongodb://localhost:27017", { useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        const db = client.db("pizzeria");
        const cl = db.collection('pizza');
        cl.find().toArray((err, docs) => {
            if (err) throw err;
            //console.log(docs);
            res.send(docs);

        });

    });
});

router.get('/toppings', function (req, res, next) {
    mngc.connect("mongodb://localhost:27017", { useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        const db = client.db("pizzeria");
        const cl = db.collection('toppingsandingredients');
        cl.find().toArray((err, docs) => {
            if (err) throw err;
            //console.log(docs);
            res.send(docs);

        });

    });
});

module.exports = router;

