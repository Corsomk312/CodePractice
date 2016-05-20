var TimelineView = Backbone.View.extend({
  template: JST["templates/timeline"],
  el: '#tweets-container',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.addAll);
    // this.listenTo(this.collection, 'add', this.addOneToBeginning);
  },

  // addOneToBeginning: function(tweet) {
  //   var view = new TweetView({model: tweet});
  //   view.render();
  //   this.$el.find("ul").prepend(view.el);
  //   return this;
  // },

  render: function() {
    this.$el.html(this.template());

    return this;
  },

  addOne: function(tweet) {
    var view = new TweetView({model: tweet});
    view.render();

    this.$el.find("ul").append(view.el);

    return this;
  },

  addAll: function() {
    this.collection.each(function(tweet) {
      this.addOne(tweet);
    }, this);

    return this;
  }
});
