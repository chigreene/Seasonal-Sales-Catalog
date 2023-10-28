
document
    .getElementById('showBtn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById("reviewDiv").style.display = "block";
        document.querySelector(".item").classList.remove("item-full-width");
    });

document
    .getElementById('hideBtn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        document.getElementById("reviewDiv").style.display = "none";
        document.querySelector(".item").classList.add("item-full-width");
    });