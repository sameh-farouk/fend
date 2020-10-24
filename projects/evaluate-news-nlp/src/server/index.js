var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var cors = require('cors')
const dotenv = require('dotenv');
const { stringify } = require('querystring');
dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/api', function (req, res) {
    var https = require('follow-redirects').https;
    var fs = require('fs');
    var options = {
      'method': 'POST',
      'hostname': 'api.meaningcloud.com',
      'path': `/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&url=${encodeURIComponent(req.body.formtext)}`,
      'headers': {
      },
      'maxRedirects': 20
    };
    var request = https.request(options, function (respond) {
      var chunks = [];
  
      respond.on("data", function (chunk) {
        chunks.push(chunk);

      });
  
      respond.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        res.send(body.toString());

    });
  
      respond.on("error", function (error) {
        console.error(error);
      });
    });
    request.end();
})
