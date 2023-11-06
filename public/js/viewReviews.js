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

// handles winter cell hide view reviews

// function to hide all reviews and show the selected review
function updateWinterReviewDisplay(showReviewId) {
  const reviewIds = ["review5"];

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
function resetWinterDisplay() {
  console.log("hello world");
  document.getElementById("winterReviewDiv").style.display = "none";
  document.getElementById("winterItemDiv").classList.add("item-full-width");
}
// helper function to attach the event listeners to items
function attachWinterEventToItem(itemId, reviewId) {
  document.getElementById(itemId).addEventListener("click", function (event) {
    event.preventDefault();
    updateWinterReviewDisplay(reviewId);
  });
}

// attach the event listeners to items
attachWinterEventToItem("item-5", "review5");

// resets the display when the sample is clicked
document
  .getElementById("winterReviewDiv")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("helloWorld");
    resetWinterDisplay();
  });

// // adds spring hide view reviews logic

// function updateSpringReviewDisplay(showReviewId) {
//   const reviewIds = ["review7"];

//   // hide all reviews
//   reviewIds.forEach((reviewId) => {
//     document.getElementById(reviewId).style.display = "none";
//   });

//   // show the selected review
//   document.getElementById(showReviewId).style.display = "block";

//   // update the display of the reviewDiv and itemDiv elements
//   document.getElementById("winterReviewDiv").style.display = "block";
//   document.getElementById("winterItemDiv").classList.remove("item-full-width");
// }

// // function to reset display to original state
// function resetWSpringDisplay() {
//   console.log("hello world");
//   document.getElementById("winterReviewDiv").style.display = "none";
//   document.getElementById("winterItemDiv").classList.add("item-full-width");
// }
// // helper function to attach the event listeners to items
// function attachEventToItem(itemId, reviewId) {
//   document.getElementById(itemId).addEventListener("click", function (event) {
//     event.preventDefault();
//     updateSpringReviewDisplay(reviewId);
//   });
// }

// // attach the event listeners to items
// attachEventToItem("item-7", "review7");

// // resets the display when the sample is clicked
// document
//   .getElementById("winterReviewDiv")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("helloWorld");
//     resetSpringDisplay();
//   });
