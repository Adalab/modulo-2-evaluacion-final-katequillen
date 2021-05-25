let favorites = [];

function cardListener() {
  const allSeries = document.querySelectorAll(".js-card");
  for (const cards of allSeries) {
    cards.addEventListener("click", handleClickItem);
  }
}
input.addEventListener("click", getList);
cardListener();

function handleClickItem(ev) {
  const faveCard = ev.currentTarget;
  let faveId = ev.currentTarget.id;
  const findFave = favorites.find((favoriteID) => favoriteID === selectedId);
  faveCard.classList.add(".clicked");
  if (showFav === undefined) {
    const selectedSeriesFav = arraySeries.find(
      (element) => element.id === parseInt(faveId)
    );
    favorites.push(selectedSeriesFav);
    upDateFav.classList.remove("card");
    upDateFav.classList.add("clicked");
  } else {
    let selectedSeriesFav2 = favorites.indexOf(showFav);
    favorites.splice(selectedSeriesFav2, 1);
    upDateFav.classList.add("card");
    upDateFav.classList.remove("clicked");
  }

  // function handleClickItem(ev) {
  //   const faveCard = ev.currentTarget;
  //   let faveId = ev.currentTarget.id;
  //   const findFave = favorites.find((favoriteID) => favoriteID === selectedId);

  //   faveCard.classList.add(".clicked");
  // }

  const cardClicked = document.querySelector(".card");
  cardClicked.addEventListener("click", handleClickItem);

  localStorage.setItem("series", JSON.stringify(favorites));
  paintSeriesFav(favorites);
  addEventListenerClose();
}
// function paintSeriesFav(favorites) {
//   let htmlCode = getHtmlCodeFav(favorites);
//   seriesFav.innerHTML = htmlCode;
// }
