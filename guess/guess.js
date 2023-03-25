const answer =Math.floor(Math.random()*10);
let guesses = 0;

document.getElementById("submit").onclick = function(){
    guess = document.getElementById("guess").value;
    guesses += 1;

    if(guess == answer){

        alert(`${answer} is the Number.It took you ${guesses}guesses`);
    }
    else if(guess<answer){
        alert("Too Small");
    }
    else{
        alert("Too large");
    }
}