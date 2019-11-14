const express = require("express");
const app = express();
const port = 3000; //this is where we are displaying
const bp = require("body-parser");

app.use(bp.urlencoded({ extended: true }));
//using url encoding so spaces don't destroy us all

app.use(express.static("public"));
//lets us use the folder for the text of the app, instead of having to put it here

app.post("/submit", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  //this tells the browser the request was successful

  res.write("<html><body>");
  res.write(`<p> name: ${req.body["name"]} </p>`);
  res.write(`<p> email: ${req.body["email"]} </p>`);
  res.write(`<p> comment: ${req.body["textarea"]} </p>`);
  res.write("</body></html>");
  res.end();
  //this writes the html we want to return from the request. and BOY do I not enjoy this syntax
});

app.listen(port, () => console.log("IT RAN"));
