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
