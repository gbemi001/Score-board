elHomeScore = document.getElementById('home-score')
elAwayScore = document.getElementById('away-score')
let homeScore = 0
let awayScore = 0
function addHomeScore() {
    homeScore += 1
    elHomeScore.textContent = homeScore
    
}

function subtractHomeScore() {
    homeScore -= 1
    elHomeScore.textContent = homeScore
}

function addAwayScore() {
    awayScore += 1
    elAwayScore.textContent = awayScore
}

function subtractAwayScore() {
    awayScore -= 1
    elAwayScore.textContent = awayScore
}
