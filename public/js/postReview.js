async function newFormHandler(event) {
  event.preventDefault();

  // const username = document.querySelector("#usernameInput").value;
  const review = document.querySelector("#pumpkinReviewInput").value;
  // const postId =
  //   window.location.pathname.split("/")[
  //     window.location.pathname.split("/").length - 1
  //   ];

  const response = await fetch(`/api/postReview/`, {
    method: "POST",
    body: JSON.stringify({
      review,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    alert("failed to post comment.");
  }
}

document
  .querySelector("#postReview")
  .addEventListener("submit", newFormHandler);
