$(document).ready(main);

function main() {

    $("#slider").excoloSlider();

    var contador = 0;
    $(".gato").click(function() {
        $(".principal").slideToggle();

    });

    $(".prod").click(function() {
        $(".sub").slideToggle();
        contador++;

    });

    $(".gato").click(function() {

        if (contador % 2 == 1) {
            $(".principal").slideUp();
            $(".sub").slideUp();
            contador--;
        }

    });


    $('.scrollTo').click(function() {
        var getElem = (".mapa");
        var targetDistance = 20;
        console.log($("#map"));

        if ($(getElem).length) {
            var getOffset = $(getElem).offset().top;
            $('html,body').animate({
                scrollTop: getOffset - targetDistance
            }, 500);
        }
        return false;
    });


}