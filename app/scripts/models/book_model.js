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
