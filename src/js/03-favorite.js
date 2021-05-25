let favorites = [];

function insertHTMLFav(favorites) {
  let htmlCode = "";
  for (const item of favorites) {
    if (item.image == null) {
      htmlCode += `<li id="${item.id}" class="card favorite js-card-fav">
          <img class="image" src="https://via.placeholder.com/100x150/ffffff/666666/?text=TV" alt="series poster placeholder">${item.name}
      </li>`;
    } else {
      htmlCode += `<li id="${item.id}" class="card favorite js-card-fav">
          <img class="image" src="${item.image.medium}" alt="series poster">${item.name}
      </li>`;
    }
  }
  return htmlCode;
}

function cardListener() {
  const allSeries = document.querySelectorAll(".js-card");
  for (const items of allSeries) {
    items.addEventListener("click", faveList);
  }
}

function faveList(ev) {
  const faveItem = ev.currentTarget;
  let faveId = ev.currentTarget.id;
  const findFave = favorites.find((element) => element.id === parseInt(faveId));
  if (findFave === undefined) {
    const selectedFave = arraySeries.find(
      (element) => element.id === parseInt(faveId)
    );
    favorites.push(selectedFave);
    faveItem.classList.remove(".card");
    faveItem.classList.add(".clicked");
  } else {
    let selectedFave = favorites.indexOf(findFave);
    favorites.splice(selectedFave, 1);
    faveItem.classList.add(".card");
    faveItem.classList.remove(".clicked");
  }

  localStorage.setItem("series", JSON.stringify(favorites));
  generateFaveList(favorites);
}
function generateFaveList(favorites) {
  const fav = document.querySelector(".js-favorites");
  let faveContent = insertHTMLFav(favorites);
  fav.innerHTML = faveContent;
}

favorites = JSON.parse(localStorage.getItem("series"));
generateFaveList(favorites);
