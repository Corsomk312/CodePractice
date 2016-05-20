var TweetsCollection = Backbone.Collection.extend({
  url: '/tweets/recent',
  model: Tweet
});
