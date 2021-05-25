"use strict";

const input = document.querySelector(".js-search");
const list = document.querySelector(".js-list");
const form = document.querySelector(".js-form");

let arraySeries = [];

function getList() {
  ev.preventDefault();
  
  const inputValue = input.value;
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      arraySeries = [];
      for (const series of data) {
        const seriesObject = {
          id: series.show.id,
          name: series.show.name,
          image: series.show.image,
    )};
  
    if (series.show.image === null) {
      seriesObject.image = "https://via.placeholder.com/100x150/ffffff/666666/?text=TV";
    } else {
      seriesObject.image = series.show.image.medium
    }
    series.push(seriesObject);
  }
  generateList(arraySeries);
    )};
}

function generateList(arraySeries) {
  let htmlCode = insertHTML(arraySeries);
  list.innerHTML = htmlCode;
  itemListener();
}

function itemListener() {
  const allCards = document.querySelectorAll(".js-card");
  for (const cards of allCards) {
    cards.addEventListener("click", handleFavList);
  }
}

function insertHTML(series) {
  let htmlCode = "";
  for (const item of series) {
    if (item.image === null) {
      htmlCode += `<li data-id=${seriesId}>
        <div class="card favorite js-card">
          <img class="image" src="${placeHolderRef}" alt="series poster placeholder">${titleSeries}
        </div>
      </li>`;
    } else {
      htmlCode += `<li data-id=${seriesId}>
        <div class="card favorite js-card">
          <img class="image" src="${image.medium}" alt="series poster">${titleSeries}
        </div>
      </li>`;
    }
  }
  return htmlCode;
}

// function generateList(arraySeries) {
//   let seriesList = "";

//   for (let i = 0; i < arraySeries.length; i++) {
//     const image = arraySeries[i][0];
//     const titleSeries = arraySeries[i][1];
//     const seriesId = arraySeries[i][2];
//     const placeHolderRef =
//       "https://via.placeholder.com/100x150/ffffff/666666/?text=TV";

//     if (image === null) {
//       seriesList = `<li data-id=${seriesId}>
//         <div class="card favorite js-card">
//             <img class="image" src="${placeHolderRef}" alt="series poster placeholder">
//                 ${titleSeries}
//         </div>
//       </li>`;
//     } else {
//       seriesList = `<li data-id=${seriesId}>
//          <div class="card favorite js-card">
//             <img class="image" src="${image.medium}" alt="series poster">
//                 ${titleSeries}
//         </div>
//       </li>`;
//     }
//     list.innerHTML += seriesList;
//   }
// }



function handleKeySearch(event) {
  getList();
}
form.addEventListener("submit", handleSubmit);
input.addEventListener("keyup", handleKeySearch);
