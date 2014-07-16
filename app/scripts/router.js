var AppRouter = Backbone.Router.extend({
    routes: {


             'pets:name'         :     'listPets',

             'magic/:color'      :   'changeBg'




        }
    });

    // Initiate the router
    var app_router = new AppRouter;

    app_router.on('route:changeBg', function(color) {
        console.log('Changing color to ' + color);
        $('.hero-unit').css({'background':color});
    })

    app_router.on('route:defaultRoute', function(actions) {
        console.log('Hey there!');
        console.log(actions);
        $('.hero-unit').html(actions);
    })





    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
