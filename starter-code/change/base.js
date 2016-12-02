console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $(".add").change(function () {
    var $left = $('#left').val();
        //console.log($left);
    var $right = $('#right').val();
    var total = Number($right) + Number($left);
    $("#total").val(total);
  })
});



// <input type="number" class="add" id="left"> +
// <input type="number" class="add" id="right"> =
// <input type="number" id="total"><br>
