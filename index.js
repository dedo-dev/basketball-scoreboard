const homeScoreEl = document.getElementById('home-score')
const guestScoreEl = document.getElementById('guest-score')

const newGameBtn = document.getElementById('new-game-btn')
const startGameBtn = document.getElementById('start-game-btn')
const timerEl = document.getElementById('timer-el')

const homeOnePtBtn = document.getElementById('home-one-pt-btn')
const homeTwoPtBtn = document.getElementById('home-two-pt-btn')
const homeThreePtBtn = document.getElementById('home-three-pt-btn')

const guestOnePtBtn = document.getElementById('guest-one-pt-btn')
const guestTwoPtBtn = document.getElementById('guest-two-pt-btn')
const guestThreePtBtn = document.getElementById('guest-three-pt-btn')

let isGame = true
let homeScore = 0
let guestScore = 0
let count = 15

timerEl.textContent = count
homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

homeOnePtBtn.addEventListener('click', () => {
    if(isGame && count < 15) {
        homeScore = addOne(homeScore)
        homeScoreEl.textContent = homeScore
        highligthLeader()
    }
})

homeTwoPtBtn.addEventListener('click', () => {
    if(isGame && count < 15) {
        homeScore = addTwo(homeScore)
        homeScoreEl.textContent = homeScore
        highligthLeader()
    }
})

homeThreePtBtn.addEventListener('click', () => {
    if(isGame && count < 15) {
        homeScore = addThree(homeScore)
        homeScoreEl.textContent = homeScore
        highligthLeader()
    }
})

guestOnePtBtn.addEventListener('click', () => {
    if(isGame && count < 15) {
        guestScore = addOne(guestScore)
        guestScoreEl.textContent = guestScore
        highligthLeader()
    }
})

guestTwoPtBtn.addEventListener('click', () => {
    if(isGame && count < 15) {
        guestScore = addTwo(guestScore)
        guestScoreEl.textContent = guestScore
        highligthLeader()
    }
})

guestThreePtBtn.addEventListener('click', () => {
    if(isGame && count < 15) {
        guestScore = addThree(guestScore)
        guestScoreEl.textContent = guestScore
        highligthLeader()
    }
})

newGameBtn.addEventListener('click', () => {
    if(!isGame) {
        homeScore = 0
        guestScore = 0
        document.getElementById('timer-bg').classList.remove('highligth')
        homeScoreEl.textContent = homeScore
        guestScoreEl.textContent = guestScore
        highligthLeader()
        count = 15
        timerEl.textContent = count
        isGame = true
    }
})

startGameBtn.addEventListener('click', startGame)

function addOne(score) {
    return score + 1
}

function addTwo(score) {
    return score + 2
}

function addThree(score) {
    return score + 3
}

function startGame() {
    if(isGame) {
        countDownTimer()
    }
}

function countDownTimer() {
    const timer = setInterval(
        function() {
            count--
            timerEl.textContent = count
            if(count === 0) {
                clearInterval(timer)
                document.getElementById('timer-bg').classList.add('highligth')
                timerEl.textContent = 'Game is over'
                isGame = false
            }
        }, 1000
    )
}

function highligthLeader() {
    if(homeScore > guestScore) {
        document.getElementById('home-score-container').classList.add('highligth')
        document.getElementById('guest-score-container').classList.remove('highligth')
    } else if (guestScore > homeScore) {
        document.getElementById('guest-score-container').classList.add('highligth')
        document.getElementById('home-score-container').classList.remove('highligth')
    } else {
        document.getElementById('home-score-container').classList.remove('highligth')
        document.getElementById('guest-score-container').classList.remove('highligth')
    }
}