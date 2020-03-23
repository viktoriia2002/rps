// global variables for game
var player_lives = 1;
var computer_lives = 1;
var choices = ['rock', 'paper', 'scissors'];
var computers_choice;
var players_choice;
var message_area = document.getElementById('game_area');
var clearArea = false;
var game_area = document.getElementById('game_area').style.color = "lightblue";

document.getElementById('playGame').addEventListener("click", runGame);

// game logic
function runGame() {
    if (clearArea) {
        message_area.innerHTML = '';
    }

    clearArea = false;

    // initial messaging
    message_area.innerHTML+= "***** <br />";
    message_area.innerHTML+= "Computer lives: " + computer_lives + "<br />";
    message_area.innerHTML+= "x__x <br />";
    message_area.innerHTML+= "Player lives: " + player_lives + "<br />";
    message_area.innerHTML+= "x__x <br />";
    message_area.innerHTML+= "Choose your weapon! <br />";
    message_area.innerHTML+= "***** <br />";

    // setting game choices
    var players_choices = document.getElementById('gameOption');
    players_choice = players_choices.options[players_choices.selectedIndex].value;
    computers_choice = choices[Math.floor(Math.random() * choices.length)];

    // displaying choices
    message_area.innerHTML+= "***** <br />";
    message_area.innerHTML+= 'Computer chose: ' + computers_choice + ' <br />';
    message_area.innerHTML+= "x__x <br />";
    message_area.innerHTML+= 'Player chose: ' + players_choice + ' <br />';
    message_area.innerHTML+= "x__x <br />";
    message_area.innerHTML+= "***** <br />";

    // conditionals for actual game logic
    //if (players_choice == computers_choice) {
        //message_area.innerHTML+= 'Tie! No one wins, play again! <br />';
    //} else if (players_choice == 'rock') {
        //checkComputerWins('paper', 'covers', 'smashes');
    //} else if (players_choice == 'paper') {
        //checkComputerWins('scissors', 'cuts', 'covers');
    //} else if (players_choice == 'scissors') {
        //checkComputerWins('rock', 'smashes', 'cuts');
    //} else {
        //message_area.innerHTML+= "Well that's not a valid choice. <br />";
        //clearArea = true;
    //}

    // restart game loop
    //checkStatus();
//}

    checkChoices();

    function checkChoices(){

        if (players_choice == computers_choice) {
        choice();
    } else if (players_choice == 'rock') {
        rock();
        
    } else if (players_choice == 'paper') {
        paper();
        
    } else if (players_choice == 'scissors') {
        scissors();
        
    } else {
        invalid();
        
    }

    }

    function choice(){
        if (players_choice == computers_choice) {
        message_area.innerHTML+= 'Tie! No one wins, play again! <br />';
    }
}

    function rock(){
       if (players_choice == 'rock') {
        checkComputerWins('paper', 'covers', 'smashes'); 
    }
}
    function paper(){
        if (players_choice == 'paper') {
        checkComputerWins('scissors', 'cuts', 'covers');
    }
}
    function scissors(){
        if (players_choice == 'scissors') {
        checkComputerWins('rock', 'smashes', 'cuts');
    }
}

    function invalid(){
         message_area.innerHTML+= "Well that's not a valid choice. <br />";
        clearArea = true;
        }

    checkStatus();
}

changeh1color();

function changeh1color(){
    document.getElementById("myH2").style.color = "#0F5298";
    document.getElementById("myH2").style.textDecoration = "underline overline";
}

changeBackgroundcolor();

function changeBackgroundcolor() {
    document.body.style.background = "#3C99DC";
}
// checks whether computer wins against player choice
function checkComputerWins(validateChoice, winMessage, loseMessage) {
    if (computers_choice == validateChoice) {
        message_area.innerHTML += 'You lose! x__x ' + computers_choice + ' ' + winMessage + ' ' + players_choice + '<br />';
        player_lives--;
    } else {
        message_area.innerHTML += 'You win! o__o ' + players_choice + ' ' + loseMessage + ' ' + computers_choice + '<br />';
        computer_lives--;
    }
}

//  check status of game
function checkStatus() {
    if (player_lives == 0) {
        showWinloseMessage("lost");
    } else if (computer_lives == 0) {
        showWinloseMessage("won");
    } else {
        message_area.innerHTML+= "Select another choice! <br />";
        message_area.innerHTML+= "***** <br /><br />";
    }
}

// messaging for winning or losing
function showWinloseMessage(status) {
    message_area.innerHTML+= "***** <br />";
    message_area.innerHTML+= "Game Over. <br />";
    message_area.innerHTML+= "You " + status + "! Would you like to play again? <br />";
    message_area.innerHTML+= "***** <br />";
    clearArea = true;
}











