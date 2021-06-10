$(document).ready(function(){
    $('#menuInicio').click(function(){
        $('#inicio').animatescroll()
    });

    $('#menuServicios').click(function(){
        $('#servicios').animatescroll()
    });

    $('#menuPortfolio').click(function(){
        $('#portfolio').animatescroll()
    });

    $('#menuContacto').click(function(){
        $('#contacto').animatescroll()
    });
    //Para que el menu desplegable se oculte automáticamente luego de hacer click (en móviles)
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});    