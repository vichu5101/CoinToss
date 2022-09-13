console.log("The game will start in next 15th sec...")
player1 = []
player2 = []
playerScoreObj = {
    player1Heads: 0,
    player2Heads: 0
}
roundPlayerScoreObj = {
    player1Heads: 0,
    player2Heads: 0
}
gameDetails=[]
round = 1
a = setInterval(function coinToss() {
    if (round == 5) {
        clearInterval(a)
        console.log("********** From All Rounds ************")
        console.table([playerScoreObj])
        result(playerScoreObj.player1Heads, playerScoreObj.player2Heads)
        console.table(gameDetails)
    }
    else {
        console.log("Round :", round)
        coinTossing()
        round++
        return coinToss
    }
}(), 8000);



function coinTossing() {
    return new Promise(() => {
        player1CoinToss = []
        player2CoinToss = []
        range = 0
        face = ["Heads", "Tails"]
        b = setInterval(() => {
            if (range == 5) {
                clearInterval(b)
                findScore(player1CoinToss, player2CoinToss)
                console.table([roundPlayerScoreObj])
                result(roundPlayerScoreObj.player1Heads, roundPlayerScoreObj.player2Heads)
            }
            else {
                p1 = face[Math.floor(Math.random() * 2)]
                p2 = face[Math.floor(Math.random() * 2)]
                player1CoinToss.push(p1)
                player2CoinToss.push(p2)
                player1.push(p1)
                player2.push(p2)
                gameDetails.push({"Round":round-1,"Player1":p1,"Player2":p2})
                console.log(`Toss ${range+1} ➡️ " Player1 " 🎲${p1}  ↔️   " Player2 " 🎲${p2}`)
                range++
            }
        }, 1000);
    })

}
function findScore(player1List, player2List) {
    for (i of player1List) {
        if (i == "Heads") {
            playerScoreObj.player1Heads += 1
            roundPlayerScoreObj.player1Heads += 1
        }
    }
    for (i of player2List) {
        if (i == "Heads") {
            playerScoreObj.player2Heads += 1
            roundPlayerScoreObj.player2Heads += 1
        }
    }
}

function result(player1, player2) {
    if (player1 > player2) {
        console.log("Player 1 Won the Game")
    }
    else if (player1 < player2) {
        console.log("Player 2 Won the Game")
    }
    else {
        console.log("Match Draw")
    }
    console.log("---------------------------------------------------------------------")
}