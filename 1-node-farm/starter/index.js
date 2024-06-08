// completing the product!!!
const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");

// requiring slugify module.. as we installed using npm i slugify

const slugify = require("slugify");

// slug is the last part of the url that identifies the resource that website is showing or displaying...

// reading the templates....

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

// this is for reading the json file..

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObject = JSON.parse(data);

const slugs = dataObject.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

// server

// console.log(slugify("Fresh Avocados", { lower: true }));

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  //   overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const cardsHtml = dataObject
      .map((el) => replaceTemplate(tempCard, el))
      .join("");

    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);

    // console.log(cardsHtml);
    res.end(output);
  }
  //   product page
  else if (pathname === "/product") {
    // console.log(query);

    const product = dataObject[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(output);
  }
  // api page
  else if (pathname === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  }
  //   not found
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8080, () => {
  console.log(`Server is running at port: 8080`);
});
