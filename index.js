let hscoreEl = document.getElementById("hscore")
let ascoreEl = document.getElementById("ascore")
let scoreH = 0
let scoreA = 0

function onehs() {
    scoreH += 1
    hscoreEl.textContent = scoreH
}

function twohs() {
    scoreH += 2
    hscoreEl.textContent = scoreH
}

function threehs() {
    scoreH += 3
    hscoreEl.textContent = scoreH
}

function oneas() {
    scoreA += 1
    ascoreEl.textContent = scoreA
}

function twoas() {
    scoreA += 2
    ascoreEl.textContent = scoreA
}

function threeas() {
    scoreA += 3
    ascoreEl.textContent = scoreA
}

function rst() {
    scoreH = 0
    scoreA = 0
    hscoreEl.textContent = scoreH
    ascoreEl.textContent = scoreA
}