'use strict';

$(document).ready(function() {
  // Put app logic here
  $(function(){
    $(".draggable").draggable({
      // revert: 'invalid'
    });
    $('#dropArea').droppable({
      drop: function( event, ui ) {
        $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
      }
    })
  })
});
