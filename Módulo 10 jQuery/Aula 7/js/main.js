/*Verificando e buscando na lista os hot*/
/*$(document).ready(function(){

    console.log($('#container').find('.hot'));

});

/*Só elementos da classe filho hot*/
/*$(document).ready(function(){

    console.log($('#container').find('.hot').children());

});*/

/*Apenas os filhos que também contêm a classe “non-solid*/
$(document).ready(function(){

    console.log($('#container')

    .find('.hot')

    .children('.non-solid'));

});

/*Adciona cor a class*/
$(document).ready(function(){

    $('#container')

    .find('.hot')

    .children('.non-solid')

    .addClass('highlight');

});
