const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/redux-todo');

app.use(bodyParser.json());

app.get('/api/todos', (req, res) => {
  res.json({ msg: 'sup '});
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));
