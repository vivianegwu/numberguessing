/* Game Function
 - Player must guess a number between a min and a max 
 - Player gets a certain amount of guesses 
 - Notify the player of the correct answer if localStorage 
- Let player choose to play again
*/


// Game values
let min = 1,
    max = 20,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

    // UI Elements

    const game = document.querySelector('#game'),
          minNum = document.querySelector('.min-num');
          maxNum = document.querySelector('.max-num'),
          guessBtn = document.querySelector('#guess-btn'),
          guessInput = document.querySelector('#guess-input'),
          message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Liaten for guess

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // Valisate

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }
  if(guess === winningNum){

   gameOver(true, `${winningNum} is correct, You Won!`)
  }else{

    //wrong number
    guessesLeft -=1;

    if(guessesLeft === 0){
     //Game Over - Lost
    gameOver(false, `Game Over, You Lost!. The correct answer is ${winningNum}`)
    }else{
      //Game continues - answer wrong
      guessInput.style.borderColor = 'red';

      guessInput.value = '';

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red' )
    }

  }
});

//Game Over

function gameOver(won, msg){

  let color;
  won === true? color = 'green' : color = 'red';
  //Disable input
  guessInput.disabled = true;

  // change border color
  guessInput.style.borderColor = color;
  message.style.color = color;

  // set text color

  //set message 

  setMessage(msg)

  // Play Again

  guessBtn.value = ' Play Again';

  guessBtn.className += 'play-again';

  game.addEventListener('mousedown', Reset)

}




function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

function Reset(e){
  if(e.target.classList.contains('play-again')){
    window.location.reload();
  }
}

function getRandomNum(min, max){

return Math.floor((Math.random() * (max - min +1) + min))

}



