require("dotenv").config();

const token = process.env.gpt_key;

var responseDiv = document.querySelector("#responseDiv");
var inputText = document.querySelector("#gptInput");
var submitBtn = document.querySelector("#submitBtn");

function costumeRecommendation() {
  var recInput = inputText.value;

  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content:
            "Please give me a costume recommendation from the following key words " +
            recInput,
        },
      ],
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var recommendation = document.createElement("p");
      recommendation.textContent = data.choices[0].message.content;
      responseDiv.append(recommendation);
      console.log(data);
    });
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  costumeRecommendation();
});
