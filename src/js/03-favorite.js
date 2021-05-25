let favorites = [];

function insertHTML(favorites) {
  let htmlCode = "";
  for (const item of favorites) {
    if (item.image == null) {
      htmlCode += `<li id="${item.id}" class="card js-card-fav">
        <div class="favorite">
          <img class="image" src="https://via.placeholder.com/100x150/ffffff/666666/?text=TV" alt="series poster placeholder">${item.name}
        </div>
      </li>`;
      debugger;
    } else {
      htmlCode += `<li id="${item.id}" class="card js-card-fav">
        <div class="favorite">
          <img class="image" src="${item.image.medium}" alt="series poster">${item.name}
        </div>
      </li>`;
    }
  }
  return htmlCode;
}

function cardListener() {
  const allSeries = document.querySelectorAll(".js-card");
  for (const cards of allSeries) {
    cards.addEventListener("click", faveList);
  }
}

function faveList(ev) {
  const faveCard = ev.currentTarget;
  let faveId = ev.currentTarget.id;
  const findFave = favorites.find((element) => element.id === parseInt(faveId));
  if (findFave === undefined) {
    const selectedSeriesFav = arraySeries.find(
      (element) => element.id === parseInt(faveId)
    );
    favorites.push(selectedSeriesFav);
    faveCard.classList.remove(".card");
    faveCard.classList.add(".clicked");
  } else {
    let selectedSeriesFav = favorites.indexOf(findFave);
    favorites.splice(selectedSeriesFav, 1);
    faveCard.classList.add(".card");
    faveCard.classList.remove(".clicked");
  }

  localStorage.setItem("series", JSON.stringify(favorites));
  generateFaveList(favorites);
  addEventListenerClose();
}
function generateFaveList(favorites) {
  const fav = document.querySelector(".js-favorites");
  let faveContent = faveList(favorites);
  fav.innerHTML = faveContent;
}
