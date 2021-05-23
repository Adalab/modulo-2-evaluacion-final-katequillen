const input = document.querySelector(".js-search");
const list = document.querySelector(".list");
const form = document.querySelector(".js-form");

let arraySeries = [];

function getList() {
  const inputValue = input.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      arraySeries = new Array(data.length);
      for (let i = 0; i < data.length; i++) {
        arraySeries[i] = new Array(3);
        arraySeries[i][0] = new Array(2);
      }
      for (let i = 0; i < data.length; i++) {
        arraySeries[i][0] = data[i].show.image;
        console.log(arraySeries[i][0].medium);
        arraySeries[i][1] = data[i].show.name;
        arraySeries[i][2] = data[i].show.id;
      }
      paintList(arraySeries);
    });
}
function paintList(arraySeries) {
  let seriesList = "";
  console.log(arraySeries[5][0].medium);
  for (let i = 0; i < arraySeries.length; i++) {
    const image = arraySeries[i][0];
    const titleSeries = arraySeries[i][1];
    const identifier = arraySeries[i][2];
    const placeHolderRef =
      "https://via.placeholder.com/100x150/ffffff/666666/?text=TV";
    if (image === null) {
      seriesList = `<li id=${identifier}><div class="card"><img class="image" src="${placeHolderRef}" alt="series poster placeholder">${titleSeries}</div></li>`;
    } else {
      seriesList = `<li id=${identifier}><div class="card"><img class="image" src="${image.medium}" alt="series poster">${titleSeries}</div></li>`;
    }
    list.innerHTML += seriesList;
  }
}

function handleSubmit(event) {
  event.preventDefault();
}

function handleKeySearch(event) {
  event.preventDefault();
  getList();
}
form.addEventListener("submit", handleSubmit);
input.addEventListener("keyup", handleKeySearch);
