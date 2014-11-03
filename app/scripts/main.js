_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var my_server = 'http://tiy-atl-fe-server.herokuapp.com/collections/vicbooks';


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

var Books = Backbone.Collection.extend({

  'model': Book,
  url: my_server,
});

var allBooks = new Books();

var Workspace = Backbone.Router.extend({
  'routes': {
    "add": 'addlist',
    "": 'booksadded'
  },
  'addlist': function(){
    console.log('welcome');
    $('#books').show();
  },
  'booksadded': function(){
    var source = $('#bookTemplate').html();
    var template = Handlebars.compile(source);
    allBooks.fetch().done(function(){
      var data = {'books': allBooks.toJSON()};
      $('#booklist > ul').html(template(data));
      $('#booklist').show();
    });
  }
});

 var router = new Workspace();

 $('.add').on('click', function(){
   router.navigate('add', {trigger: true});
 });

 $('#addBook').on('submit', function(){

   var $form = $(this);

   var title = $form.find('#title').val();
   var author = $form.find('#author').val();
   var genre = $form.find('#genre').val();

   var x = new Book({ 'title': title, 'author': author, 'genre': genre });
   allBooks.add(x).save().done(function(){
     $form[0].reset();
     router.navigate('', {trigger: true});
   });

   return  false;

 });


Backbone.history.start();
