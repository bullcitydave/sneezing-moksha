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
