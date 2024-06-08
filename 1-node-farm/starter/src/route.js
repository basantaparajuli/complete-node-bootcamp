// This is a file that we have created so that we can easily manipulate route and work on different things...
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  //   console.log(req.url);

  const pathName = req.url;

  if (pathName === "/") {
    res.end("This is the default page.");
  } else if (pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product..");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8080, () => {
  "Server  is running on port: 8080";
});
