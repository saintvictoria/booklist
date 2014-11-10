
(function () {
var my_server = 'http://tiy-atl-fe-server.herokuapp.com/collections/vicbook';

App.Collections.Book = Parse.Collection.extend({

  'model': App.Models.Book,
  url: my_server
});

}());
