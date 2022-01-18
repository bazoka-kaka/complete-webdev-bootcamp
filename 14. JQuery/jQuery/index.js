// for (let i = 0; i < document.querySelectorAll("button").length; ++i) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "red";
//   });
// }

$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5, margin: 10 });
});
