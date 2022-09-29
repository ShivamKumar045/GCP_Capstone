const express = require("express");
const app = express();
const request = require('request');
const path = require('path');
const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, HOST, (req, res) => {
    console.log(`Node.js server listening on http://${HOST}:${PORT}`);
  });

// serve your css as static

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
let hour;
let minutes;

app.get("/time", (req, res) => {
  request('https://us-central1-qwiklabs-gcp-00-7b95a641de8f.cloudfunctions.net/helloGET', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  hour=body[0].hour
  minutes = body[0].minutes
  
  console.log(hour,minutes);
 
 
});

res.render("index",{"hour":hour,"minutes":minutes });
});
