var AdoptablePetView = Backbone.View.extend({

    initialize: function(){
        this.listenTo(this.collection, 'add', this.render);
        this.listenTo(this.collection, 'change', this.render);
        this.listenTo(this.collection, 'remove', this.render);
        this.collection.fetch();
      },

    render: function(){

        return this;
    },

    events: {

      'click .view'     : 'viewPet'

    },

    viewPet : function(e) {

      }

});

var adoptablePetView = new AdoptablePetView ({
  collection: ourPets
});
