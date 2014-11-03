var my_server = 'http://tiy-atl-fe-server.herokuapp.com/collections/vicbooks';

var Books = Backbone.Collection.extend({

  'model': Book,
  url: my_server,
});
