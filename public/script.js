$(document).ready(function() {

  var x=0;
  $('form').on('change', 'select', function() {
    $('form div').first().html(); // all the <optgroup> and <options> from the first <select> tag
  $('form').append($('form div').first().html());

  x+=1;

  $('#drinks').text(x);
  console.log(x)

  var value = 0;
  $('select').each(function(){
    var price = $(this).find(":selected").attr('data-price');
    if ($.isNumeric(price)){

    value += (price/100);
  }

    $('#cost').text("$" + value.toFixed(2));
    
    console.log(value);
   });
  });
});

 //for each select tag
 //grab the selected option
 //then grab the data-price value from that option