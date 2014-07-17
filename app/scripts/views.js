var AdoptablePetListView = Backbone.View.extend({

    initialize: function(){
        // this.listenTo(this.collection, 'add', this.render);
        // this.listenTo(this.collection, 'change', this.render);
        // this.listenTo(this.collection, 'remove', this.render);
        // this.collection.fetch();
      },

    render: function(){
        var source = $('#pet-list-template').html();
        console.log('Source:\n' + source);
        var template = Handlebars.compile(source);
        console.log('ourPets:\n' + ourPets);
        var rendered = template({ourPets: this.collection.toJSON()})
        console.log('Rendered:\n' + rendered);
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



var AdoptablePetView = Backbone.View.extend({

    initialize: function(){
        // this.listenTo(this.collection, 'add', this.render);
        // this.listenTo(this.collection, 'change', this.render);
        // this.listenTo(this.collection, 'remove', this.render);
        // this.collection.fetch();
      },

    render: function(){
        var source = $('#pet-single-template').html();
        console.log('Source:\n' + source);
        var rendered = _.template(source,{name : 'Moksha'}); 
        console.log('Rendered:\n' + rendered);
        this.$el.append(rendered); 
        return this;

        },



    events: {

      'click .view'     : 'viewPet'

    },

    viewPet : function(e) {

      }

});

var adoptablePetView = new AdoptablePetView ({

});
