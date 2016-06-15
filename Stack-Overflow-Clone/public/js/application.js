$(document).ready(function () {
  $("#answer_form").on("click",function(event){
    event.preventDefault();
     var link = $(this).children()[0];
     var route = $(link).attr('href')
      $(this).hide()

      var request = $.ajax({
        method: "get",
        url: route
      });

      request.done(function(responseData){
        console.log(responseData)
        $(".answer-container").append(responseData);
      });
  });
});


$(document).ready(function () {
  $('#submit_question_comment').submit(function(event){
    event.preventDefault();
    var params = $(this).serialize();
    var url = $(this).attr('action')
    var request = $.ajax({
      method: "POST",
      url: url,
      data: params
    });
    request.done(function(responseData){
      $("#display_question_comments").append(responseData);
      $('#submit_question_comment')[0].reset();
    });
  });

    $('#submit_answer_comment').submit(function(event){
    event.preventDefault();
    var params = $(this).serialize();
    var url = $(this).attr('action')
    var request = $.ajax({
      method: "POST",
      url: url,
      data: params
    });
    request.done(function(responseData){
      $("#display_answer_comments").append(responseData);
      $('#submit_answer_comment')[0].reset();
    });
  });

});

$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them


  $(".vote-button").click(function(event){
    event.preventDefault();
    var path = $(this).attr('href');
    var id = $(this).parent().attr('id');


    var request = $.ajax({
    method: "GET",
    url: path,
    });

    request.done(function(responseData){
      $('#' + id +' .vote-button').css('color', 'black');
      var points = $('#' + id +' .points');
      points.html(responseData.points);
    })

    request.fail(function(response){
      alert('Your book is overdue!' );
    })
  })

  $(".down-vote-button").click(function(event){
    event.preventDefault();
    var path = $(this).attr('href');
    var id = $(this).parent().attr('id');


    var request = $.ajax({
    method: "GET",
    url: path,
    });

    request.done(function(responseData){
      $('#' + id +' .vote-button').css('color', 'red');
      var points = $('#' + id +' .points');
      points.html(responseData.points);
    })
  })
})







