(function () {

  App.Views.OneBook = Backbone.View.extend({

    tagName: 'ul',
    className: 'OneBook',

    events: {
      'submit #updateBook' : 'update',
      'click #delete' : 'deleteBook'
    },

    initialize: function (options) {
      this.options = options;
      this.render();

      console.log("we renderin stuff");
      $('#bookEdit').html(this.$el);
    },

    render: function () {
      // var self = this;

      var source = $('#bookEdit').html();
      var template = Handlebars.compile(source);
      var data = {'books':App.allBooks.toJSON()};

      this.$el.html(template(data));

      return this;
    },

    update: function (e) {
      e.preventDefault();

      this.options.book.set({
        title: $('#update_title').val(),
        authorFirst: $('#update_authorFirst').val(),
        comments: $('#update_comments').val()
      });

      this.options.book.save()

      //Go back to our home page
      App.router.navigate('', {trigger: true});

    }

  });

}());
