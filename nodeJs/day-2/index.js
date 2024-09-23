const http = require("http");
const server = http.createServer((req, res) => {
  //   res.end("Hello Techno , welcome to http server of nodejs");
  if (req.url == "/") {
    res.end("welcome to home route");
  } else if (req.url == "/about") {
    res.end("welcome to about route");
  } else {
    res.end("unknown route");
  }
});
server.listen(3000, "127.0.0.1", () => {
  console.log("server is running on port 3000");
});
