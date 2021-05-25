let favorites = [];

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
    favorites.splice(selectedSeriesFav);
    faveCard.classList.add(".card");
    faveCard.classList.remove(".clicked");
  }

  const cardClicked = document.querySelector(".card");
  cardClicked.addEventListener("click", faveList);

  localStorage.setItem("series", JSON.stringify(favorites));
  paintSeriesFav(favorites);
  addEventListenerClose();
}
function generateFaveList(favorites) {
  const fav = document.querySelector(".js-favorites");
  let faveContent = faveList(favorites);
  fav.innerHTML = faveContent;
}
