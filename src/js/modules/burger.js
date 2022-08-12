let logoClick = document.querySelector('.left-header__logo');
let burger = document.querySelector('.header__burger');
let colum = document.querySelector('.header__colum');
let rightHeader = document.querySelector('.right-header');
let headerColum = document.querySelector('.header__colum');
let inscrease = document.querySelector('.inscrease');
let navClass = document.querySelector('.nav');
let spanAnimate = headerColum.querySelectorAll('*');
let lock = document.querySelector('body');

let nav = document.querySelector('#nav');

logoClick.addEventListener('click', function () {
	burger.classList.toggle('active');
	colum.classList.toggle('active');
	nav.classList.toggle('active');
	rightHeader.classList.toggle('active');
	logoClick.classList.toggle('active');
	navClass.classList.toggle('active');
	inscrease.classList.toggle('active');
	spanAnimate.forEach(element => {
		element.classList.toggle('active');
	});
	lock.classList.toggle('lock');
})

headerColum.addEventListener('click', function () {
	burger.classList.remove('active');
	colum.classList.remove('active');
	nav.classList.remove('active');
	rightHeader.classList.remove('active');
	navClass.classList.remove('active');
	logoClick.classList.remove('active');
	inscrease.classList.remove('active');
	spanAnimate.forEach(element => {
		element.classList.remove('active');
	});
	lock.classList.remove('lock');
})



