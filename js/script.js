const hours = document.querySelector('.h'),
    minutes = document.querySelector('.m'),
    seconds = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes');

function clock() {
    let hour = new Date().getHours(),
        min = new Date().getMinutes(),
        sec = new Date().getSeconds();
    hours.style.transform = `rotate(${hour * 30}deg)`
    minutes.style.transform = `rotate(${min * 6}deg)`
    seconds.style.transform = `rotate(${sec * 6}deg)`
    hoursNumber.innerHTML = hour < 10 ? '0' + hour : hour
    minutesNumber.innerHTML = min < 10 ? '0' + min : min

    setTimeout(() => {
        clock()
    }, 1000);
}
clock()


let link = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem')
for (let i = 0; i < link.length; i++) {
    const el = link[i];
    el.addEventListener('click', function () {
        link.forEach((e, i) => {
            e.classList.remove('active')
            tabs[i].classList.remove('active')

        })
        tabs[i].classList.add('active')
        this.classList.add('active')
    })
}


const hourElement = document.querySelector('.stopwatch__hours')
const minuteElement = document.querySelector('.stopwatch__minutes')
const secondElement = document.querySelector('.stopwatch__seconds')
const millisecondElement = document.querySelector('.stopwatch__milliSeconds')

const startButton = document.querySelector('.stopwatch__btn')
const pauseButton = document.querySelector('.stopwatch__pause')
const stopButton = document.querySelector('.stopwatch__stop')


let hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
    interval

startButton.addEventListener('click', () => {
    clearInterval(interval)

    interval = setInterval(() => {
        startTimer()
    }, 10);
})
interval = setInterval(startTimer(), 10)

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})
stopButton.addEventListener('click', () => {
    clearInterval(interval)
    clearFields()
})

function startTimer() {
    millisecond++
    if (millisecond < 9) {
        millisecondElement.innerText = "0" + millisecond
    }
    if (millisecond > 9) {
        millisecondElement.innerText = millisecond
    }
    if (millisecond > 99) {
        second++
        secondElement.innerText = "0" + second
        millisecond = 0
        millisecondElement.innerText = "0" + millisecond
    }
    if (second < 9) {
        secondElement.innerText - "0" + second
    }
    if (second > 9) {
        secondElement.innerText = second
    }
    if (second > 59) {
        minute++
        minuteElement.innerText = "0" + minute
        second = 0
        secondElement.innerText = "0" + second
    }
    if (minute > 9) {
        minuteElement.innerText = minute
    }
    if (hour > 9) {
        hourElement.innerText = hour
    }
}

function clearFields() {
    hour = 0
    minute = 0
    second = 0
    millisecond = 0
    hourElement.textContent = "00"
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
    millisecondElement.textContent = "00"
}