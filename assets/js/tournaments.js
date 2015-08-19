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

	$("#singles").click(function() {
		$("#wtt-detail").css("display", "none");
		$("#doubles-detail").css("display", "none");
		$("#singles-detail").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#doubles").click(function() {
		$("#wtt-detail").css("display", "none");
		$("#singles-detail").css("display", "none");
		$("#doubles-detail").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#wtt").click(function() {
		$("#singles-detail").css("display", "none");
		$("#doubles-detail").css("display", "none");
		$("#wtt-detail").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

});