$(function(){


  $('#zip-code-check').on('submit', function(e){
    e.preventDefault();
    var zipcode = $(this).serializeArray()[0].value;
    var url = 'http://dev.flowersfordreams.com/delivery/zip-check/' + zipcode

    var request = $.ajax({
      method: 'GET',
      url: url
    });

    request.done(function(data){
      $('.delivery_zip > p').text(zipcode)
      var delivery = data.delivery_info
      $('.delivery_zip > p').text(zipcode)

      if (delivery.delivery_available){
        deliveryAvailable(delivery);
      } else{
        alert("We're sorry, delivery is unavailable for this location. Please try another!")
      }
    });
  });

  $('.hidden-form').on('submit', function(e){
    e.preventDefault();
    var form = $(this).serializeArray();
    var date = form[form.length-1].value
    var zip = $('.delivery_zip > p').text()

    var validDate = $.ajax({
      method: 'GET',
      url: 'http://dev.flowersfordreams.com/delivery/zip-check/' + zip + '/' + date
    });

    validDate.done(function(response){
      var delivery = response.delivery_info

      if(delivery.delivery_available){
        window.location.replace("/checkout.html");
      }else {
        $('.nodelivery').html('<h3>Delivery is unavailable for this date. Please try again</h3>')
      };
    });

    // (function(){
    //   var delivery = response.delivery_info

    //   if(delivery.delivery_available){
    //     window.location.replace("/checkout.html");
    //   }else {
    //     $('.nodelivery').html('<h3>Delivery is unavailable for this date. Please try again</h3>')
    //   };

    // })();

  });



});

var deliveryAvailable = function(delivery){
  $('.hidden-form').show();

  if(delivery.final_charge === null){
    noDeliveryFee();
  }
  else {
    deliveryFee(delivery);
  };
}

var noDeliveryFee = function(){
  $('.delivery_charge').html('<b>Delivery charge: </b> No Delivery Fee');
}

var deliveryFee = function(delivery_data){
  $('.nodelivery').empty();
  $('.delivery_charge').html("<b>Delivery charge: </b> $" + delivery_data.final_charge);
  $('.delivery_message').html("<b>Message about delivery charge: </b>" + delivery_data.message)
}