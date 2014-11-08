
(function (){

App.Views.BookView = Backbone.View.extend({

  tagName: 'ul',
  className: 'bookTemplate',


  initialize: function () {
    this.render();

    App.allBooks.on('sync', this.render, this);
    //App.allBooks.on('destroy', this.render,this);
    $('#booklist').html(this.el);

  },

  render: function () {

    var self = this;

    var source = $('#bookTemplate').html();
    var template = Handlebars.compile(source);
    var data = {'books':App.allBooks.toJSON()};

    this.$el.html(template(data));

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
