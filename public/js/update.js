// Function to show the update form
function showUpdateForm(id) {
  var form = document.getElementById("update-form-" + id);
  form.style.display = "block";
}

// Function to hide the update form
function hideUpdateForm(id) {
  var form = document.getElementById("update-form-" + id);
  form.style.display = "none";
}

// Function to handle the submission of the update
function submitUpdate(id) {
  var updatedName = document.getElementById("item-name-" + id).value;
  var updatedReview = document.getElementById("review-text-" + id).value;

  // fetch call

  //   fetch("/update/:id", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: id,
  //       itemName: updatedName,
  //       review: updatedReview,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle success (possibly refresh the review display or close the form)
  //       console.log("Success:", data);
  //       hideUpdateForm(id); // Hide the update form after submission
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error("Error:", error);
  //     });

  //   console.log("Updating review with ID:", id);
  //   console.log("Updated name:", updatedName);
  //   console.log("Updated review:", updatedReview);
}

// Event delegation for Update button click
document.addEventListener("click", function (event) {
  if (event.target && event.target.className.includes("updateButton")) {
    var id = event.target.getAttribute("data-id");
    showUpdateForm(id);
  }
  // Event delegation for Cancel button click inside the form
  if (event.target && event.target.className.includes("cancel-update")) {
    var form = event.target.closest(".update-form");
    var id = form.getAttribute("data-id");
    hideUpdateForm(id);
  }
});

// Event delegation for form submission
document.addEventListener("submit", function (event) {
  if (event.target && event.target.className.includes("update-form")) {
    event.preventDefault();
    var id = event.target.getAttribute("data-id");
    submitUpdate(id);
  }
});
