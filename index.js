function roll() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1); //random number btw 1 and 6
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  var player1 = "images/dice" + randomNumber1 + ".png"; //dice1.png to dice6.png
  var player2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".dice .img1").setAttribute("src", player1);
  document.querySelector(".dice .img2").setAttribute("src", player2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "<span style='color:red'>🚩</span> Player 1 Wins!";
    //  block of code to be executed if condition1 is true
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins! <span style='color:red'>🚩</span>";
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    document.querySelector(".container h1").innerHTML = "Draw!";
    //  block of code to be executed if the condition1 is false and condition2 is false
  }
}
