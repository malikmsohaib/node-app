'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 text-align="center;" style="color:green;">My Java Home Tech App - version-10!!</h1> \n <h2 text-align="center;" style="color:blue;">Welcome to Java Home-Tech - Javaapp!!</h2> \n <h3 text-align="center;" style="color:red;">Java Home Tech App - version-10!!</h3> \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
