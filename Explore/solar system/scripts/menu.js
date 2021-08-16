
var $body = $('body');
var $btnMobileMenu = $('.btn-mobile-menu');


$body.removeClass('show-mobile-menu');


$btnMobileMenu.click(function () {

	$body.toggleClass('show-mobile-menu');

});