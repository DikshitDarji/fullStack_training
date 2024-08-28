//https://fakestoreapi.com/products

// function fetchApi() {
//   let data = fetch("https://fakestoreapi.com/products");
//   console.log("hello techno");
//   return data;
// }
// let fetchapi = fetchApi();
// fetchapi
//   .then(res => {
//     console.log(res.json());
//   })
//   .catch(error => {
//     console.log(error);
//   });

//assignment - make 20 cards and insert title , image , discription and price into it using api

document.getElementById("btn").addEventListener("click", () => {
  let div = `<div style="width:300px height:400px border:2px solid black">
    <h1>title</h1><img src="" alt=""></img><p>Price</p><p>Discription</p>
    </div>`;
  fetch("https://fakestoreapi.com/products")
    .then(value => {
      console.log(value.json());
    })
    .then(items => console.log(items));
});
