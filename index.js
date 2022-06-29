var randomNumber1=Math.floor(Math.random()*(6-1+1))+1;
var randomstr1="images/dice"+randomNumber1+".png";
document.getElementById("img1").setAttribute("src",randomstr1);
var randomNumber2=Math.floor(Math.random()*(6-1+1))+1;
var randomstr2="images/dice"+randomNumber2+".png";
document.getElementById("img2").setAttribute("src",randomstr2)

if(randomNumber1 > randomNumber2)
{
  document.getElementById("ref").innerHTML="🚩 Player 1 Wins";
}
else if(randomNumber1 < randomNumber2)
{
  document.getElementById("ref").innerHTML="Player 2 Wins 🚩";
}
else
{
  document.getElementById("ref").innerHTML="Draw";
}
