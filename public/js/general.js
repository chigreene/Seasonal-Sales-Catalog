const seasonsButton = document.getElementById("seasonsButton");

if (seasonsButton) {
  seasonsButton.addEventListener("click", function () {
    window.location.href = "/seasons";
  });
}

document.getElementById("viewProfile").addEventListener("click", function () {
  window.location.href = "/u";
});

document.getElementById("fallButton").addEventListener("click", function () {
  window.location.href = "/seasons/fall";
});

document.getElementById("winterButton").addEventListener("click", function () {
  window.location.href = "/seasons/winter";
});

document.getElementById("springButton").addEventListener("click", function () {
  window.location.href = "/seasons/spring";
});

document.getElementById("summerButton").addEventListener("click", function () {
  window.location.href = "/seasons/summer";
});
