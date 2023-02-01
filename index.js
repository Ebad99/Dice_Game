var RandomNumber01 = Math.random() * 6;
var RandomNumber1 = (Math.floor(RandomNumber01));
console.log(RandomNumber1);

var randomImages= new Array ("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");

document.getElementById("img01").src = randomImages[RandomNumber1];

var RandomNumber02 = Math.random() * 6;
var RandomNumber2 = Math.floor(RandomNumber02);
// console.log(RandomNumber2);
document.getElementById("img02").src = randomImages[RandomNumber2];

if(RandomNumber1 > RandomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (RandomNumber2 > RandomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else
{
  document.querySelector("h1").innerHTML = "Draw</br>Try Again";
}
