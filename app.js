// core modules => 
//  
// 1. http : Launch a server send requests.
// 2. https : Launch a SSL server.
// 3. fs : 
// 4. path :
// 5. os :
//

const http = require('http'); // a simple way to import the file. ALways remember to omit the ./ before the file name.
const fs = require('fs');
// function aditya(req,res) {
  //
// }

// http.createServer(aditya);

// http.createServer(function (req, res) {
  //
// })

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); never call this on your code. 

  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first web page from the node js</title>');
    res.write('</head>');
    res.write('<body><form action = "/messgae method = "POST"><input type = "text" name = "message"><button type = "submit">Send</button></input></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body =[];
    req.on('data', (chunk) => {
      body.push(chunk);
    }) 
    req.on('end',() => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
});
    fs.writeFileSync('message.txt', message);
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first web page from the node js</title>');
  res.write('</head>');
  res.write('<body><h1>Hello from my node js server</h1></body>');
  res.write('</html>');
  res.end();
})

server.listen(3000);



















