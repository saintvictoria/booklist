
(function () {


App.allBooks = new App.Collections.Book();

App.allBooks.fetch().done(function(){

  App.router = new App.Routers.AppRouter();
});

}());
