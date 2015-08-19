$(document).ready(function() {

	$(".link").hover(function() {
		if ($(this).hasClass("link-active")) {
			$(this).removeClass("link-active");
		} else {
			$(this).addClass("link-active");
		}
	});

	$(".menu-item").hover(function() {
		if ($(this).hasClass("menu-active")) {
			$(this).removeClass("menu-active");
		} else {
			$(this).addClass("menu-active");
		}
	});

	$(".menu-item").click(function() {
		$("html, body").animate({scrollTop:0}, 400);
	});

});