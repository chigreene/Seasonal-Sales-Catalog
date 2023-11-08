document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const deleteButtons = document.querySelectorAll(".deleteButton");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", delButtonHandler);
  });
});

const delButtonHandler = async (event) => {
  const id = event.target.getAttribute("data-id");
  console.log("id is working", id);

  if (id) {
    const response = await fetch(`/user/delete/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/user");
    } else {
      alert("Failed to delete review");
    }
  }
};
