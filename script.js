var diceGame = document.querySelectorAll("img")[0];
var p = document.querySelector(".special");
p.style.fontSize = "40px"


function diceRoll(playerPick) {
    var randNum = Math.ceil(Math.random() * 6)
    if (randNum === 1) {
        diceGame.src = "images/dice-1.png"
    }
    else if (randNum === 2) {
        diceGame.src = "images/dice-2.png"
    }
    else if (randNum === 3) {
        diceGame.src = "images/dice-3.png"
    }
    else if (randNum === 4) {
        diceGame.src = "images/dice-4.png"
    }
    else if (randNum === 5) {
        diceGame.src = "images/dice-5.png"
    }
    else if (randNum === 6) {
        diceGame.src = "images/dice-6.png"
    }


    if ((playerPick === "one" && randNum === 1) || (playerPick === "two" && randNum === 2) || (playerPick === "three" && randNum === 3) || (playerPick === "four" && randNum === 4) || (playerPick === "five" && randNum === 5) || (playerPick === "six" && randNum === 6)) {
       p.innerHTML = "You won the game :)";
       p.style.color = "green"
    }
    else {
        p.innerHTML = "You lose the game :(";
        p.style.color = "red"


    }
}











