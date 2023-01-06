const fish = document.getElementById("fish");
const bubble = document.getElementById("bubble");
const score= document.getElementById("score");


function jump() {
    if (fish.classList != "jump") {
      fish.classList.add("jump");
  
      setTimeout(function () {
        fish.classList.remove("jump");
      }, 1000 );
    }
  }

let isAlive = setInterval(function () {
  
    let fishTop = parseInt(window.getComputedStyle(fish).getPropertyValue("top"));
  
  
    let bubbleLeft = parseInt(
      window.getComputedStyle(bubble).getPropertyValue("left")
    );
  
  
    if (bubbleLeft < 50 && bubbleLeft > 0 && fishTop >= 280) {
      
      alert("Game Over!");
    }
  }, 10);
  
  document.addEventListener("keydown", function (event) {
    jump();
  });
  