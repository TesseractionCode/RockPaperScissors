enum PlayerType {
    player,
    opponent
}

enum Choice {
    rock,
    paper,
    scissors
}

enum WinResult {
    player,
    opponent,
    tie
}

function displayScore(score: number, whichPlayer: PlayerType) {
    switch (whichPlayer) {
        case PlayerType.player:
            let player_score = document.getElementById("player-score");
            if (!player_score) return;
            player_score.innerText = score.toString();
            break;
        case PlayerType.opponent:
            let opponent_score = document.getElementById("opponent-score");
            if (!opponent_score) return;
            opponent_score.innerText = score.toString();
            break;
    }
}

function displayChoice(choice: Choice, whichPlayer: PlayerType) {
    let display = whichPlayer == PlayerType.player ? document.getElementById("player-display") :
                                                    document.getElementById("opponent-display");
    if (!display) return;

    let img_url;
    if (choice == Choice.rock)
        img_url = "url(assets/rock_test.jpg";
    else if (choice == Choice.paper)
        img_url = "url(assets/paper_test.jpg";
    else if (choice == Choice.scissors)
        img_url = "url(assets/scissors_test.jpg";

    display.style.backgroundImage = img_url;
}

function displayWinMessage(message: string) {
    let win_message = document.getElementById("win-message");
    if (!win_message) return;
    win_message.innerText = message;
}

function randomChoice(): Choice {
    let rand_num = Math.floor(3*Math.random());
    return rand_num;
}

function getWinner(playerChoice: Choice, opponentChoice: Choice): WinResult {
    if (playerChoice == opponentChoice) return WinResult.tie;
    switch (playerChoice) {
        case (Choice.rock):
            return (opponentChoice == Choice.paper) ? WinResult.opponent : WinResult.player;
        case (Choice.paper):
            return (opponentChoice == Choice.scissors) ? WinResult.opponent : WinResult.player;
        case (Choice.scissors):
            return (opponentChoice == Choice.rock) ? WinResult.opponent : WinResult.player;
    }
}

function makeMove(playerChoice: Choice): WinResult {
    let opponentChoice = randomChoice();
    displayChoice(playerChoice, PlayerType.player);
    displayChoice(opponentChoice, PlayerType.opponent);

    return getWinner(playerChoice, opponentChoice);
}


const rock_button = document.getElementById("rock-button");
const paper_button = document.getElementById("paper-button");
const scissors_button = document.getElementById("scissors-button");

const winMessages = {[WinResult.player] : "player win", 
                      [WinResult.opponent] : "opponent win",
                      [WinResult.tie] : "tie"};

                      

let playerScore = 0;
let opponentScore = 0;

rock_button?.addEventListener("click", () => {
    let outcome = makeMove(Choice.rock);
    if (outcome == WinResult.player)
        playerScore++;
    else if (outcome == WinResult.opponent)
        opponentScore++;
    displayWinMessage(winMessages[outcome]);
    displayScore(playerScore, PlayerType.player);
    displayScore(opponentScore, PlayerType.opponent);
});
paper_button?.addEventListener("click", () => {
    let outcome = makeMove(Choice.paper);
    if (outcome == WinResult.player)
        playerScore++;
    else if (outcome == WinResult.opponent)
        opponentScore++;
    displayWinMessage(winMessages[outcome]);
    displayScore(playerScore, PlayerType.player);
    displayScore(opponentScore, PlayerType.opponent);
});
scissors_button?.addEventListener("click", () => {
    let outcome = makeMove(Choice.scissors);
    if (outcome == WinResult.player)
        playerScore++;
    else if (outcome == WinResult.opponent)
        opponentScore++;
    displayWinMessage(winMessages[outcome]);
    displayScore(playerScore, PlayerType.player);
    displayScore(opponentScore, PlayerType.opponent);
});