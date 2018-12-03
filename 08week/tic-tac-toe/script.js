'use strict';

  // Put app logic in here
  $(document).ready(function(){
    var turn = 'X';
    var count = 0;
    $('[data-cell]').on('click', function(){
      if($(this).text() === ''){
        $(this).text(turn);
        count++;
        checkForWin(count);
        if(turn === 'O'){
          turn = 'X';
        }else{
          turn = 'O';
        }
      }
    })
    
    function checkForWin(tie){
      if(count === 9){
        $('#announce-winner').text(`Tie Game`); 
      } 
      if($('[data-cell="0"]').text() === turn &&
        $('[data-cell="1"]').text() === turn &&
        $('[data-cell="2"]').text() === turn){
        $('#announce-winner').text(`${turn} wins`)
      } else if($('[data-cell="3"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="5"]').text() === turn){
        $('#announce-winner').text(`${turn} wins`)
      } else if($('[data-cell="6"]').text() === turn &&
        $('[data-cell="7"]').text() === turn &&
        $('[data-cell="8"]').text() === turn){
        $('#announce-winner').text(`${turn} wins`)
      } else if($('[data-cell="0"]').text() === turn &&
        $('[data-cell="3"]').text() === turn &&
        $('[data-cell="6"]').text() === turn){
        $('#announce-winner').text(`${turn} wins`)
      } else if($('[data-cell="1"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="7"]').text() === turn){
        $('#announce-winner').text(`${turn} wins`)
      } else if($('[data-cell="2"]').text() === turn &&
        $('[data-cell="5"]').text() === turn &&
        $('[data-cell="8"]').text() === turn){
        $('#announce-winner').text(`${turn} wins`)
      } else if($('[data-cell="0"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="8"]').text() === turn){
        $('#announce-winner').text(`${turn} wins`)
      } else if($('[data-cell="2"]').text() === turn &&
        $('[data-cell="4"]').text() === turn &&
        $('[data-cell="6"]').text() === turn){
        $('#announce-winner').text(`${turn} wins`)
    }}

   });

   $('#clear').on('click', function(){
    $('[data-cell]').text('');
    $('#announce-winner').text('');
    location.reload();
  });