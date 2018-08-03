'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post('/', (req, res) => {
    var body = req.body;
    var result;
    body.score >= 0 || body.score <= 100 ? body.score < 80 ? result = body.name + 'は不合格です' :  result = body.name + 'は合格です' : result = 'score error' 
    // 三項演算子を習った
    res.send({'message': result});
});
app.listen(PORT);
console.log(`listening on *: ${PORT}`);
