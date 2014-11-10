(function () {

  App.Views.BookAdd = Parse.View.extend({


    events: {
      'submit #addBookForm' : 'addNewBook'
    },

    initialize: function () {
      this.render();
      $('main').html(this.$el);
    },

    render: function () {

      this.$el.html($('#AddBook').html());
    },

    addNewBook: function (e) {
      e.preventDefault();

    var book = new App.Models.Book({
      title: $('#title').val(),
      authorFirst: $('#authorFirst').val(),
      authorLast:$('#authorLast').val()
    });

    book.save(null, {
      success: function (){
        App.allBooks.add(book);
        App.router.navigate('', {trigger: true});
      }
    });
    $('#addBookForm')[0].reset();
      // Add to our collection & save to server
      // App.allBooks.add(book).save(null, {
      //   success: function(){
      //     $('#addBookForm')[0].reset();
      //     App.router.navigate('', {trigger: true});
      //
      //   }
      // });


    }

  });

}());
