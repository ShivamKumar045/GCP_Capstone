const express = require("express");
const app = express();
const request = require('request');
const path = require('path');
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

// serve your css as static

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
let hour;
let minutes;

app.get("/time", (req, res) => {
  request('https://hello-gateway-8lr1vymt.uc.gateway.dev/hello?key=AIzaSyDBwYz5bSGRoV7xN02kU5c3NVuD-OzNnnQ', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  hour=body[0].hour
  minutes = body[0].minutes
  
  console.log(hour,minutes);
 
 
});

res.render("index",{"hour":hour,"minutes":minutes });
});
