const lists = document.querySelectorAll("li");

lists.forEach((list) => {
  list.style.color = "red";
});

document.querySelector("button").addEventListener("click", (e) => {
  alert("Button is clicked!");
});

document.querySelector("h1").innerHTML = "Goodbye World";
