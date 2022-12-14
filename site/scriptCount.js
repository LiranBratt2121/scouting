var countUp = 1;
var countdown = 1;
var countBalls = 1;

GetUp1 = () =>{
  document.getElementById("valueInputUp").innerHTML = "ballsUP:" + countUp; 
  countUp++;
  if (countUp == -1)
  countUp++;
}
GetMin1 = () =>{
    document.getElementById("valueInputUp").innerHTML = "ballsUP:" + countUp; 
    countUp--;
    if (countUp == -1)
    countUp++;
  }

  GetUp2 = () =>{
    document.getElementById("valueInputdown").innerHTML = "BallsDOWN:" + countdown; 
    countdown++;
    if (countdown == -1)
    countdown++;
  }
  GetMin2 = () =>{
      document.getElementById("valueInputdown").innerHTML = "BallsDOWN:" + countdown; 
      countdown--;
      if (countdown == -1)
      countdown++;
    }
    GetUp3 = () =>{
        document.getElementById("valueInputGetBalls").innerHTML = "amountOfBALLS:" + countBalls; 
        countBalls++;
        if (countBalls == -1)
        countBalls++;
      }
    GetMin3 = () =>{
        document.getElementById("valueInputGetBalls").innerHTML = "amountOfBALLS:" + countBalls; 
        countBalls--;
        if (countBalls == -1)
        countBalls++;
    }

