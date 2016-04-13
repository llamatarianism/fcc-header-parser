'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let apiResponse = {};
  
  apiResponse.ipAddress = req.headers['x-forwarded-for'];
  apiResponse.language = req.headers['accept-language'].match(/^.+\,/g).pop();
  apiResponse.software = req.headers['user-agent'].match(/\(.+\)/g).shift().pop();
  
  res.json(apiResponse);
});

app.listen(process.env.PORT);