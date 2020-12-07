const port = 5000;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const request = require('request');
const { response } = require('express');

app.use(bodyParser.json());

app.post('/', (req, res) => {
   console.log('dasada', req.body);
   Url = `http://proedge.me/test.php?rollnumber=${req.body.Name}`;
   request(Url, (err, response, body) => {
      if (err) {
         console.log('err');
      } else {
         console.log(body);
         res.send(body);
      }
   });
});

app.listen(port, () => {
   console.log('activated port');
});
