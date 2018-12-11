// RollDice = {
  
//     init: function() {
        
//       this.bindEvents();
//       this.roll();
//     //   this.render();
//     },
  
    
//     roll: function() {
//       var sides = 6;
//       var randomRoll = Math.floor(Math.random() * sides) + 1;
//       return randomRoll;
//     },
    
//     printNumber: function(number) {
//       $('.js-number').html(number);
//       console.log("dice roll is " + number);
//     //   myTotal(number, total);
//     },
    
//     bindEvents: function() {
//       $('.js-click').on( 'click', function() {
//         //   var total = '';
//          var result = RollDice.roll();
//             // var total = total + result;
//           RollDice.printNumber(result);
//         // if ( $('.dice').hasClass('animated') ) {
//         //   $('.dice').removeClass('animated')
//         // } else {
//         //   $('.dice').addClass('animated')
//         // }
//       })
//     }
    
//     // render: function() {
//     //     var total = 0;
//     //    var result = RollDice.roll();
//     //     var total = total + result;
//     //    RollDice.printNumber(result, total); 
//     //    $('.total').html(total);
//     // }
    
    
// }
  
 
//    RollDice.init();
//   var total = 0;
//   console.log('outside function');
//   function myTotal(result, total){
//       console.log(total);
//   }



    

// $(document).ready(function(){
    var total = 0;
    var newtotal;
    bindEvents();
    // RollDice();
    // printNumber(total);
    // printTotalNumber();


function bindEvents(){
    $('.js-click').on( 'click', function() {
       
                 var newtotal = total + 1;
                //  var result = RollDice();
                // var newtotal = (result + total);
                   printNumber(total, newtotal);
                //   printTotalNumber(newtotal, result);
    })
}

// function RollDice(){
//     var sides = 6;
//     var randomRoll = Math.floor(Math.random() * sides) + 1;
//     return randomRoll;
// }

function printNumber(number, newtotal) {
          $('.js-number').html(number);
        //   $('.total').html(newtotal);
          console.log("dice roll is " + number);
          console.log("total is " + newtotal);
        }

//         function printTotalNumber(newtotal, result) {
//             // $('.js-number').html(number);
//            var grandTotal =  newtotal + result;
//            $('.total').html(grandTotal);
//             // console.log("dice roll is " + number);
//             console.log("total is " + grandTotal);
//           }
//         // })