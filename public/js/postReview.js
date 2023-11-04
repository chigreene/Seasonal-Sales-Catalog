// Jack-O-Lantern: function to handle clicking on submit in the modal and passing the input data to the server.

async function pumpkinReviewHandler(event) {
  event.preventDefault();

  const review = document.querySelector("#formInput-1").value;

  const item_id = "1";
  // const item_id = document.querySelector("#id");

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

document
  .querySelector("#formId-1")
  .addEventListener("submit", pumpkinReviewHandler);

// Reeeses: handles taking the input from the modal and passing it to the server

async function reesesReviewHandler(event) {
  event.preventDefault();

  const review = document.querySelector("#reesesReviewInput").value;

  const item_id = "2";

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

document
  .querySelector("#reesesReviewForm")
  .addEventListener("submit", reesesReviewHandler);

// Skeletons: handles the submit button in the modal and passes the input to the server

async function skeletonReviewHandler(event) {
  event.preventDefault();

  const review = document.querySelector("#skeletonReviewInput").value;

  const item_id = "3";

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
document
  .querySelector("#skeletonReviewForm")
  .addEventListener("submit", skeletonReviewHandler);

// Witches Hat: handles the submit button in the modal and passes the input to the server

async function witchesHatReviewHandler(event) {
  event.preventDefault();

  const review = document.querySelector("#Witches-HatReviewInput").value;

  const item_id = "4";

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
document
  .querySelector("#Witches-HatReviewForm")
  .addEventListener("submit", witchesHatReviewHandler);
