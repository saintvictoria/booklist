

var allBooks = new Books();

allBooks.fetch().done(function(){
  var booksview = new BooksView({
    collection:  allBooks
  });
  booksview.render();
});



// var add_book = function(){
//   var input = $('#bookTemplate').val();
//  if(input === ''){
//    return;
//  };
//
//   var book = new Book({
//    item: input,
//    status:$(this).status,
//   });
// });

var add_book = function() {
  var title = ('#title').val();
  var author = ('#author').val();
  var genre = ('#genre').val();
  var book = new Book({
    title: title,
    author: author,
    genre: genre
  });

};


$('.add').on('click', function
(event){

  event.preventDefault();
  add_book();
});

//$('#bookTemplate').keyup(function (e){
  //if (e.keyCode == 13) {
    //add_book();
//  }
//});

Backbone.history.start();
