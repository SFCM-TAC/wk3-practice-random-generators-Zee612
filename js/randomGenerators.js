
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.

  function Generator(name, sides){
    this.name = name;
    this.side = sides;
    this.presentActivity = function(){
      return Math.floor((Math.random() * this.side)+ 1);
    };
  }
  var diceRoll = new Generator('diceRoll', 10);
  var eightBall = new Generator('eightBall', 20);
// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created


const diceRollGenerator = null;
const eightBallGenerator = null;

function handleDiceRoll() {
const resultElement = document.getElementById('diceResult');
var diceRoll = new Generator('diceRoll', 10);
var result = Math.floor((Math.random() * diceRoll.side)+ 1);
resultElement.innerHTML = "You rolled " + result + ".";
};


function handleEightBallShake() {
  const resultElement = document.getElementById('eightBallResult');

  // TODO: call a method on eightBallGenerator to populate result with a random value
var eightBall = new Generator('eightBall', 20);
var n = Math.floor(Math.random() * eightBall.side);
switch (n) {
      case 0:
        n = "It is certain";
        break;
      case 1:
        n = "It is decidedly so";
        break;
      case 2:
      n = "Without a doubt";
        break;
      case 3:
      n = "Yes, definitely";
          break;
      case 4:
      n = "You may rely on it";
          break;
      case 5:
      n ="As I see it, yes";
          break;
      case 6:
      n = "Most likely";
          break;
      case 7:
      n = "Outlook good";
            break;
      case 8:
       n ="Yes";
            break;
      case 9:
  n ="Signs point to yes";
            break;
      case 10:
    n ="Reply hazy try again";
            break;
      case 11:
n ="Ask again later";
            break;
        case 12:
n ="Better not tell you now";
              break;
        case 13:
      n ="Cannot predict now";
              break;
        case 14:
n ="Concentrate and ask again";
              break;
        case 15:
 n ="Do not count on it";
              break;
      case 16:
n ="My reply is no";
                break;
      case 17:
n ="My sources say no";
                break;
          case 18:
n ="Outlook not so good";
                break;
              case 19:
        n ="Very doubtful";
                break;

    }

  const result = "result";
  resultElement.innerHTML = n;
}

document.addEventListener("DOMContentLoaded", function() {
  // this code block runs when the page finishes loading
  // and attaches listeners for button clicks
  // e.g. when the diceButton is clicked, it will run the handleDiceRoll function
  const diceButton = document.getElementById('diceButton');
  if (diceButton) {
    diceButton.addEventListener('click', handleDiceRoll);
  };
  const eightBallButton = document.getElementById('eightBallButton');
  if (eightBallButton) {
    eightBallButton.addEventListener('click', handleEightBallShake);
  };
})
