// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .
var dateWidget;
$(document).ready(function(){
  $("#new-teacher-button").on('click', function(event){
    $('#new-teacher').toggle('show');
    });

  $(".add-student-to-group-link").on("ajax:success", function(response){
    $(this).parent().hide();
    $(this).parent().next().show();
  });


  $("#new-student-button").on('click', function(event){
    $('#new-student').toggle('show');
  });

$(".container").on("click", ".day > div", function(event){
  event.preventDefault();
  var link = $(this);
  $(".group", this).toggle();
});

  $(".add-student-to-group-link").bind("ajax:before", function() {
    var date = new Date($("#textbox1").wijinputdate("getText"));
    this.href += "&date=" + formatDate(date);
  })

  $(".remove-student-to-group-link").on("ajax:success", function(response){
    $(this).parent().hide();
    $(this).parent().prev().show();
  });

  $(".remove-student-to-group-link").click(function(e) {
    e.preventDefault();
    var date = new Date($("#textbox1").wijinputdate("getText"));
    var formedDate = formatDate(date);
    var params = {date: formedDate}
    var url = this.href;

    var request = $.ajax ({
      url: url,
      method: 'delete',
      data: params
    });

  })

  $(function () {
      // Set dateChanged event handler function
      $("#textbox1").wijinputdate({
          dateChanged : function (e, data) {

          }
      });
  });


  $("#textbox1").wijinputdate({
      showTrigger: true

    });
  });

  $(".group").hide();

  $(".container").on("click", ".day", function(event){
    event.preventDefault();
    var link = $(this);
    $(".group").toggle();

  })



function formatDate(date) {
  var year = "" + (date.getYear() + 1900);
  var month = ("00" + (date.getMonth() + 1)).slice(-2);
  var day = ("00" + date.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

"<%= link_to image_tag('https://www.virgineastcoasttrains.cab/images/minus_button.png'), groups_delete_path(:student_id => student.id), remote: true, method: :post, class: 'add-student-to-group-link' %>"
