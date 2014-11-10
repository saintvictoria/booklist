(function () {

  App.Models.Book = Parse.Object.extend({

    'idAttribute': "objectId",

       'defaults': {
    'authorFirst':'',
     'authorLast': '',
          'title': '',
  },

  className: 'Library',

  'initialize': function (){
    var authorFirst = this.get('authorFirst');
    var authorLast = this.get('authorLast');
    var title = this.get('title');
  }


});
}());
