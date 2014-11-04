

(function () {

new App.Views.BookAdd();

App.allBooks = new App.Collections.Book();

App.allBooks.fetch().done(function(){
  new App.Views.BookView();
});

}());
