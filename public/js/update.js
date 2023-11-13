document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const updateButtons = document.querySelectorAll(".updateButton");

  updateButtons.forEach((button) => {
    button.addEventListener("click", updateButtonHandler);
  });

  const updateForms = document.querySelectorAll(".update-form form");
  updateForms.forEach((form) => {
    form.addEventListener("submit", formSubmitHandler);
  });
});

const updateButtonHandler = (event) => {
  event.preventDefault();
  const id = event.target.getAttribute("data-id");
  const updateForm = document.getElementById(`update-form-${id}`);
  if (updateForm) {
    updateForm.style.display = "block";
    attachCancelEventHandler(id);
  }
};

const attachCancelEventHandler = (id) => {
  const cancelButton = document.querySelector(
    `#update-form-${id} .cancel-update`
  );
  if (cancelButton) {
    cancelButton.addEventListener("click", () => {
      const updateForm = document.getElementById(`update-form-${id}`);
      updateForm.style.display = "none";
    });
  }
};

const formSubmitHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute("data-id");
  const reviewTextArea = document.getElementById(`review-text-${id}`);
  const reviewText = reviewTextArea.value;

  if (id && reviewText) {
    const response = await fetch(`/api/post/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        review: reviewText,
      }),
      headers: {
        "content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("failed to update review.");
    }
  }
};
