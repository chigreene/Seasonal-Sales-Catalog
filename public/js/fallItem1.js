document
    .getElementById('fallItem1')
    .addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById("sampleClick").style.display = "block";
        document.getElementById("itemClick").classList.remove("item-full-width");
    });

document
  .getElementById("sampleClick")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("sampleClick").style.display = "none";
    document.getElementById("itemClick").classList.add("item-full-width");
  });
