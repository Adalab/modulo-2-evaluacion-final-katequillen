let globalData = [];
let favorites = [];

const isPresent = favorites.find((favoriteID) => favoriteID === selectedId);

function itemListener() {
  const cards = document.querySelectorAll(".js-card");
  for (const card of cards) {
    cards.addEventListener("click", handleClickItem);
  }
}

function handleClickItem(event) {
  //const whereTheUserClicked = event.target; //no hace falta

  //identifica la li pulsada
  const whereIAddedTheEvent = event.currentTarget;

  console.log(globalData);
  console.log(whereIAddedTheEvent);
  //obtener la informacion asociada a la paleta

  const selectedId = whereIAddedTheEvent.dataset.id;

  //Buscar si la paleta clickeada esta en favoritos

  if (isPresent === undefined) {
    //el id en lo que he hecho click no esta en el array de favoritos
    favorites.push(selectedId);
  } else {
    favorites = favorites.filter((favoriteID) => favoriteID !== selectedId);
  }

  // Re-pintamos las tarjetas de paletas teniéndo en cuenta el filtro.
  renderFilteredSeries();
}

function handleCardClick(ev) {
  const selectedCard = ev.currentTarget;

  selectedCard.classList.add(".clicked");
}

const cardClicked = document.querySelector(".card");
cardClicked.addEventListener("click", handleCardClick);
