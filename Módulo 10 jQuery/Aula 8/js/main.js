/*adicionar nossa classe “highlight” apenas ao primeiro elemento filho*/
/*$(document).ready(function(){

    $('#container')

    .find('.hot')

    .children()

    .first()

    .addClass('highlight');

});

}); */

/* selecionar o último elemento filho usando .last */
/*$(document).ready(function(){

    $('#container')

    .find('.hot')

    .children()

    .last()

    .addClass('highlight');

}); */

/* Próximo e Anterior */
$(document).ready(function(){

    $('#container')

    .find('.hot')

    .children()

    .last()

    .prev()

    .addClass('highlight');

});
