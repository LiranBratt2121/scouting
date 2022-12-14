mili = 1000;
time = 15;//timer ver
time1 = 0;
counterForClimb = 0;

var autoCountUp;
var autoCountDown;
var autoCoutBalles;
var autoCoutBalles;
var overAllTime;
var audio = new Audio(
    'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
start = () =>{
        timer = setInterval(function () {document.getElementById("timeLeft").innerHTML = "timeLeft: " + time;
         time--;
        if (time == -1)
        {
            audio.play();
            clearInterval(timer)
        }
        }
        ,mili);
        autoCountUp = countUp;
        countUp = 1;
        autoCountDown = countDown;
        countdown = 1;
        autoCoutBalles = countBalls;
        countBalls = 1;
        accountName = document.getElementById("NameOfTeamMember").innerHTML;
        accountTeamTarget = document.getElementById("TargetedTeam").innerHTML;
        accountNumberOfQual = document.getElementById("NumberOfQual").innerHTML;
        accountBar = document.querySelector('input[name="bar_"]:checked').value;
        accountRobot = document.querySelector('input[name="robot_kind"]:checked').value;
        overallPoints = autoCountUp * 4 + autoCountDown * 2 + countUp * 2 + countdown;
        // check if cvs file exists and if not create one
        if (!fs.existsSync('data.csv')) {
            // create file (autoCountDown, autoCountUp, countBalls, accountName, accountTeamTarget, accountNumberOfQual)
            fs.appendFileSync('data.csv',
                'autoCountUp,autoCountDown');
        }
        
}
movePage = () =>{
    location.replace("/site/tele.html")
}
finishTele = () =>{
    location.replace("/site/end.html")
}
refresh = () => {
    location.replace("www.google.com")
}
// sendRadio = () =>{
//     document.getElementsByName("input[name='robot_kind':checked").value = false;
//     document.getElementsByName("input[name='bar':checked").value = false;
// }
timeClime = () => {
    if (counterForClimb % 2 == 0){
        counterForClimb++;
        climeTimer = setInterval(function () {document.getElementById("timerClimbClick").innerHTML = "time climb: " + time1;
        time1++;
       }
       ,mili);
       document.getElementById("timerClimbClickBut").innerHTML = "startTimerOver(click again)";
    }else{
        time1 = 0;
    }
    overAllTime = time1;


    
        
}

