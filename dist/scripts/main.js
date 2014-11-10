(function () {

  App.Models.Book = Backbone.Model.extend({

    'idAttribute': "_id",

       'defaults': {
    'authorFirst':'',
     'authorLast': '',
          'title': '',
  },


  'initialize': function (){
    var authorFirst = this.get('authorFirst');
    var authorLast = this.get('authorLast');
    var title = this.get('title');
  }


});
}());


(function () {
var my_server = 'http://tiy-atl-fe-server.herokuapp.com/collections/vicbooks';

App.Collections.Book = Backbone.Collection.extend({

  'model': App.Models.Book,
  url: my_server
});

}());


(function (){

App.Views.BookView = Backbone.View.extend({
  //this is the element that backbone will create
  tagName: 'div',
  


  initialize: function () {
    this.render();

    App.allBooks.on('sync', this.render, this);
    // App.allBooks.on('destroy', this.render,this);
    //this is where the backbone element goes into the tree
    $('main').html(this.$el);

  },

  render: function () {


    var source = $('#bookList').html();
    var template = Handlebars.compile(source);
    var data = {'books':App.allBooks.toJSON()};
    var s = template(data);
    this.$el.html(s);


    return this;
  }

  // deleteMyBook: function(e){
  //
  //   e.preventDefault();
  //
  //   var id = $(e.target).attr('');
  //
  //   var goodbye = App.allBooks.get(id);
  //
  //   goodbye.destroy();
  // }


});

}());

(function () {

  App.Views.BookAdd = Backbone.View.extend({


    events: {
      'submit #addBookForm' : 'addNewBook'
    },

    initialize: function () {
      this.render();
      $('main').html(this.$el);
    },

    render: function () {
      
      this.$el.html($('#AddBook').html());
    },

    addNewBook: function (e) {
      e.preventDefault();

    var book = new App.Models.Book({
      title: $('#title').val(),
      authorFirst: $('#authorFirst').val(),
      authorLast:$('#authorLast').val()
    });


      // Add to our collection & save to server
      App.allBooks.add(book).save(null, {
        success: function(){
          $('#addBookForm')[0].reset();
          App.router.navigate('', {trigger: true});

        }
      });


    }

  });

}());

(function () {

  App.Views.EditBook = Backbone.View.extend({

    events: {
      'submit #updateBook' : 'update',
      'click #delete' : 'deleteBook'
    },

    initialize: function (options) {
      this.options = options;
      this.render();

      $('main').html(this.$el);
    },

    render: function () {

      var source = $('#bookEdit').html();
      var template = Handlebars.compile(source);
      var bookdata = this.options.book.toJSON();


      this.$el.html(template(bookdata));

      return this;
    },

    update: function (e) {
      e.preventDefault();

      this.options.book.set({
        title: $('#update_title').val(),
        authorFirst: $('#update_authorFirst').val(),
        authorLast:$('#update_authorLast').val,
        comments: $('#update_comments').val()
      });

      this.options.book.save()

      //Go back to our home page
      App.router.navigate('', {trigger: true});

    }

  });

}());


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

      new App.Views.EditBook({ book: b});
    },

    addBook: function (){

      new App.Views.BookAdd();
    }

  });

}());


(function () {


App.allBooks = new App.Collections.Book();

App.allBooks.fetch().done(function(){

  App.router = new App.Routers.AppRouter();
});

}());
