
(function () {
var my_server = 'http://tiy-atl-fe-server.herokuapp.com/collections/vicbooks';

App.Collections.Book = Backbone.Collection.extend({

  'model': App.Models.Book,
  url: my_server
});

}());
