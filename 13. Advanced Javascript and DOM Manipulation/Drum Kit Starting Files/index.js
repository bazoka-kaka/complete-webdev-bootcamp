let drum = document.querySelectorAll(".drum");

function soundDrum(keyClicked) {
  let audio;
  switch (keyClicked) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    default:
  }
  audio.play();
}

for (let i = 0; i < drum.length; ++i) {
  drum[i].addEventListener("click", function () {
    soundDrum(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  soundDrum(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(key) {
  let button = document.querySelector("." + key);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}
