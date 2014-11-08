
(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      Backbone.history.start();
    },

    routes: {
      '' : 'home',
      'add':'addBook',
      'edit/:id': 'editBook'
    },

    home: function () {
      new App.Views.BookView({collection: App.allBooks});
      //new App.Views.BookAdd({ collection: App.allBooks });
    },


    editBook: function (id) {

      var b = App.allBooks.get(id);

      new App.Views.OneBook({ book: b});
    },

    addBook: function (){

      new App.Views.BookAdd();
    }

  });

}());
