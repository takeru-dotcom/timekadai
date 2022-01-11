let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop  = document.getElementById("stop");
let reset = document.getElementById("reset");

let seconds = 0;
let milliSeconds = 0;
let timerId;


let newSeconds = 0;
let newMilliSeconds = 0;

function stopWatch(){
  milliSeconds++;
  if(milliSeconds / 100 == 1){
    seconds++;
    milliSeconds = 0;
  }
  if(milliSeconds < 10){
    newMilliSeconds = "0" + milliSeconds;
  }else{
    newMilliSeconds = milliSeconds;
  }
  if(seconds < 10){
    newSeconds = "00" + seconds;
  }else if(seconds < 100){
    newSeconds = "0" + seconds;
  }else{
    newSeconds = seconds;
  }
timer.textContent = newSeconds + "." + newMilliSeconds;
}

function clickBtn1(){
(start.disabled === true)
		start.setAttribute("disabled",true);
		start.style.color = "White";
		reset.setAttribute("disabled",true);
		reset.style.color = "White";
		stop.removeAttribute("disabled");
		stop.style.color = "black";
		timerId = setInterval( stopWatch ,10);
		}
		
function clickBtn2(){
(stop.disabled === true)
		stop.setAttribute("disabled",true);
		stop.style.color = "White";
		start.removeAttribute("disabled");
		start.style.color = "black";
		reset.removeAttribute("disabled");
		reset.style.color = "black";
		clearInterval(timerId);
		}
		
function clickBtn3(){
(reset.disabled === true);
		reset.setAttribute("disabled",true);
		reset.style.color = "White";
		stop.setAttribute("disabled",true);
		stop.style.color = "White";
		start.removeAttribute("disabled");
		start.style.color = "black";
		timer.textContent = "000.00"
		}