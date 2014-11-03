
/*var Workspace = Backbone.Router.extend({
  'routes': {
    "add": 'addlist',
    "": 'booksadded'
  },
  'addlist': function(){
    console.log('welcome');
    $('#books').show();
  },
  'booksadded': function () {
    console.log('booksadded started');
  },
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
*/
/*  var Book_View = Backbone.View.extend({
   tagName: 'ul',
   idName: 'booklist',

   initialize: function(options) {
     this.render(options.books);
   },
   render: function (books) {
     var self = this;

     var source = $('#bookTemplate').html;
     var template = Handlebars.compile(source);
     var data = {'books': allBooks.toJSON()};

     $('#booklist >ul').html(template(data));
     $('#booklist').show(this.el);

     return this;
   }

 });


*/
