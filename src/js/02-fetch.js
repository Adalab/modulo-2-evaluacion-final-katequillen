"use strict";

const input = document.querySelector(".js-search");
const list = document.querySelector(".js-list");
const form = document.querySelector(".js-form");

let arraySeries = [];

function getList(ev) {
  //ev.preventDefault();
  arraySeries = [];
  const inputValue = input.value;
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        arraySeries.push(element.show);
      });
      generateList(arraySeries);
    });
}

function insertHTML(series) {
  let htmlCode = "";
  for (const item of series) {
    if (item.image === null) {
      htmlCode += `<li id="${item.id} class="card favorite js-card">
          <img class="image placeholder" src="https://via.placeholder.com/100x150/ffffff/666666/?text=TV" alt="series poster placeholder">${item.name}
      </li>`;
    } else {
      htmlCode += `<li id="${item.id}" class="card favorite js-card">
          <img class="image" src="${item.image.medium}" alt="series poster">${item.name}
      </li>`;
    }
  }
  return htmlCode;
}

function generateList(arraySeries) {
  let htmlCode = insertHTML(arraySeries);
  list.innerHTML = htmlCode;
  cardListener();
}

function handleKeySearch(event) {
  getList();
}

input.addEventListener("keyup", handleKeySearch);
