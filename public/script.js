
function generate_dropdown_box(){
  return $('form div').first().html();
}

window.my_total_cost = 0
window.total_cost = 0

$(document).ready(function() {
  $('input[type=submit]').attr('disabled', 'disabled');

  var totalcost=0;
  $('form').on('change', 'select', function() {
    $('form div').first().html(); // all the <optgroup> and <options> from the first <select> tag
    $('#drinklist').append(generate_dropdown_box());

      totalcost += 1;
      $('#drinks').text(totalcost);
      // console.log(x)

  var value = 0;
  $('select').each(function(){
    var price = $(this).find(":selected").attr('data-price');
    if ($.isNumeric(price)){
    window.total_cost += (price/100);
    }

    window.my_total_cost = $('#cost').text("$" + window.total_cost.toFixed(2));
          $('input[type=submit]').removeAttr("disabled");

    $('form').submit(function(event){
      event.preventDefault();
      $.post('/shop', 
      {
        the_cost: "window.my_total_cost",
      },
      function(data){
        alert(data);
      });
    });
   });
  });
});

 //for each select tag
 //grab the selected option
 //then grab the data-price value from that option
