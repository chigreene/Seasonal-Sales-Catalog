// Jack-O-Lantern: function to handle clicking on submit in the modal and passing the input data to the server.

async function genericReviewHandler(event) {
  event.preventDefault();

  // uses data attributes to get item id and input id
  const form = event.currentTarget;
  const item_id = form.dataset.itemId;
  const reviewInputId = form.dataset.reviewInputId;

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
    document.location.replace("/seasons");
  }
}

const reviewForms = document.querySelectorAll(".review-form");
Array.from(reviewForms).forEach((form) => {
  form.addEventListener("submit", genericReviewHandler);
});
