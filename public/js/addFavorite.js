async function favoriteHandler(event) {
    event.preventDefault();
  
    // uses data attributes to get item id and input id
    const element = event.currentTarget;
    const item_id = element.dataset.itemId;
  
    const response = await fetch(`/api/favorite/${item_id}`, {
      method: "GET",
    });
    if (!response.ok) {
      console.log("error in addFavorite");
      alert("failed to favorite item.");
    } else {
      document.location.replace("/");
    }
  }
  
  const favoriteElements = document.querySelectorAll(".favorite");
  Array.from(favoriteElements).forEach((element) => {
    element.addEventListener("click", favoriteHandler);
  });