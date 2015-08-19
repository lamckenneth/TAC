$(document).ready(function() {

	$(".menu").hover(function() {
		if ($(this).hasClass("menu-active")) {
			$(this).removeClass("menu-active");
		} else {
			$(this).addClass("menu-active");
		}
	});

	$("#about-us").click(function() {
		window.location.href = "about.html";
	});

	$("#officers").click(function() {
		window.location.href = "officers.html";
	});

	$("#practices").click(function() {
		window.location.href = "practices.html";
	});

	$("#tournaments").click(function() {
		window.location.href = "tournaments.html";
	});

	$("#announcements").click(function() {
		window.location.href = "announcements.html";
	});

});
