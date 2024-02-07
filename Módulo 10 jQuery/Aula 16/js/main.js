$(document).ready(function(){

    $('#input-name').on('keyup', function(){

    let name = $(this).val();

        $('#feedback-message').text('Please to meet you, ' + name);

    });

});

$('a').on('click',function(event){

    event.preventDefault();

    $('#feedback-message').text('That\'s fine!');

});

$(document).ready(function(){

    $('#button-create-item').on('click',function() {



    });

});

$(document).ready(function(){

    $('#button-create-item').on('click',function() {

        let name = $('#input-create-item').val();

        let html = ' ';

        $('#input-create-item').val('');


    });

});


$('#container').append(html);
