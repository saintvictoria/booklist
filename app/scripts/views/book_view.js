var BooksView = Backbone.View.extend({

  tagName: 'ul',
  className: 'bookTemplate',

  initialize: function (options) {
    this.render(options.collection);
  },

  render: function (collection) {

    var self = this;


    var source = $('#bookTemplate').html();
    var template = Handlebars.compile(source);
    var data = {'books':allBooks.toJSON()};

    $('#booklist >ul').html(template(data));


    $('#booklist').html(this.el);

    return this;
  }

});
