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

	$(".officer").hover(function() {
		if ($(this).hasClass("officer-active")) {
			$(this).removeClass("officer-active");
		} else {
			$(this).addClass("officer-active");
		}
	});

	$(".menu-item").click(function() {
		$("html, body").animate({scrollTop:0}, 400);
	});

	$("#jack").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#jack-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#nathan").click(function() {
		$("#jack-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#nathan-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#jane").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jack-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#jane-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#kenneth").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#jack-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#kenneth-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#lawrence").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#jack-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#lawrence-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#chris").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#jack-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#chris-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#jeanine").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jack-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#jeanine-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#tony").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#jack-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#tony-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#jordan").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jack-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#jordan-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#vicky").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#jack-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#vicky-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#jacks").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#jack-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#jacks-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#erin").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#jack-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#ray-bio").css("display", "none");
		$("#erin-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

	$("#ray").click(function() {
		$("#nathan-bio").css("display", "none");
		$("#jane-bio").css("display", "none");
		$("#kenneth-bio").css("display", "none");
		$("#lawrence-bio").css("display", "none");
		$("#jack-bio").css("display", "none");
		$("#chris-bio").css("display", "none");
		$("#jeanine-bio").css("display", "none");
		$("#tony-bio").css("display", "none");
		$("#jordan-bio").css("display", "none");
		$("#vicky-bio").css("display", "none");
		$("#jacks-bio").css("display", "none");
		$("#erin-bio").css("display", "none");
		$("#ray-bio").css("display", "block");
		$("html, body").animate({scrollTop: $(document).height()}, 400);
	});

});
