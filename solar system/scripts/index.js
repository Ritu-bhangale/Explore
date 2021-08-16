

window.onload = function () {

    enquire.register('screen and (max-width: 1024px)', {

        match: function () {

            skrollr.init().destroy();

        },
        unmatch: function () {
            skrollr.init();
        }

    });

}


$('#link_mercury').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: 850
    }, 2000);

})

$('#link_venus').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: 1350
    }, 2000);

})

$('#link_earth').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: 1850
    }, 2000);

})

$('#link_mars').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: 2350
    }, 2000);

})

$('#link_jupiter').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: 2850
    }, 2000);

})

$('#link_saturn').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: 3350
    }, 2000);

})

$('#link_uranus').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: 3850
    }, 2000);

})

$('#link_neptune').click(function (e) {

    e.preventDefault();

    $('html, body').animate({
        scrollTop: 4350
    }, 2000);

})
