const http = require("http");

const greet = (req, res) => {
  console.log(req.method, "METHOD");
  console.log(req.url, "URL");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello World");
  res.end();
}

const server = http.createServer(greet);

server.listen(3000);
