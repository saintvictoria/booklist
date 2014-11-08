(function () {

  App.Views.BookAdd = Backbone.View.extend({


    events: {
      'submit #addBook' : 'addNewBook'
    },

    initialize: function () {
      this.render();
      $('#bookAdder').html(this.$el);
    },

    render: function () {
      //var form_html = $('#AddBook').html();
      this.$el.html($('#AddBook').html());
    },

    addNewBook: function (e) {
      e.preventDefault();

    var book = new App.Models.Book({
      title: $('#title').val(),
      authorFirst: $('#authorFirst').val(),
      authorLast:$('#authorLast').val()
    });


      // Add to our collection & save to server
      App.allBooks.add(book).save(null, {
        success: function(){
          $('#addBook')[0].reset();
          App.router.navigate('', {trigger: true});

        }
      });


    }

  });

}());
