$(document).ready(function() {
    console.log('Started rendering adoptable pet list');
    $('.pet-list').append(adoptablePetListView.render().$el);
    console.log('Finished rendering adoptable pet list');
    
    console.log('Started rendering a single pet');
    $('.pet-single').append(adoptablePetView.render().$el);
    console.log('Finished rendering a single pet');
});
