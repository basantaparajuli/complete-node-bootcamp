// const hello = "Hello, world!";

// console.log(hello);

// this is the way to import the file using commonJS : the esm or ecma script module type of importing will be taught later...

// reading and writing a file...
// const fs = require("fs");

// blocking, synchronous way

// reading a file using synchronous way...

// const readFile = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(readFile);

// // writing a file using synchronous way

// const textOut = `This is what we know about the avocado: ${readFile}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("file has been created");

// non-blocking, asynchronous way...

// reading a file using asynchronous way...
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log(`Error occurred ${err}`);
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, (err) => {
//         console.log("File has been written 😂");
//       });
//     });
//     console.log(`${data2}\n`);
//   });
//   console.log(`This is just a data1 from the start file which is ${data1}\n`);
// });

// console.log(`will read a file ..... \n`);
