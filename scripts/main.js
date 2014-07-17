// Creating a model adoption pet

  var AdoptablePet = Backbone.Model.extend({

    initialize: function(){
        console.log("New pet available for adoption!");
      },

    defaults: {
        name            :  'needs_a_name',
        animal          :  'needs_a_type',
        status          :  'available',
        age             :  '0',
        gender          :  'F',
        neutered        :  'false',
        mainPhotoUrl    :  '#'
      },

    // urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/adoptpets',



  });

// Creating a model list of pets available for adoption

var AdoptablePets = Backbone.Collection.extend({
  model: AdoptablePet,
  comparator: '_id',
  url: 'http://tiny-pizza-server.herokuapp.com/collections/adoptpets'
});

var ourPets = new AdoptablePets();

ourPets.add([
  {
    name           :  'Moksha',
    animal         :  'dog',
    status         :  'available',
    age            :  '4',
    gender         :  'F',
    neutered       :  'true',
    mainPhotoUrl :  'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/1932629_10152418870378352_6293108892780372302_o.jpg'
  },

  {
    name           :  'Emmitt',
    animal         :  'dog',
    status         :  'available',
    age            :  '1',
    gender         :  'M',
    neutered       :  'true',
    mainPhotoUrl :  'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xap1/t1.0-9/60479_432375844549_1903986_n.jpg'
  },

  {
    name           :  'Zellouisa',
    animal         :  'cat',
    status         :  'available',
    age            :  '12',
    gender         :  'F',
    neutered       :  'true',
    mainPhotoUrl :  'http://i.imgur.com/ccJDqbR.jpg'
  }
]);

var AdoptablePetListView = Backbone.View.extend({

    initialize: function(){
        this.listenTo(this.collection, 'add', this.render);
        this.listenTo(this.collection, 'change', this.render);
        this.listenTo(this.collection, 'remove', this.render);
        this.collection.fetch();
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
        var rendered = _.template(source,this.model.toJSON()); 
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
    model : ourPets.models[0]
});

var AppRouter = Backbone.Router.extend({
    routes: {


             'pets/:name'         :     'getPet',

             'home'               :     'showList',

             'color/:color'      :   'changeBg',

             '*actions'      :     'defaultRoute'


        }
    });

    // Initiate the router
    var app_router = new AppRouter;

    app_router.on('route:changeBg', function(color) {
        console.log('Changing color to ' + color);
        $('.hero-unit h1').css({'background':color});
    })

    app_router.on('route:defaultRoute', function(actions) {
        console.log('Hey there!');
        console.log(actions);
        $('.hero-unit h1').html(actions);
    })

    app_router.on('route:getPet', function(name) {
        console.log('Getting pet ' + name);
        $('.hero-unit h1').html('Meet ' + name + '!');
        $('.pet-list').css({'opacity': 0.1});
        $('.pet-single').html(adoptablePetView.render().$el);
        $('.pet-single').show();
    })

    app_router.on('route:showList', function() {
        console.log('Getting pet ' + name);
        $('.hero-unit h1').html('All of our available pets');
        $('.pet-list').css({'opacity': 1});
        $('.pet-single').hide();
    })





    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();

$(document).ready(function() {
    console.log('Started rendering adoptable pet list');
    $('.pet-list').append(adoptablePetListView.render().$el);
    console.log('Finished rendering adoptable pet list');

    // console.log('Started rendering a single pet');
    // $('.pet-single').append(adoptablePetView.render().$el);
    // console.log('Finished rendering a single pet');
});
