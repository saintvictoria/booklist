(function () {

  App.Views.EditBook = Backbone.View.extend({

    events: {
      'click #updateBook' : 'update',
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
      this.$el.find('input[type=radio]').filter(function (_, radio){
        var x = (typeof bookdata.genre != undefined)&&radio.value===bookdata.genre;
          return radio.name === "genre" && x;

        }).each(function(_, radio){
          radio.setAttribute('checked','checked');

        });

      return this;
    },

    update: function (e) {
      e.preventDefault();

      this.options.book.set({
        title: $('#update_title').val(),
        authorFirst: $('#update_authorFirst').val(),
        authorLast:$('#update_authorLast').val(),
        comments: $('#update_comments').val(),
        genre: $('#updateBook')[0].genre.value
      });
      var self = this;
      this.options.book.save(null, {
        wait: true}).done(function(){
          self.render()
          App.router.navigate('', {trigger: true});


      }).fail(function(){
        console.log('comments');
      });

      //Go back to our home page
      //App.router.navigate('', {trigger: true});

    },
    deleteBook: function (e) {
      e.preventDefault();

      this.options.book.destroy({wait: true,
         success: function(){
           App.router.navigate('', {trigger: true});
         }});

    }

  });

}());
