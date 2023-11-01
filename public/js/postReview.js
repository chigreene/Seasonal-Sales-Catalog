async function newFormHandler(event) {
  event.preventDefault();

  const review = document.querySelector("#pumpkinReviewInput").value;

  const item_id = "1";

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
  }
}

document
  .querySelector("#pumpkinReviewForm")
  .addEventListener("submit", newFormHandler);
