// Event Loop , Timers functions , call back hell , Promises , Asyn await , constructor , classes

//Hoisting - when we have the info about the variables even before the initialization

// a = 20;
// console.log(a);
// var a;

//timers function

// let timeout = setTimeout(() => {
//   console.log("hello techno");
// }, 3000);

// let n;

// let btn = document.querySelector("#btn");
// let btn2 = document.querySelector("#btn2");
// btn.onclick = function () {
//   clearInterval(interval);
// };
// btn2.onclick = function () {
//   clearTimeout(timeout);
// };
// let interval = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

//Async js

// let a = 20;
// let b = 30;
// console.log(a + b);

// setTimeout(() => {
//   console.log("hello techno");
// }, 2000);
// console.log(a);
// console.log(b);

//for tackling the asynchronus js

//--------call  backs hell--------

// function step1(callback) {
//   setTimeout(() => {
//     console.log("step 1 completed");
//     callback();
//   }, 1000);
// }
// function step2(callback) {
//   setTimeout(() => {
//     console.log("step 2 completed");
//     callback();
//   }, 1000);
// }
// function step3(callback) {
//   setTimeout(() => {
//     console.log("step 3 completed");
//     callback();

//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps completed");
//     });
//   });
// });

//------------Promises---------------

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         let data = {
//           firstName: "Dikshit",
//           lastName: "Darji",
//         };
//         return resolve(data);
//       } catch (error) {
//         return reject(error);
//       }
//     }, 2000);
//   });
// }

// let fetchdata = fetchData();
// console.log(fetchdata);

//promise states --- pending , fulfilled , rejected
//pending -- fulfill
//pending -- reject

//for extracting the data in promise

// fetchdata
//   .then(data => {
//     console.log(data); //in fulfilled state
//   })
//   .catch(error => {
//     console.log(error); //in rejected state
//   });
