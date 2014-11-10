
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
