(function () {

  App.Views.BookAdd = Backbone.View.extend({

    el: '#bookAdder',

    events: {
      'submit #addBook' : 'addNewBook'
    },

    initialize: function () {
      this.render();
    },

    render: function () {
      var form_html = $('#AddBook').html();
      this.$el.html(form_html);
    },

    addNewBook: function (e) {
      e.preventDefault();

      // Grab feel values from my form
      var title = $('#title').val();
      var authorFirst = $('#authorFirst').val();
      var authorLast = $('#authorLast').val();


      // Create a new Feel
      var book = new App.Models.Book({
        title: title,
        authorFirst: authorFirst,
        authorLast: authorLast
      });

      // Add to our collection & save to server
      App.allBooks.add(book).save();

      // Clear My Form
      $('#addBook')[0].reset();

    }

  });

}());
