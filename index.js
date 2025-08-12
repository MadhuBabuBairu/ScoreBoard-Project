let HomeScoreEl = document.getElementById("Home-Score")
let GuestScoreEl = document.getElementById("Guest-Score")

let HomeScore = 0
let GuestScore = 0

let HomeFaultEl = document.getElementById("Home-fault")
let GuestFaultEl = document.getElementById("Guest-Fault")

let HomeFaultCount = 0
let GuestFaultCount = 0

function Reset() {
    HomeScore = 0
    GuestScore = 0
    HomeScoreEl.textContent = HomeScore
    GuestScoreEl.textContent = GuestScore

    HomeFaultCount = 0
    GuestFaultCount = 0
    HomeFaultEl.textContent = HomeFaultCount
    GuestFaultEl.textContent = GuestFaultCount
}

function HomeFaultAdd1() {
    HomeFaultCount++
    HomeFaultEl.textContent = HomeFaultCount
}

function GuestFaultAdd1() {
    GuestFaultCount++
    GuestFaultEl.textContent = GuestFaultCount
    // console.log(GuestFaultCount)
}

function HSadd1() {
    HomeScore += 1
    HomeScoreEl.textContent = HomeScore
}

function HSadd2() {
    HomeScore += 2
    HomeScoreEl.textContent = HomeScore
}

function HSadd3() {
    HomeScore += 3
    HomeScoreEl.textContent = HomeScore
}

function GSadd1() {
    GuestScore += 1
    GuestScoreEl.textContent = GuestScore
}

function GSadd2() {
    GuestScore += 2
    GuestScoreEl.textContent = GuestScore
}

function GSadd3() {
    GuestScore += 3
    GuestScoreEl.textContent = GuestScore
}
