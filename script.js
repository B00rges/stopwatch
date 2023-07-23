
const counter = document.querySelector('#timer')

let timeInterval = null
let hours = 0
let minutes = 0
let seconds = 0


const formatCounter = value => value.toString().padStart(2, '0')

function startTimer() {
    timeInterval = setInterval(updateTime, 10)
}

function stopTimer () {
    clearInterval(timeInterval)
}

function resetTimer () {
    clearInterval(timeInterval)
    updateTime()
    hours = 0
    minutes = 0
    seconds = 0
    counter.textContent = `00:00:00`
}

function updateTime () {
    seconds++
    if(seconds === 60) {
        minutes++
        seconds = 0
    }
    if(minutes === 60) {
        hours++
        minutes = 0
    }
    
    counter.textContent = `${formatCounter(hours)}:${formatCounter(minutes)}:${formatCounter(seconds)}`
}
