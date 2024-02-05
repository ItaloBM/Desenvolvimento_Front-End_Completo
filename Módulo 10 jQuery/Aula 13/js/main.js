$(document).ready(function(){

    $('#input-name').on('keyup', function(){

    let name = $(this).val();

        $('#feedback-message').text('Please to meet you, ' + name);

    });

});
