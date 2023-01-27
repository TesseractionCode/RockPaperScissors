var _a;
var PlayerType;
(function (PlayerType) {
    PlayerType[PlayerType["player"] = 0] = "player";
    PlayerType[PlayerType["opponent"] = 1] = "opponent";
})(PlayerType || (PlayerType = {}));
var Choice;
(function (Choice) {
    Choice[Choice["rock"] = 0] = "rock";
    Choice[Choice["paper"] = 1] = "paper";
    Choice[Choice["scissors"] = 2] = "scissors";
})(Choice || (Choice = {}));
var WinResult;
(function (WinResult) {
    WinResult[WinResult["player"] = 0] = "player";
    WinResult[WinResult["opponent"] = 1] = "opponent";
    WinResult[WinResult["tie"] = 2] = "tie";
})(WinResult || (WinResult = {}));
function displayScore(score, whichPlayer) {
    switch (whichPlayer) {
        case PlayerType.player:
            var player_score = document.getElementById("player-score");
            if (!player_score)
                return;
            player_score.innerText = score.toString();
            break;
        case PlayerType.opponent:
            var opponent_score = document.getElementById("opponent-score");
            if (!opponent_score)
                return;
            opponent_score.innerText = score.toString();
            break;
    }
}
function displayChoice(choice, whichPlayer) {
    var display = whichPlayer == PlayerType.player ? document.getElementById("player-display") :
        document.getElementById("opponent-display");
    if (!display)
        return;
    var img_url;
    if (choice == Choice.rock)
        img_url = "url(assets/rock_test.jpg";
    else if (choice == Choice.paper)
        img_url = "url(assets/paper_test.jpg";
    else if (choice == Choice.scissors)
        img_url = "url(assets/scissors_test.jpg";
    display.style.backgroundImage = img_url;
}
function displayWinMessage(message) {
    var win_message = document.getElementById("win-message");
    if (!win_message)
        return;
    win_message.innerText = message;
}
function randomChoice() {
    var rand_num = Math.floor(3 * Math.random());
    return rand_num;
}
function getWinner(playerChoice, opponentChoice) {
    if (playerChoice == opponentChoice)
        return WinResult.tie;
    switch (playerChoice) {
        case (Choice.rock):
            return (opponentChoice == Choice.paper) ? WinResult.opponent : WinResult.player;
        case (Choice.paper):
            return (opponentChoice == Choice.scissors) ? WinResult.opponent : WinResult.player;
        case (Choice.scissors):
            return (opponentChoice == Choice.rock) ? WinResult.opponent : WinResult.player;
    }
}
function makeMove(playerChoice) {
    var opponentChoice = randomChoice();
    displayChoice(playerChoice, PlayerType.player);
    displayChoice(opponentChoice, PlayerType.opponent);
    return getWinner(playerChoice, opponentChoice);
}
var rock_button = document.getElementById("rock-button");
var paper_button = document.getElementById("paper-button");
var scissors_button = document.getElementById("scissors-button");
var winMessages = (_a = {}, _a[WinResult.player] = "player win", _a[WinResult.opponent] = "opponent win", _a[WinResult.tie] = "tie", _a);
var playerScore = 0;
var opponentScore = 0;
rock_button === null || rock_button === void 0 ? void 0 : rock_button.addEventListener("click", function () {
    var outcome = makeMove(Choice.rock);
    if (outcome == WinResult.player)
        playerScore++;
    else if (outcome == WinResult.opponent)
        opponentScore++;
    displayWinMessage(winMessages[outcome]);
    displayScore(playerScore, PlayerType.player);
    displayScore(opponentScore, PlayerType.opponent);
});
paper_button === null || paper_button === void 0 ? void 0 : paper_button.addEventListener("click", function () {
    var outcome = makeMove(Choice.paper);
    if (outcome == WinResult.player)
        playerScore++;
    else if (outcome == WinResult.opponent)
        opponentScore++;
    displayWinMessage(winMessages[outcome]);
    displayScore(playerScore, PlayerType.player);
    displayScore(opponentScore, PlayerType.opponent);
});
scissors_button === null || scissors_button === void 0 ? void 0 : scissors_button.addEventListener("click", function () {
    var outcome = makeMove(Choice.scissors);
    if (outcome == WinResult.player)
        playerScore++;
    else if (outcome == WinResult.opponent)
        opponentScore++;
    displayWinMessage(winMessages[outcome]);
    displayScore(playerScore, PlayerType.player);
    displayScore(opponentScore, PlayerType.opponent);
});
