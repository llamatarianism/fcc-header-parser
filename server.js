'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let apiResponse = {};
  
  apiResponse.ipAddress = req.headers['x-forwarded-for'];
  apiResponse.language = req.headers['accept-language'].split(',')[0];
  apiResponse.software = req.headers['user-agent'].split('(')[1].split(')')[0];
  
  res.json(apiResponse);
});

app.listen(process.env.PORT);