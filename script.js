//Global Variables
var userChoice;
function rockSelected() {
    var rockSelectedU = document.querySelector(".is-rock-selected-user");
    var paperNotSelectedU = document.querySelector(".is-paper-selected-user");
    var scissorsNotSelectedU = document.querySelector(".is-scissors-selected-user");
    var userSelected = "color: #019cdf;  opacity: 1";
    var userNotSelected = "color: #4b4b4b; opacity: .3";
    rockSelectedU.style.cssText = userSelected;
    paperNotSelectedU.style.cssText = userNotSelected;
    scissorsNotSelectedU.style.cssText = userNotSelected;
    userChoice = "rock";
}

function paperSelected() {
    var paperSelectedU = document.querySelector(".is-paper-selected-user");
    var rockNotSelectedU = document.querySelector(".is-rock-selected-user");
    var scissorsNotSelectedU = document.querySelector(".is-scissors-selected-user");
    var userSelected = "color: #019cdf;  opacity: 1";
    var userNotSelected = "color:#4b4b4b ; opacity: .3";
    paperSelectedU.style.cssText = userSelected;
    rockNotSelectedU.style.cssText = userNotSelected;
    scissorsNotSelectedU.style.cssText = userNotSelected;
    userChoice = "paper";
}

function scissorsSelected() {
    var scissorsSelectedU = document.querySelector(".is-scissors-selected-user");
    var rockNotSelectedU = document.querySelector(".is-rock-selected-user");
    var paperNotSelectedU = document.querySelector(".is-paper-selected-user");
    var userSelected = "color: #019cdf;  opacity: 1";
    var userNotSelected = "color: #4b4b4b; opacity: .3";
    scissorsSelectedU.style.cssText = userSelected;
    rockNotSelectedU.style.cssText = userNotSelected;
    paperNotSelectedU.style.cssText = userNotSelected;
    userChoice = "scissors";
}

