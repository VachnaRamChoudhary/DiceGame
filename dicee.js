var randomNumber1=Math.floor(Math.random()*6+1);
var randomDiceImage="dice-six-faces"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);


var randomNumber2=Math.floor(Math.random()*6+1);
var randomDiceImage1="dice-six-faces"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage1);

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML=("🚩Player 1 Win!");

else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML=("Player 2 Win!🚩");

else
document.querySelector("h1").innerHTML=("🚩Draw!🚩");
