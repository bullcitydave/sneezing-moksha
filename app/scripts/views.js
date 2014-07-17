var AdoptablePetListView = Backbone.View.extend({

    initialize: function(){
        // this.listenTo(this.collection, 'add', this.render);
        // this.listenTo(this.collection, 'change', this.render);
        // this.listenTo(this.collection, 'remove', this.render);
        // this.collection.fetch();
      },

    render: function(){
        var source = $('#pet-list-template').html();
        // var rendered = _.template(source, {ourPets: this.collection.toJSON()})\
        var rendered = _.template(source,{name : 'Moksha'});
        this.$el.append(rendered);
        return this;
      },


    events: {

      'click .view'     : 'viewPet'

    },

    viewPet : function(e) {

      }

});

var adoptablePetListView = new AdoptablePetListView ({
  collection: ourPets
});
