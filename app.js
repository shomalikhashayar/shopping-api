const url = "https://fakestoreapi.com/products";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log("Khashayar Shomali");

    let data = "";
    jsonData.map((values) => {
      data += `
        <div class="card">
        <h2 class="title">${values.title}</h2>
        <img  class ="images" src="${values.image}" alt="" title="${values.title}" />
        <p class="description">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${"$" + values.price}</p>
      </div>
      `;

      document.querySelector(".container").innerHTML = data;
    });
  })
  .catch((err) => {
    console.log(err);
  });
