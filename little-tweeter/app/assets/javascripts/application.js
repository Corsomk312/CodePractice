// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree .

$(document).ready(function(){
  var tweets = new TweetsCollection();
  var timelineView = new TimelineView({collection: tweets});
  timelineView.render();
  $('#tweets-container').append(timelineView.el);

  tweets.fetch({reset: true});

  $("#tweet-form").on("submit", function(e) {
      e.preventDefault();
      var formData = $(this).find('textarea').val();
      console.log(formData);
      tweets.create({
        content: formData
      });
      tweets.fetch({reset: true});
      timelineView.render();
      //
      // var tweet = new Tweet({content: formData});
      // console.log(tweet);
  });
});
