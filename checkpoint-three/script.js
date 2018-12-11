$(document).ready(function(){
    var tot1 = 0;
    var tot2 = 0;
    var turn = 'p1';
    var sides = 6;
    var dice = {
       sides: sides,
       roll: function() {
         var randomNumber = Math.floor(Math.random() * this.sides) + 1;
         return randomNumber;
         }
    }
    
   $("#button").on("click",function(){
       if(turn === 'p2'){
      $("#button").prop("disabled",true);
             }
     
    var result = dice.roll(); 
    printNumber(result);
     
    tot1 = result + tot1;
    var printDiceTotal = "Total: " + tot1;
    $("#diceTotal").text(printDiceTotal);
    
    turn = 'p2';
    $("#p2turn").text("Player 2 turn");
    $("#p1turn").text("");
    $("#button2").prop("disabled",false);
    $("#button").prop("disabled", true);
     
    if (tot1 > 20){
      $("#win").text("Player 1 Wins!");
      $("#p1turn").text("");
      $("#p2turn").text("");
      $("#button").prop("disabled",true);
      $("#button2").prop("disabled",true);
      }
   });
    
    function printNumber(number) {
       $("#dice").text(number);
     }
    
    $("#button2").on("click",function(){
       if(turn === 'p1'){
         $("#button2").prop("disabled",true);
             }
    var result = dice.roll();
    printNumber2(result);
      
    tot2 = result + tot2;
    var printDiceTotal = "Total: " + tot2;
    $("#diceTotal2").text(printDiceTotal);
   
    turn = 'p1';
    $("#p2turn").text("");
    $("#p1turn").text("Player 1 turn");
    $("#button2").prop("disabled",true);
    $("#button").prop("disabled",false);
      
     if (tot2 > 20){
      $("#win2").text("Player 2 Wins!");
      $("#p1turn").text("");
      $("#p2turn").text("");
      $("#button").prop("disabled",true);
      $("#button2").prop("disabled",true);
       }
    });
    
    function printNumber2(number) {
     $("#dice2").text(number);
     }
    
    
  $("#newgame").on("click",function(){
      $("#dice").text("");
      $("#dice2").text("");
      $("#diceTotal").text("");
      $("#diceTotal2").text("");
      $("#p1turn").text("");
      $("#p2turn").text("");
      $("#win").text("");
      $("#win2").text("");
      $("#button").prop("disabled",false);
      $("#button2").prop("disabled",false);
      tot1 = 0;
      tot2 = 0;
      var turn = 'p1';
     })
 });