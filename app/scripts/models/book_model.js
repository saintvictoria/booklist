var Book = Backbone.Model.extend({
  'defaults': {
    'author':'',
    'title': '',
    'genre':''
  },

  'idAttribute': "_id",

  'initialize': function (){
    var author = this.get('author');
    var title = this.get('title');
    var genre = this.get('genre');
  }


});

//var add_book = function(){
  //var input = $('#bookTemplate').val();
//  if(input === ''){
  //  return;
//  };

  //var book = new Book({
  //  item: input,
  //  status:$(this).status,
  //});

//$('.add').on('click', function
//(event){

  //event.preventDefault();
  //add_book();
//});

//$('#bookTemplate').keyup(function (e){
  //if (e.keyCode == 13) {
    //add_book();
//  }
//});
