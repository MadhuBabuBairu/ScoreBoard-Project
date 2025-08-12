let HomeScoreEl = document.getElementById("Home-Score")
let GuestScoreEl = document.getElementById("Guest-Score")

let HomeScore = 0
let GuestScore = 0

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
