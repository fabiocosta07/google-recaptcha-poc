import express from 'express'
import fetch  from 'node-fetch'

const app = express()
const port = 3000

app.use("/static", express.static('public'));
// parse application/json
app.use(express.json())
app.use(express.urlencoded());

// for parsing application/xwww-
//app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/backend', function (req, res) {
  const params = new URLSearchParams();
  //secret v3
  params.append('secret', '6Ld3430cAAAAACJQWZv3qJK-vYcoLpIgeCkSTLuM');
  params.append('response', req.body.response);

  fetch('https://www.google.com/recaptcha/api/siteverify', {method: 'POST', body: params})
  .then(response => response.json())
  .then(data => res.send(data))
});

app.post('/backend_v2', function (req, res) {
  const params = new URLSearchParams();
  //secret v3
  params.append('secret', '6LfP5n0cAAAAAJFdRfwPumlVZkpePjcuA-BEOp6_');
  params.append('response', req.body['g-recaptcha-response']);

  fetch('https://www.google.com/recaptcha/api/siteverify', {method: 'POST', body: params})
  .then(response => response.json())
  .then(data => res.send(data))
});

app.post('/backend_v3', function (req, res) {
  const params = new URLSearchParams();
  //secret v3
  params.append('secret', '6Ld3430cAAAAACJQWZv3qJK-vYcoLpIgeCkSTLuM');
  params.append('response', req.body['g-recaptcha-response']);

  fetch('https://www.google.com/recaptcha/api/siteverify', {method: 'POST', body: params})
  .then(response => response.json())
  .then(data => res.send(data))
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})