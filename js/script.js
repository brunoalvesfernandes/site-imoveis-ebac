$(document).ready(function(){

    $('#slide-casas').slick({
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.menu-smart').click(function(){
        $('#sub-menu').slideToggle();
    })

    $('.slick-prev').html('<b><</b>')
    $('.slick-next').html('<b>></b>')

    $('.fechar').click(function(){
        $('#blur-pos').removeClass('blur');
        $('#form-casa').css('display','none');
    })

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('.comprar').click(function(){
        $('#blur-pos').addClass('blur');
        $('#form-casa').css('display','block');
        $('#casa-comprar').val($(this).parent().find('h3').text())
    })

    $('.base-form form').on('submit', function(e){
        e.preventDefault();
    })

})