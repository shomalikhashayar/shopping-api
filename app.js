const url = "https://fakestoreapi.com/products";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  });
