const EventEmitter = require("events");
const event = new EventEmitter();
const http = require("http");
// event.on("myName", (name,age) => {
//   console.log(`Hello my name is ${name} and age is ${age} , Second  Event Emitter`);
// });
// event.on("myName", (name,age) => {
//   console.log(`Hello my name is ${name} and age is ${age} , Second  Event Emitter,Second Event Emitter`);
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
    event.emit("homePageAceessed");
  } else if (req.url === "/about") {
    res.end("about page");
    event.emit("aboutPageAccessed");
  } else {
    res.end("Unknown Route");
    event.emit("unknownPageAccessed", req.url);
  }
});

// event.emit("myName");
event.on("homePageAccessed", () => {
  console.log("Home Api Called");
});
event.on("aboutPageAccessed", () => {
  console.log("About Api Called");
});
event.on("unknownPageAccessed", url => {
  console.log("Unknown api called ", url);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server is running on 3000");
});
