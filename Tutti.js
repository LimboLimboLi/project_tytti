const fish = document.getElementById("fish");
const bubble = document.getElementById("bubble");

function jump() {
  if (fish.classList != "jump") {
    fish.classList.add("jump");

    setTimeout(function () {
      fish.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {

  let fishTop = parseInt(window.getComputedStyle(fish).getPropertyValue("top"));


  let bubbleLeft = parseInt(
    window.getComputedStyle(bubble).getPropertyValue("left")
  );

  // detect collision
  if (bubbleLeft < 50 && bubbleLeft > 0 && fishTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});