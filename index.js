//
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//
// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
//
// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//
// var image1 = document.querySelectorAll("img")[0];
//
// image1.setAttribute("src", randomImageSource);
//
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//
//
// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "🚩Draw!🚩";
// }
function throwDice() {

  // I need two separate variables for the comparison
  var number1 = Math.floor(Math.random() * 6 + 1);
  var number2 = Math.floor(Math.random() * 6 + 1);

  // Query selector for the h1, so I avoid typing it three times in the comparison output
  var title = document.querySelector(".container h1");

  // Randomize the two dice
  document.querySelector(".img1").src = "images/dice" + number1 + ".png";
  document.querySelector(".img2").src = "images/dice" + number2 + ".png";

  // Comparison to see who won
  if(number1 > number2) {
    title.innerHTML = "🥊 Player 1 won";
  } else if (number2 > number1){
    title.innerHTML = "Player 2 won 🥊";
  } else {
    title.innerHTML = "It's a draw!";
  }

}
