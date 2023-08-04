

var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;
var exc = true;
function start()
{
    exc = true;
    stopwatch();
}
function stop()
{
    exc = false;
}
function reset()
{
    exc = false;
    document.getElementById("msec").innerHTML= 0;
    document.getElementById("sec").innerHTML= 0;
    document.getElementById("min").innerHTML= 0;
    document.getElementById("hr").innerHTML= 0;
}
function stopwatch()
{
    if(exc)
    {
        ms++;
        if(ms==100){
            ms=0;
            sec++;
            if(sec==60){
                sec=0;
                min++;
            }
            if(sec==60){
                sec=0;
                min++;
            }
            if(min==60){
                min=0;
                hr++;
            }
        }
        document.getElementById("msec").innerHTML=ms;
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("min").innerHTML=min;
        document.getElementById("hr").innerHTML=hr;
        setTimeout(stopwatch,10);
        }
}

// let timerDisplay = document.querySelector('.timerDisplay');
// let stopBtn = document.getElementById('stopBtn');
// let startBtn = document.getElementById('startBtn');
// let resetBtn = document.getElementById('resetBtn');

// let msec = 00;
// let secs = 00;
// let mins = 00;

// let timerId = null;

// startBtn.addEventListener('click', function(){
//     if(timerId !== null){
//         clearInterval(timerId);
//     }
//     timerId = setInterval(startTimer, 10);
// });

// stopBtn.addEventListener('click', function(){
//     clearInterval(timerId);
// });

// resetBtn.addEventListener('click', function(){
//     clearInterval(timerId);
//     timerDisplay.innerHTML = `00 : 00 : 00`;
//     msec = secs = mins = 00;
// });

// function startTimer(){
//     msec++;
//     if(msec == 100){
//         msec = 0;
//         secs++;
//         if(secs == 60){
//             secs = 0;
// mins++;
//         }
//     }

//     let msecString = msec < 10 ? `0${msec}` : msec;
//     let secsString = secs < 10 ? `0${secs}` : secs;
//     let minsString = mins < 10 ? `0${mins}` : mins;

//     timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

// }