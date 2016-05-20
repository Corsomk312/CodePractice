var Tweet = Backbone.Model.extend({
  url: '/tweets',
  defaults: {
    content: ''
  }
});
