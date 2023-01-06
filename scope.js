
  
  let interval = null;
  let playerScore = 0;
  
  function scoreCounter  () {
     playerScore++;
     score.innerHTML = `Score <b>${playerScore}</b>`
     if (playerScore==51){
      alert ("WE WIN!");
    }
    }
  interval = setInterval(scoreCounter,200 );
