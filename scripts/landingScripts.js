// (function () {
//   var burger = document.querySelector(".burger");
//   var nav = document.querySelector("#" + burger.dataset.target);

//   burger.addEventListener("click", function () {
//     burger.classList.toggle("is-active");
//     nav.classList.toggle("is-active");
//   });
// })();

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  // Change the image source when the link is active
  // var activeLink = document.querySelector(".topnav a.active .star img");
  // if (activeLink) {
  //   activeLink.src = "../assets/landing/Star-grn.png";
  // }
}
