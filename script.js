function generateComputerChoice() {
    var random = Math.random();
    if (random <= .33) {
        return "rock";
    } else if (random <= .66) {
        return "paper";
    } else {
        return "scissors"
    }
}

var wantsToPlay = prompt("Would you like to play a game?");
if (wantsToPlay.toLowerCase() === "yes" || wantsToPlay.toLowerCase() === "sure" || wantsToPlay.toLowerCase() === "ok" || wantsToPlay.toLowerCase() === "yep") {
    var userChoice = prompt("Let's play rock, paper, scissors! You go first -- Choose Rock, Paper or Scissors.");

    var computerChoice = generateComputerChoice();

    if (userChoice.toLowerCase() === "rock") {
        if (computerChoice === "rock") {
            alert("Great minds think alike! I chose Rock, too. Looks like a tie!");
        } else if (computerChoice === "paper") {
            alert("Paper! Looks like I covered up your rock and won! Better luck next time!");
        } else if (computerChoice === "scissors") {
            alert("Rock? You crushed my scissors!! Ouch, you're too good at this");
        }
    } else if (userChoice.toLowerCase() === "paper") {
        if (computerChoice === "rock") {
            alert("I chose Rock and you covered me up! You win...");
        } else if (computerChoice === "paper") {
            alert("Hey! I chose paper, too! High five for a tie.");
        } else if (computerChoice === "scissors") {
            alert("Chop chop my scissors cut up your paper into little snowflakes.");
        }
    } else if (userChoice.toLowerCase() === "scissors") {
        if (computerChoice === "rock") {
            alert("I chose Rock and crushed your scissors. Maybe you'll win if you try again!");
        } else if (computerChoice === "paper") {
            alert("Ouch! You cut my Paper :( I guess you win.)");
        } else if (computerChoice === "scissors") {
            alert("Yay, we both chose scissors - let's not race with them!");
        }
    } else prompt("What was that? " + userChoice +"? Sorry, please start over and choose Rock, Paper, or Scissors!")
} else {
    alert("Ok, Maybe Next time :( ");
}
location.reload()
