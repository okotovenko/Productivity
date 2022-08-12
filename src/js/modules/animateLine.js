let circle1 = document.getElementById('circle_1');
let circle2 = document.getElementById('circle_2');
let circle3 = document.getElementById('circle_3');
let circle4 = document.getElementById('circle_4');
let circle5 = document.getElementById('circle_5');
let circle6 = document.getElementById('circle_6');
let c12 = document.getElementById('circle_12');
let c13 = document.getElementById('circle_13');
let c14 = document.getElementById('circle_14');
let c15 = document.getElementById('circle_15');
let c16 = document.getElementById('circle_16');
let firstLineTop = document.getElementById('line_1_top');
let firstLineDown = document.getElementById('line_1_down');
let secondLineTop = document.getElementById('line_2_top');
let secondineDown = document.getElementById('line_2_down');
let thirdLineTop = document.getElementById('line_3_top');
let thirdLineDown = document.getElementById('line_3_down');
let fourthLineTop = document.getElementById('line_4_top');
let fourthLineDown = document.getElementById('line_4_down');
let fifthLineTop = document.getElementById('line_5_top');
let fifthLineDown = document.getElementById('line_5_down');


circle1.addEventListener('endEvent', function () {
	c12.classList.add('active');
	firstLineTop.classList.add('active');
	firstLineDown.classList.add('active');
});

circle2.addEventListener('endEvent', function () {
	c13.classList.add('active');
	secondLineTop.classList.add('active');
	secondineDown.classList.add('active');
});

circle3.addEventListener('endEvent', function () {
	c14.classList.add('active');
	thirdLineTop.classList.add('active');
	thirdLineDown.classList.add('active');
});

circle4.addEventListener('endEvent', function () {
	c15.classList.add('active');
	fourthLineTop.classList.add('active');
	fourthLineDown.classList.add('active');
});

circle5.addEventListener('endEvent', function () {
	c16.classList.add('active');
	fifthLineTop.classList.add('active');
	fifthLineDown.classList.add('active');
});