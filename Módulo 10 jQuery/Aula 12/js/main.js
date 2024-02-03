
$(document).ready(function(){

    $('#select-menu').on('change', function() {

    let name = $('#select-menu option:selected').text();

        let distance = $('#select-menu option:selected').val();

        let price = $('#select-menu option:selected').data('price');



        console.log($('#feedback-message').text('You are signing up for ' + name + ', which costs ' + price + ', to a distance of ' + distance + 'km'););

    });

});

if (distance) {

    $('#feedback-message').text('You are signing up for ' + name + ', which costs ' + price + ', to a distance of ' + distance + 'km');

} else {

    $('#feedback-message').empty();

}
