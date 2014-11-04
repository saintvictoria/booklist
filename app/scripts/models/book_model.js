(function () {

  App.Models.Book = Backbone.Model.extend({
  'defaults': {
    'authorFirst':'',
    'authorLast': '',
    'title': '',
  },

  'idAttribute': "_id",

  'initialize': function (){
    var authorFirst = this.get('authorFirst');
    var authorLast = this.get('authorLast');
    var title = this.get('title');
  }


});
}());
