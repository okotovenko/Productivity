let logoClick = document.querySelector('.left-header__logo');
let burger = document.querySelector('.header__burger');
let colum = document.querySelector('.header__colum');
let rightHeader = document.querySelector('.right-header');
let headerColum = document.querySelector('.header__colum');
let navClass = document.querySelector('.nav');
let spanAnimate = headerColum.querySelectorAll('*');
// let spanAnimate = headerColum.children;
// let spanAnimate = document.getElementsByTagName('span');
console.log(spanAnimate);

// spanAnimate.forEach(element => {
// 	console.log(element);
// });

// let nav = document.querySelector('.left-header__nav');
let nav = document.querySelector('#nav');

logoClick.addEventListener('click', function () {
	burger.classList.toggle('active');
	colum.classList.toggle('active');
	nav.classList.toggle('active');
	rightHeader.classList.toggle('active');
	logoClick.classList.toggle('active');
	navClass.classList.toggle('active');
	// spanAnimate.classList.toggle('active');
	spanAnimate.forEach(element => {
		element.classList.toggle('active');
	});
})

headerColum.addEventListener('click', function () {
	burger.classList.remove('active');
	colum.classList.remove('active');
	nav.classList.remove('active');
	rightHeader.classList.remove('active');
	navClass.classList.remove('active');
	logoClick.classList.remove('active');
	spanAnimate.forEach(element => {
		element.classList.remove('active');
	});
})



