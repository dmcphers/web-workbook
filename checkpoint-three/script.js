$(document).ready(function(){
    // hide the dice
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    // reset all total and current scores
    $('#current-score-1').text('0');
    $('#current-score-2').text('0');
    $('#total-score-1').text('0');
    $('#total-score-2').text('0');
    // disable player 2 roll dice button
    $("#btn-roll-2").prop("disabled",true);
    currscore1 = 0;
    currscore2 = 0;
    totscore1 = 0;
    totscore2 = 0;
    var printDiceCurr;
    var printDiceTotal;
    // player 1 starts a new game
    var turn = 'p1';
    var sides = 6;
    // random dice roll function
    var dice1 = {
       sides: sides,
       roll: function() {
         var randomNumber = Math.floor(Math.random() * this.sides) + 1;
         return randomNumber;
         }
    }
    // random dice roll function
    var dice2 = {
        sides: sides,
        roll: function() {
          var randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
          }
     }    
     
    // code for click roll dice button of player 1 
   $("#btn-roll-1").on("click",function(){
        if(turn === 'p1'){
        $("#btn-roll-1").prop("disabled",true);
        }
     
     //set active area if starting a new game without specifying a winning score
     if (!$('.player-1-area').hasClass('active')){
       $('.player-1-area').addClass('active');
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
    // call dice roll functions
    var result1 = dice1.roll(); 
    var result2 = dice2.roll(); 

    // call printNumber function to print the proper dice images
    printNumber(result1,result2);
     
    currscore1 = result1 + result2;
    printDiceCurr = currscore1;
    totscore1 = result1 + result2 + totscore1;
    printDiceTotal = totscore1;
    // set current score text for player 1
    $("#current-score-1").text(printDiceCurr);
    // set total score text for player 1
    $("#total-score-1").text(printDiceTotal);
    
    // Check if player won the game based on target score
    if (totscore1 >= winningScore){
        // display winner message for player 1
        $('#name-1').text('Winner!');
        //disable roll dice buttons
        $("#btn-roll-1").prop("disabled",true);
        $("#btn-roll-2").prop("disabled",true);
    } else {
        // it is player 2 turn - toggle buttons
        turn = 'p2';
        $("#btn-roll-1").prop("disabled",true);
        $("#btn-roll-2").prop("disabled", false);
    }
        // toggle active areas
        $('.player-1-area').toggleClass('active');
        $('.player-2-area').toggleClass('active');
     
   });
    
    // function for printing the proper dice images
    function printNumber(number1,number2) {
        var diceDOM1 = document.querySelector('.dice1');
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM1.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-' + number1 + '.png';
        diceDOM2.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-' + number2 + '.png';
     }
    
     // code for click roll dice button of player 2
    $("#btn-roll-2").on("click",function(){
        if(turn === 'p2'){
            $("#btn-roll-2").prop("disabled",true);
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
        
        // call dice roll functions
        var result1 = dice1.roll(); 
        var result2 = dice2.roll(); 

        // call printNumber function to print the proper dice images
        printNumber(result1,result2);
        
        currscore2 = result1 + result2;
        printDiceCurr = currscore2;
        totscore2 = result1 + result2 + totscore2;
        printDiceTotal = totscore2;
        // set current score text for player 2
        $("#current-score-2").text(printDiceCurr);
        // set total score text for player 1
        $("#total-score-2").text(printDiceTotal);
        
         // Check if player won the game based on target score
        if (totscore2 >= winningScore){
            // display winner message for player 2
            $('#name-2').text('Winner!');
            //disable roll dice buttons
            $("#btn-roll-1").prop("disabled",true);
            $("#btn-roll-2").prop("disabled",true);
        } else {
            // it is player 1 turn - toggle buttons
            turn = 'p1';
            $("#btn-roll-1").prop("disabled",false);
            $("#btn-roll-2").prop("disabled", true);
        }
            // toggle active areas
            $('.player-1-area').toggleClass('active');
            $('.player-2-area').toggleClass('active');
          
    });
    
    // code for 'New Game' button
    $(".btn-new").on("click",function(){
        // clear the score input field
        $('.winningScore').val('');
        // hide the dice
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        // reset all current and total scores
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
        // player 1 starts a new game
        var turn = 'p1';
    })

 });

