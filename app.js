const express = require('express');
const app = express();
const port = 3000;
const _ = app.listen(port);

app.get('/', (req, res) => res.json('hi, jamsdev'));
