$(function () {
	$('.slider').slick({
		dots: true,
		speed: 1000,
		prevArrow: "<span type='button' class='arrow arrow_prev'>Назад</span>",
		nextArrow: "<span type='button' class='arrow arrow_next'>Вперед</span>",
	});
});

$('.customer__slider').slick({
	arrows: false,
	dots: true,
	variableWidth: true,
});