const input = document.querySelector(".js-search-box");
const searchButton = document.querySelector(".js-search-button");

const button = document.querySelector(".js-search-button");
button.addEventListener("click", getDataSeries);

function getDataSeries(ev) {
    ev.preventDefault();

const inputValue = document.querySelector(".js-search-box").value;
console.log(inputValue);

function getDataSeries() {
  const input = document.querySelector(".js-search-box").value;
  const inputValue = input.value;
  

  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector(".js-container");
      container.innerHTML = data.name;
    })
    .catch((err) => {
      console.error("Se ha producido un error:", err);
    });
}

function generarHtml() {
  console.log();
  for (let i = 0; i < arr.length; i++) {
    let valueArray = arr[i];
    console.log(valueArray);
    const ul = document.querySelector("#ul");
    ul.innerHTML += "<li>" + arr[i] + "</li>";
  }
}

const button = document.querySelector(".js-search-button");
button.addEventListener("click", getDataSeries);
