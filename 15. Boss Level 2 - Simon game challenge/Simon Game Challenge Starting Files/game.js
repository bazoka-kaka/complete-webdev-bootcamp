//variables
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let playing = false;
let currIdx = 0;

//finding next sequence
function nextSequence() {
  $("h1").text(`Level ${level}`);
  ++level;
  let random = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[random];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).addClass("pressed");
  setTimeout(function () {
    $("#" + randomChosenColor).removeClass("pressed");
  }, 100);
  let audio = new Audio(`sounds/${randomChosenColor}.mp3`);
  audio.play();
}

//click listener
$(".btn").click(function () {
  if (playing) {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    let next = checkSequence(userChosenColor);
    if (next) {
      userClickedPattern = [];
      nextSequence();
    }
  }
});

function checkSequence(userChosenColor) {
  if (gamePattern[currIdx] == userChosenColor) {
    currIdx++;
    return true;
  } else {
    playing = false;
    resetGame();
    return false;
  }
}

//reset game
function resetGame() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  currIdx = 0;
  $("h1").text(`Press A Key to Start`);
}

//play sound
function playSound(userChosenColor) {
  let audio = new Audio(`sounds/${userChosenColor}.mp3`);
  audio.play();
}

//animate press
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//key listener
$(document).keypress(function (event) {
  if (!playing && event.key == "a") {
    playing = true;
    nextSequence();
  }
});
