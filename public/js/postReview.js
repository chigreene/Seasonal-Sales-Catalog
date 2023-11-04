// Jack-O-Lantern: function to handle clicking on submit in the modal and passing the input data to the server.

async function genericReviewHandler(event) {
  event.preventDefault();

  // uses data attributes to get item id and input id
  const form = event.currentTarget;
  const item_id = form.dataset.itemId;
  const reviewInputId = form.dataset.reviewInputId;

  console.log("hello world", item_id, reviewInputId);

  const review = document.getElementById(reviewInputId).value;
  console.log(review);

  const response = await fetch(`/api/post/${item_id}`, {
    method: "POST",
    body: JSON.stringify({
      review,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.log("error in PostReview");
    alert("failed to post comment.");
  } else {
    document.location.replace("/");
  }
}

const reviewForms = document.querySelectorAll(".review-form");
Array.from(reviewForms).forEach((form) => {
  form.addEventListener("submit", genericReviewHandler);
});

// Reeeses: handles taking the input from the modal and passing it to the server

// async function reesesReviewHandler(event) {
//   event.preventDefault();

//   const review = document.querySelector("#reesesReviewInput").value;

//   const item_id = "2";

//   const response = await fetch(`/api/post/${item_id}`, {
//     method: "POST",
//     body: JSON.stringify({
//       review,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (!response.ok) {
//     console.log("error in PostReview");
//     alert("failed to post comment.");
//   } else {
//     document.location.replace("/");
//   }
// }

// document
//   .querySelector("#reesesReviewForm")
//   .addEventListener("submit", reesesReviewHandler);

// // Skeletons: handles the submit button in the modal and passes the input to the server

// async function skeletonReviewHandler(event) {
//   event.preventDefault();

//   const review = document.querySelector("#skeletonReviewInput").value;

//   const item_id = "3";

//   const response = await fetch(`/api/post/${item_id}`, {
//     method: "POST",
//     body: JSON.stringify({
//       review,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (!response.ok) {
//     console.log("error in PostReview");
//     alert("failed to post comment.");
//   } else {
//     document.location.replace("/");
//   }
// }
// document
//   .querySelector("#skeletonReviewForm")
//   .addEventListener("submit", skeletonReviewHandler);

// // Witches Hat: handles the submit button in the modal and passes the input to the server

// async function witchesHatReviewHandler(event) {
//   event.preventDefault();

//   const review = document.querySelector("#Witches-HatReviewInput").value;

//   const item_id = "4";

//   const response = await fetch(`/api/post/${item_id}`, {
//     method: "POST",
//     body: JSON.stringify({
//       review,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (!response.ok) {
//     console.log("error in PostReview");
//     alert("failed to post comment.");
//   } else {
//     document.location.replace("/");
//   }
// }
// document
//   .querySelector("#Witches-HatReviewForm")
//   .addEventListener("submit", witchesHatReviewHandler);
