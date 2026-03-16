$(document).ready(function(){
    // Inicialização do Materialize
    $('.tabs').tabs();

    $('.dropdown-trigger').dropdown({
        constrainWidth: false, 
        coverTrigger: false,   // Evita que o menu fique em cima do botão
        alignment: 'left'      // Alinha o menu
    });
});

