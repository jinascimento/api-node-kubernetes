var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({ title: 'Kubernetes' });
});


export default app;
