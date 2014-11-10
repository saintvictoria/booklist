
(function () {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function () {
      Parse.history.start();
    },

    routes: {
      '' : 'home',
      'add':'addBook',
      'edit/:id': 'editBook'
    },

    home: function () {
      new App.Views.BookView({collection: App.allBooks});
    },


    editBook: function (id) {

      var b = App.allBooks.get(id);

      new App.Views.EditBook({ book: b });
    },

    addBook: function (){

      new App.Views.BookAdd();
    }

  });

}());