function getCompChoice() {
    var choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function compPaperSelected() {
    var rockSelectedC = document.querySelector(".is-rock-selected-comp");
    var scissorsSelectedC = document.querySelector(".is-scissors-selected-comp");
    var paperSelectedC = document.querySelector(".is-paper-selected-comp");
    var compSelected = "color: #8fb24c; opacity: 1;";
    var compNotSelected = "color: #4b4b4b; opacity: .3";
    paperSelectedC.style.cssText = compSelected;
    rockSelectedC.style.cssText = compNotSelected;
    scissorsSelectedC.style.cssText = compNotSelected;
}

function compScissorsSelected() {
    var rockSelectedC = document.querySelector(".is-rock-selected-comp");
    var scissorsSelectedC = document.querySelector(".is-scissors-selected-comp");
    var paperSelectedC = document.querySelector(".is-paper-selected-comp");
    var compSelected = "color: #8fb24c; opacity: 1;";
    var compNotSelected = "color: #4b4b4b; opacity: .3";
    scissorsSelectedC.style.cssText = compSelected;
    rockSelectedC.style.cssText = compNotSelected;
    paperSelectedC.style.cssText = compNotSelected;
}

function compRockSelected() {
    var rockSelectedC = document.querySelector(".is-rock-selected-comp");
    var scissorsSelectedC = document.querySelector(".is-scissors-selected-comp");
    var paperSelectedC = document.querySelector(".is-paper-selected-comp");
    var compSelected = "color: #8fb24c; opacity: 1;";
    var compNotSelected = "color: #4b4b4b; opacity: .3";
    rockSelectedC.style.cssText = compSelected;
    paperSelectedC.style.cssText = compNotSelected;
    scissorsSelectedC.style.cssText = compNotSelected;
}

function compChoiceReset() {
    var rockSelectedC = document.querySelector(".is-rock-selected-comp");
    var scissorsSelectedC = document.querySelector(".is-scissors-selected-comp");
    var paperSelectedC = document.querySelector(".is-paper-selected-comp");
    var compReset = "color: #000; opacity: 1;";
    rockSelectedC.style.cssText = compReset;
    paperSelectedC.style.cssText = compReset;
    scissorsSelectedC.style.cssText = compReset;
}

function userChoiceReset() {
    var paperSelectedU = document.querySelector(".is-paper-selected-user");
    var rockNotSelectedU = document.querySelector(".is-rock-selected-user");
    var scissorsNotSelectedU = document.querySelector(".is-scissors-selected-user");
    var userReset = "color: #000; opacity: 1;";
    paperSelectedU.style.cssText = userReset;
    rockNotSelectedU.style.cssText = userReset;
    scissorsNotSelectedU.style.cssText = userReset;
}

function play() {
    var compChoice = getCompChoice();
    var userScore = document.querySelector(".is-user-score-shown");
    var compScore = document.querySelector(".is-comp-score-shown");
    var winner = document.querySelector(".is-winner-shown");
    var userScoreColor = "color: #019cdf;  opacity: 1";
    var compScoreColor = "color: #8fb24c; opacity: 1;";
    if (userChoice === "rock") {
        if (compChoice === "rock") {
            winner.innerHTML = "It's a tie!";
            compRockSelected();
        }
        else if (compChoice === "paper") {
            winner.innerHTML = " Paper covers rock -You lose...";
            compPaperSelected();
            compScore.innerHTML++;
            compScore.style.cssText = compScoreColor;
        }
        else if (compChoice === "scissors") {
            winner = " Rock crushes scissors-You win!";
            compScissorsSelected();
            userScore.innerHTML++;
            userScore.style.cssText = userScoreColor;
        }
    }

    if (userChoice === "paper") {
        if (compChoice === "paper") {
            winner.innerHTML = "It's a tie!";
            compPaperSelected();
        }

        else if (compChoice === "rock") {
            winner.innerHTML = "Paper covers rock.You win!";
            compRockSelected();
            userScore.innerHTML++;
            userScore.style.cssText = userScoreColor;
        }

        else if (compChoice === "scissors") {
            winner.innerHTML = "Scissors cut paper.You lose...";
            compScissorsSelected();
            compScore.innerHTML++;
            compScore.style.cssText = compScoreColor;
        }
    }

    if (userChoice === "scissors") {
        if (compChoice === "scissors") {
            winner.innerHTML = "It's a tie!";
            compScissorsSelected();
        }

        else if (compChoice === "rock") {
            winner.innerHTML = "Rock crushes scissors.You lose...";
            compRockSelected();
            compScore.innerHTML++;
            compScore.style.cssText = compScoreColor;
        }

        else if (compChoice === "paper") {
            winner.innerHTML = "Scissors cut paper.You win!";
            compPaperSelected();
            userScore.innerHTML++;
            userScore.style.cssText = userScoreColor;
        }
    }
}

function resetGame() {
    var userScore = document.querySelector(".is-user-score-shown");
    var compScore = document.querySelector(".is-comp-score-shown");
    document.querySelector(".is-user-score-shown").innerHTML = "0";
    document.querySelector(".is-comp-score-shown").innerHTML = "0";
    document.querySelector(".is-winner-shown").innerHTML = "";
    userChoiceReset();
    compChoiceReset();
    compScore.style.cssText = "#000";
    userScore.style.cssText = "#000";
}
function doNotShowPaperTxt() {
    var txt = document.querySelector(".is-txt-paper-hidden");
    txt.style.display = "none";
}
function showPaperTxt() {
    var txt = document.querySelector(".is-txt-paper-hidden");
    txt.style.display = "block";
}
function doNotShowRockTxt() {
    var txt = document.querySelector(".is-txt-rock-hidden");
    txt.style.display = "none";
}
function showRockTxt() {
    var txt = document.querySelector(".is-txt-rock-hidden");
    txt.style.display = "block";
}

function doNotShowScissorsTxt() {
    var txt = document.querySelector(".is-txt-scissors-hidden");
    txt.style.display = "none";
}
function showScissorsTxt() {
    var txt = document.querySelector(".is-txt-scissors-hidden");
    txt.style.display = "block";
}

