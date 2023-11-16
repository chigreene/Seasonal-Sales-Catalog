document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    const unfavoriteButtons = document.querySelectorAll(".unfavorite");
  
    unfavoriteButtons.forEach((button) => {
      button.addEventListener("click", unfavoriteHandler);
    });
  });
  
  const unfavoriteHandler = async (event) => {
    const id = event.target.getAttribute("data-id");
    console.log(id);
  
    if (id) {
      const response = await fetch(`/api/favorite/unfavorite/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to unfavorite");
      }
    }
  };