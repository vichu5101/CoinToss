player1 = []
player2 = []
playerScoreObj = {
    player1Heads: 0,
    player2Heads: 0
}
roundPlayerScoreObj={
    player1Heads:0,
    player2Heads:0
}
a = setInterval(() => {
    coinToss()
}, 15000);
round = 1
function coinToss() {
    if (round == 5) {
        clearInterval(a)
        console.log("********** From All Rounds ************")
        if (playerScoreObj.player1Heads > playerScoreObj.player2Heads) {
            console.log("Player1 Won the game")
        }
        else if (playerScoreObj.player1Heads < playerScoreObj.player2Heads) {
            console.log("Player2 Won the game")
        }
        else {
            console.log("Game Draw")
        }
    }
    else {
        console.log("Round :",round)
        coinTossing()
        round++
    }
}

function coinTossing() {
    return new Promise((resolve) => {
        player1CoinToss = []
        player2CoinToss = []
        range = 0
        face = ["Heads", "Tails"]
        b = setInterval(() => {
            if (range == 10) {
                clearInterval(b)
                findScore(player1CoinToss, player2CoinToss)
                console.table([roundPlayerScoreObj])
                if (roundPlayerScoreObj.player1Heads > roundPlayerScoreObj.player2Heads) {
                    console.log("Player1 Won the game")
                }
                else if (roundPlayerScoreObj.player1Heads < roundPlayerScoreObj.player2Heads) {
                    console.log("Player2 Won the game")
                }
                else {
                    console.log("Game Draw")
                }
                roundPlayerScoreObj["player1Heads"]=0
                roundPlayerScoreObj["player2Heads"]=0
            }
            else {
                p1 = face[Math.floor(Math.random() * 2)]
                p2 = face[Math.floor(Math.random() * 2)]
                player1CoinToss.push(p1)
                player2CoinToss.push(p2)
                player1.push(p1)
                player2.push(p2)
                console.log(p1, p2)
                range++
            }
        }, 1000);
    })

}
function findScore(player1List, player2List) {
    for (i of player1List) {
        if (i == "Heads") {
            playerScoreObj.player1Heads += 1
            roundPlayerScoreObj.player1Heads+=1
        }
    }
    for (i of player2List) {
        if (i == "Heads") {
            playerScoreObj.player2Heads += 1
            roundPlayerScoreObj.player2Heads+=1
        }
    }
}
