// nodeJS create a server..

const http = require("http");
const PORT = 8080;

const server = http.createServer((req, res) => {
  //   console.log(req); req is something that is sent by the frontend and res is something that is sent by backend to the frontend...
  res.end("Hello, world!");
});

server.listen(PORT, () => {
  console.log(`Server is running on the port: ${PORT}`);
});
