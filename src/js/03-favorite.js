let globalData = [];
let favorites = [];

function itemListener() {
  const allItems = document.querySelectorAll(".favorite");
  for (const item of allItems) {
    item.addEventListener("click", handleClickItem);
  }
}

function handleClickItem(event) {
  const whereTheUserClicked = event.target; //no hace falta

  //identifica la li pulsada
  const whereIAddedTheEvent = event.currentTarget;

  console.log(globalData);
  console.log(whereIAddedTheEvent);
  //obtener la informacion asociada a la paleta

  const selectedId = whereIAddedTheEvent.dataset.id;

  //Buscar si la paleta clickeada esta en favoritos

  const isPresent = favorites.find((favoriteID) => favoriteID === selectedId);

  if (isPresent === undefined) {
    //el id en lo que he hecho click no esta en el array de favoritos
    favorites.push(selectedId);
  } else {
    favorites = favorites.filter((favoriteID) => favoriteID !== selectedId);
  }

  function itemListener() {
    const allCards = document.querySelectorAll(".js-card");
    for (const card of allCards) {
      card.addEventListener("click", handleClickCard);
    }
  }

  function handleClickCard(event) {
    const whereTheUserClicked = event.target; // No hace falta

    // Identificar la li pulsada
    const whereIAddedTheEvent = event.currentTarget;

    // Obtener la información asociada a la paleta
    const seriesEventId = whereIAddedTheEvent.dataset.id;

    // Buscar si la paleta clickada está en favoritos
    const isPresent = favorites.find(
      (favoriteId) => favoriteId === seriesEventId
    );

    if (isPresent === undefined) {
      // El ID de la paleta en la que ha hecho click no está en el array de favoritos
      favorites.push(seriesEventId);
    } else {
      favorites = favorites.filter(
        (favoriteId) => favoriteId !== seriesEventId
      );
    }

    // Re-pintamos las tarjetas de paletas teniéndo en cuenta el filtro.
    renderFilteredSeries();
  }
}
