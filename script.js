let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

let timer = document.querySelector(".display-timer");
let init = null;

document.getElementById("start").addEventListener('click', ()=>{
    if(init !== null){
        clearInterval(init)
    }
    init = setInterval(displayTimer, 10)
})

document.getElementById("pause").addEventListener('click', ()=>{
    clearInterval(init)
})

document.getElementById("reset").addEventListener("click", ()=>{
    clearInterval(init);
    // [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
    timer.innerHTML = "00: 00: 00: 000"
})

function displayTimer(){
    milliseconds = milliseconds + 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds ++;
        if(seconds == 60){
            seconds = 0;
            minutes ++
            if(minutes == 60){
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}
