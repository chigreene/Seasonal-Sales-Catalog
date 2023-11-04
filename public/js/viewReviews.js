// function to hide all reviews and show the selected review
function updateReviewDisplay(showReviewId) {
  const reviewIds = ["review1", "review2", "review3", "review4"];

  // hide all reviews
  reviewIds.forEach((reviewId) => {
    document.getElementById(reviewId).style.display = "none";
  });

  // show the selected review
  document.getElementById(showReviewId).style.display = "block";

  // update the display of the reviewDiv and itemDiv elements
  document.getElementById("reviewDiv").style.display = "block";
  document.getElementById("itemDiv").classList.remove("item-full-width");
}

// function to reset display to original state
function resetDisplay() {
  document.getElementById("reviewDiv").style.display = "none";
  document.getElementById("itemDiv").classList.add("item-full-width");
}
// helper function to attach the event listeners to items
function attachEventToItem(itemId, reviewId) {
  document.getElementById(itemId).addEventListener("click", function (event) {
    event.preventDefault();
    updateReviewDisplay(reviewId);
  });
}

// attach the event listeners to items
attachEventToItem("item-1", "review1");
attachEventToItem("item-2", "review2");
attachEventToItem("item-3", "review3");
attachEventToItem("item-4", "review4");

// resets the display when the sample is clicked
document
  .getElementById("reviewDiv")
  .addEventListener("click", function (event) {
    event.preventDefault();
    resetDisplay();
  });
