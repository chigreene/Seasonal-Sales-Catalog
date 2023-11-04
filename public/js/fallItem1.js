document.getElementById("item-1").addEventListener("click", function (event) {
  event.preventDefault();
  //   removes other item reviews
  document.getElementById("review2").style.display = "none";
  document.getElementById("review3").style.display = "none";
  document.getElementById("review4").style.display = "none";

  // renders clicked items reviews
  document.getElementById("sampleClick").style.display = "block";
  document.getElementById("review1").style.display = "block";
  document.getElementById("itemClick").classList.remove("item-full-width");
});

document
  .getElementById("sampleClick")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("sampleClick").style.display = "none";
    document.getElementById("review1").style.display = "none";
    document.getElementById("itemClick").classList.add("item-full-width");
  });

// logic to hid show the second object

// document
//   .getElementById("fallItem2")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     // removes other item reviews
//     document.getElementById("review1").style.display = "none";
//     document.getElementById("review3").style.display = "none";
//     document.getElementById("review4").style.display = "none";

//     // renders clicked item reviews
//     document.getElementById("sampleClick").style.display = "block";
//     document.getElementById("review2").style.display = "block";
//     document.getElementById("itemClick").classList.remove("item-full-width");
//   });

// document
//   .getElementById("sampleClick")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("sampleClick").style.display = "none";
//     document.getElementById("review2").style.display = "none";
//     document.getElementById("itemClick").classList.add("item-full-width");
//   });

// // logic to hide show the third object

// document
//   .getElementById("fallItem3")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     //   removes other item reviews
//     document.getElementById("review1").style.display = "none";
//     document.getElementById("review2").style.display = "none";
//     document.getElementById("review4").style.display = "none";

//     // renders clicked items reviews
//     document.getElementById("sampleClick").style.display = "block";
//     document.getElementById("review3").style.display = "block";
//     document.getElementById("itemClick").classList.remove("item-full-width");
//   });

// document
//   .getElementById("sampleClick")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("sampleClick").style.display = "none";
//     document.getElementById("review3").style.display = "none";
//     document.getElementById("itemClick").classList.add("item-full-width");
//   });

// // logic to hide and show the forth object

// document
//   .getElementById("fallItem4")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     //   removes other item reviews
//     document.getElementById("review2").style.display = "none";
//     document.getElementById("review3").style.display = "none";
//     document.getElementById("review1").style.display = "none";

//     // renders clicked items reviews
//     document.getElementById("sampleClick").style.display = "block";
//     document.getElementById("review4").style.display = "block";
//     document.getElementById("itemClick").classList.remove("item-full-width");
//   });

// document
//   .getElementById("sampleClick")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("sampleClick").style.display = "none";
//     document.getElementById("review4").style.display = "none";
//     document.getElementById("itemClick").classList.add("item-full-width");
//   });
