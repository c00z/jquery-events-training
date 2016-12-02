console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  var time = ( Date.now() );

  $('span').on('click', function() {
    var newParam = $(this).text();
    $('ul').append('<li></li>' + "You clicked: "+ newParam + " at " + time );

  })

})


//Create a list of all the phrases that are clicked.
