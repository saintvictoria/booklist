(function () {

  App.Views.EditBook = Backbone.View.extend({

    events: {
      'submit #updateBook' : 'update',
      'click #delete' : 'deleteBook'
    },

    initialize: function (options) {
      this.options = options;
      this.render();

      $('main').html(this.$el);
    },

    render: function () {

      var source = $('#bookEdit').html();
      var template = Handlebars.compile(source);
      var bookdata = this.options.book.toJSON();


      this.$el.html(template(bookdata));

      return this;
    },

    update: function (e) {
      e.preventDefault();

      this.options.book.set({
        title: $('#update_title').val(),
        authorFirst: $('#update_authorFirst').val(),
        authorLast:$('#update_authorLast').val,
        comments: $('#update_comments').val()
      });

      this.options.book.save()

      //Go back to our home page
      App.router.navigate('', {trigger: true});

    }

  });

}());
