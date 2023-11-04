// function to hide all reviews and show the selected review
function updateSpringReviewDisplay(showReviewId) {
  const reviewIds = ["review7"];

  // hide all reviews
  reviewIds.forEach((reviewId) => {
    document.getElementById(reviewId).style.display = "none";
  });

  // show the selected review
  document.getElementById(showReviewId).style.display = "block";

  // update the display of the reviewDiv and itemDiv elements
  document.getElementById("winterReviewDiv").style.display = "block";
  document.getElementById("winterItemDiv").classList.remove("item-full-width");
}

// function to reset display to original state
function resetWSpringDisplay() {
  console.log("hello world");
  document.getElementById("winterReviewDiv").style.display = "none";
  document.getElementById("winterItemDiv").classList.add("item-full-width");
}
// helper function to attach the event listeners to items
function attachEventToItem(itemId, reviewId) {
  document.getElementById(itemId).addEventListener("click", function (event) {
    event.preventDefault();
    updateSpringReviewDisplay(reviewId);
  });
}

// attach the event listeners to items
attachEventToItem("item-7", "review7");

// resets the display when the sample is clicked
document
  .getElementById("winterReviewDiv")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("helloWorld");
    resetSpringDisplay();
  });