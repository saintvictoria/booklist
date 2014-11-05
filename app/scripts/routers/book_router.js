
(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      // Light the Fire
      Backbone.history.start();
    },

    routes: {
      '' : 'home',
      'edit/:id' : 'editBook'
    },

    home: function () {
      new App.Views.BookView();
      new App.Views.BookAdd({ collection: App.allBooks });
    },

    editBook: function (id) {

      var c = App.allBooks.get(id);

      new App.Views.OneBook({ book: c });
    }

  });

}());
