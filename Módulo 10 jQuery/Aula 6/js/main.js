//Pegando somente os com required, Nome e email//
/*
$(document).ready(function(){

    $('#container input:required').addClass('highlight');

});

//Pegando somente o texto de input com atributo placeholder=email//
/*
$(document).ready(function(){

    $('#container input[placeholder=E-mail]').addClass('highlight');

});*/

//Pegando somente o texto de input com atributo placeholder=name//
$(document).ready(function(){

    $('#container input[placeholder*=Name]').addClass('highlight');

});
