// Creating a model adoption pet

  var AdoptablePet = Backbone.Model.extend({

    initialize: function(){
        console.log("New pet available for adoption!");
      },

    defaults: {
        id              :  '_id',
        name            :  'needs_a_name',
        animal          :  'needs_a_type',
        status          :  'available',
        age             :  '0',
        gender          :  'F',
        neutered        :  'false',
        mainPhotoUrl    :  '#'
      },

    urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/adoptpets',

    idAttribute: '_id'

  });
