
function generate_dropdown_box(){
  return $('form div select').first().html();
}

window.total_cost = 0

$(document).ready(function() {
  $('input[type=submit]').attr('disabled', 'disabled');

  var totalcost=0;
  $('form').on('change', 'select', function() {
    $('form div').first().html(); // all the <optgroup> and <options> from the first <select> tag
    $('#drinklist').append('<select>' + generate_dropdown_box() + '</select>');

    totalcost += 1;
    $('#drinks').text(totalcost);
      // console.log(x)

      
      $('select').each(function(){
        var price = $(this).find(":selected").attr('data-price');
        if ($.isNumeric(price)){
          window.total_cost += (price/100);
        }

        $('#cost').text("$" + window.total_cost.toFixed(2));
        $('input[type=submit]').removeAttr("disabled");
      });
    });
  
  $('form').submit(function(event){
     event.preventDefault();
     $.ajax({
      type: "post", url: "/shop",
      success: function (data) {
        $('form').text(data + "$" + total_cost.toFixed(2));
      },
    error: function (request, status, error) {
      alert("There was an error when submitting your request");
    }
      });
  });
});

// var jqAjax = $.ajax({
//    url:  'server URL',
//    type: "GET/POST",
//    dataType: "TYPE" , 
//  });
//   jqAjax.fail(function(jqXHR, textStatus, errorThrown){
//     switch(textStatus)
//     {
//       case "404":
//       x="404 Error";
//       break;
//       case "0":
//       x="0 Error";
//       break;
//       case "500":
//       x="500 Error";
//       break;
//       case "timeout":
//       x="Page timeout";
//       break;
//     }
//   });

 //for each select tag
 //grab the selected option
 //then grab the data-price value from that option
