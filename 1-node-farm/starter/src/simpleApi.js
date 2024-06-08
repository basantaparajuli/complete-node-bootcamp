// API-> is a service from which we can fetch or get data.

const http = require("http");
const url = require("url");
const fs = require("fs");

const readData = fs.readFile(
  `${__dirname}/dev-data/data.json`,
  "utf-8",
  (err, data) => {
    const dataObject = JSON.parse(data);
  }
);

// creating a server first

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(readData);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not found</h1>");
  }
});

server.listen(8080, () => {
  console.log(`Server is running at PORT:8080`);
});
