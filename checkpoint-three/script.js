$(document).ready(function(){
    // hide the dice
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    // reset all scores and current
    $('#current-score-1').text('0');
    $('#current-score-2').text('0');
    $('#total-score-1').text('0');
    $('#total-score-2').text('0');
    // set active class to active player 1 area
    $('.player-1-area').addClass('active');
    // disable player 2 roll dice button
    $("#btn-roll-2").prop("disabled",true);
    currscore1 = 0;
    currscore2 = 0;
    totscore1 = 0;
    totscore2 = 0;
    var printDiceCurr;
    var printDiceTotal;
    var turn = 'p1';
    var sides = 6;
    var dice1 = {
       sides: sides,
       roll: function() {
         var randomNumber = Math.floor(Math.random() * this.sides) + 1;
         return randomNumber;
         }
    }
    var dice2 = {
        sides: sides,
        roll: function() {
          var randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
          }
     }    
     
    
   $("#btn-roll-1").on("click",function(){
        if(turn === 'p1'){
        $("#btn-roll-1").prop("disabled",true);
        }

    // get winning score
    var input = $('.winningScore').val();
    var winningScore;
    // if there is an input
    if(input) {
       winningScore = input;
    } else {
      // without input default score
      winningScore = 50;
    }

    var result1 = dice1.roll(); 
    var result2 = dice2.roll(); 
    printNumber(result1,result2);
     
    currscore1 = result1 + result2;
    printDiceCurr = currscore1;
    totscore1 = result1 + result2 + totscore1;
    printDiceTotal = totscore1;
    $("#current-score-1").text(printDiceCurr);
    $("#total-score-1").text(printDiceTotal);
    
    if (totscore1 > winningScore){
        // Check if player won the game based on target score
        $('#name-1').text('Winner!');
        //disable roll dice buttons
        $("#btn-roll-1").prop("disabled",true);
        $("#btn-roll-2").prop("disabled",true);
    } else {
        turn = 'p2';
        $("#btn-roll-1").prop("disabled",true);
        $("#btn-roll-2").prop("disabled", false);
    }

        // toggle active areas
        $('.player-1-area').toggleClass('active');
        $('.player-2-area').toggleClass('active');
     
   });
    
    function printNumber(number1,number2) {
        var diceDOM1 = document.querySelector('.dice1');
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM1.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-' + number1 + '.png';
        diceDOM2.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-' + number2 + '.png';
     }
    
    $("#btn-roll-2").on("click",function(){
        if(turn === 'p2'){
            $("#btn-roll-2").prop("disabled",true);
                   }

        // get winning score
        var input = $('.winningScore').val();
        console.log(input);
        var winningScore;
        // if there is an input
        if(input) {
            winningScore = input;
        } else {
            // without input default score
            winningScore = 50;
        }
           
        var result1 = dice1.roll(); 
        var result2 = dice2.roll(); 
        printNumber(result1,result2);
        
        currscore2 = result1 + result2;
        printDiceCurr = currscore2;
        totscore2 = result1 + result2 + totscore2;
        printDiceTotal = totscore2;
        $("#current-score-2").text(printDiceCurr);
        $("#total-score-2").text(printDiceTotal);
          
        if (totscore2 > winningScore){
            // Check if player won the game based on target score
            $('#name-2').text('Winner!');
            //disable roll dice buttons
            $("#btn-roll-1").prop("disabled",true);
            $("#btn-roll-2").prop("disabled",true);
        } else {
            turn = 'p1';
            $("#btn-roll-1").prop("disabled",false);
            $("#btn-roll-2").prop("disabled", true);
        }
            // toggle active areas
            $('.player-1-area').toggleClass('active');
            $('.player-2-area').toggleClass('active');
          
    });
    
    
    $(".btn-new").on("click",function(){
        // clear the score input field
        $('.winningScore').val('');
        // hide the dice
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        // reset all scores and current
        $('#current-score-1').text('0');
        $('#current-score-2').text('0');
        $('#total-score-1').text('0');
        $('#total-score-2').text('0');
        // change player names back
        $('#name-1').text('Player 1');
        $('#name-2').text('Player 2');
        // remove winner class to active player panel
        $('.player-1-area').removeClass('winner');
        $('.player-2-area').removeClass('winner');
        // reset active class to active player panel
        $('.player-1-area').removeClass('active');
        $('.player-2-area').removeClass('active');
        $('.player-1-area').addClass('active');
        $("#btn-roll-1").prop("disabled",false);
            // disable player 2 roll dice button
        $("#btn-roll-2").prop("disabled",true);
        currscore1 = 0;
        currscore2 = 0;
        totscore1 = 0;
        totscore2 = 0;
        var turn = 'p1';
    })

 });

