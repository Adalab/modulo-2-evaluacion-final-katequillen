const input = document.querySelector(".js-search");
const list = document.querySelector(".js-list");
const form = document.querySelector(".js-form");

let arraySeries = [];

function getList() {
  const inputValue = input.value;
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      arraySeries = new Array(data.length);
      for (let i = 0; i < data.length; i++) {
        arraySeries[i] = new Array(i);
        //arraySeries[i][0] = new Array(2);
        // }
        // for (let i = 0; i < data.length; i++) {
        arraySeries[i][0] = data[i].show.image;
        arraySeries[i][1] = data[i].show.name;
        arraySeries[i][2] = data[i].show.id;
      }
      generateList(arraySeries);
    });
}
function generateList(arraySeries) {
  let seriesList = "";

  for (let i = 0; i < arraySeries.length; i++) {
    const image = arraySeries[i][0];
    const titleSeries = arraySeries[i][1];
    const seriesId = arraySeries[i][2];
    const placeHolderRef =
      "https://via.placeholder.com/100x150/ffffff/666666/?text=TV";

    if (image === null) {
      seriesList = `<li data-id=${seriesId}>
        <div class="card favorite">
            <img class="image" src="${placeHolderRef}" alt="series poster placeholder">
                ${titleSeries}
        </div>
      </li>`;
    } else {
      seriesList = `<li data-id=${seriesId}>
         <div class="card favorite">
            <img class="image" src="${image.medium}" alt="series poster">
                ${titleSeries}
        </div>
      </li>`;
    }
    list.innerHTML += seriesList;
  }
}

function handleSubmit(event) {
  event.preventDefault();
}

function handleKeySearch(event) {
  getList();
}
form.addEventListener("submit", handleSubmit);
input.addEventListener("keyup", handleKeySearch);
