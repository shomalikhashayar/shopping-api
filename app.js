// Fetch API
const spinner = document.querySelector(".spinner");

function loadData() {
  spinner.removeAttribute("hidden");
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      spinner.setAttribute("hidden", "");
      console.log("Khashayar Shomali");

      let dataObject = "";
      jsonData.map((values) => {
        dataObject += `
        <div class="card">
        <h2 class="title">${values.title}</h2>
        <img  class ="images" src="${values.image}" alt="" title="${
          values.title
        }" />
        <p class="description">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${"$" + values.price}</p>
      </div>
      `;

        document.querySelector(".container").innerHTML = dataObject;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
