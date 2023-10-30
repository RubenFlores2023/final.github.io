$(document).ready(function() {
    // LOADER INICIO DE PANTALLA
    var loads = $(window);

    loads.on('load', function () {
        $('.loader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    /*BOTON SUBIR*/
    $('.subir').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 500);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.subir').slideDown(500);
        } else {
            $('.subir').slideUp(500);
        }
    });


    /*MENU ESCROLL PEGADO*/
    var menu = document.getElementById('header');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            menu.classList.add('menu-scroll');
        } else {
            menu.classList.remove('menu-scroll');


        }
    });

    //SLIDER CAROUSEL
    $('.carusel .owl-carousel').owlCarousel({
        animationOut: 'fadeOut',
        animationIn: 'fadeIn',
        loop: true,
        nav: true,
        dots: true,
        items: 1,
        autoplay: true,
        smartSpeed: 1200,
        animateOut: 'fadeOut',
        navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
    })



    //logos
    $('.logos .owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        dots: false,
        autoplay: true,
        smartSpeed: 1200,
        animateOut: 'fadeOut',
    })


    $(".enlaces").click(function() {

        var valor = $(this).attr("data-nombre");
        /*console.log('valor')*/

        if (valor == "todos") {
            $(".filtro").show('1000');
        } else {
            $(".filtro").not("." + valor).hide('1000');
            $(".filtro").filter("." + valor).show('1000');
        }


    });

    $("ul .enlaces").click(function() {
        $(this).addClass('activo').siblings().removeClass('activo');
    });



    // if (browserWindow.width() > 767) {
    //     new Window().init();
    // }


    //CONTADOR DE LA INFORMACION

    // if ($('.cf-content').length) {
    //     $('.cf-content').appear(function() {
    //         var $t = $(this),
    //             n = $t.find(".counter").attr("data-stop"),
    //             r = parseInt($t.find(".counter").attr("data-speed"), 10);

    //         if (!$t.hasClass("counted")) {
    //             $t.addClass(".counted");
    //             $({
    //                 countNum: $t.find(".counter").text()
    //             }).animate({
    //                 countNum: n
    //             }, {
    //                 duration: r,
    //                 easing: "linear",
    //                 step: function() {
    //                     $t.find(".counter").text(Math.floor(this.countNum));
    //                 },
    //                 complete: function() {
    //                     $t.find(".counter").text(this.countNum);
    //                 }
    //             });
    //         }
    //     }, { accY: 0 });
    



    //ANIMACION DE ELEMENTOS
    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    //animacion con wow y animate
    new WOW().init();
});