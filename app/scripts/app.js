$(document).ready(function() {
    console.log('Started rendering adoptable pet list');
    $('.pet-list').append(adoptablePetListView.render().$el);
    console.log('Finished rendering adoptable pet list');
});
