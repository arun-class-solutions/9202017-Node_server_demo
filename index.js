// const http = require("http");
//
// const greet = (req, res) => {
//   if (/^\/hello$/.test(req.url) && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("Hello World");
//     res.end();
//   }
// }
//
// const server = http.createServer(greet);
//
// server.listen(3000);

const express = require("express");
const app = express();

// Configure Node to render using EJS
app.set("view engine", "ejs");

app.get("/hello/:name", (req, res) => {
  // res.send(`Hello ${req.params.name}`);
  res.render("index", {
    name: req.params.name
  });
});

app.listen(3000);
