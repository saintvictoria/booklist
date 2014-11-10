Parse.initialize("iaY3RKMXLrIdGDiI2HqgQaa0QKiTepA3J1aTIYfR", "ZPFU5QaEAe8YxP2bUjtb7uVdhMiTlz9YmYCg7xm4");
(function () {


App.allBooks = new App.Collections.Book();

App.allBooks.fetch().done(function(){

  App.router = new App.Routers.AppRouter();
});

}());
