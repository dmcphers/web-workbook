var p1 = prompt("P1 Choose rock, paper, or scissors");
var p2 = prompt("P2 Choose rock, paper, or scissors");

function rps(p1, p2){
    if(p1 === p2){
        document.write("It was a tie!");
    } else if(p1 === 'rock' && p2 === 'paper'){
        document.write("p2 wins!");
    } else if(p1 === 'paper' && p2 === 'rock'){
        document.write('p1 wins!');
    } else if(p1 === 'rock' && p2 === 'scissors'){
        document.write('p1 wins!');
    } else if(p1 === 'scissors' && p2 === 'rock'){
        document.write('p2 wins!');
    } else if(p1 === 'paper' && p2 === 'scissors'){
        document.write('p2 wins!');
    } else if(p1 === 'scissors' && p2 === 'paper'){
        document.write('p1 wins!');
    }
}

rps(p1, p2);

