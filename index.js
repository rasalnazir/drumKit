for (i = 0; i < 7; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    sound(this.innerHTML);
    animation(this.innerHTML);
  });
}

document.addEventListener("keyup", function() {
  sound(event.key);
  animation(event.key);
});

function sound(a) {
  if (a == 'w') {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (a == 'a') {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  } else if (a == 's') {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (a == 'd') {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (a == 'j') {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (a == 'k') {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (a == 'l') {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
}

function animation(key) {
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function() {document.querySelector("." + key).classList.remove("pressed");}, 100);
}
