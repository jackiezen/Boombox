// MADE WITH LOVE BY JACQUELYN ZEN

$(document).ready(function a() {
	$('.buttonTop1On').hide();
	$('.buttonTop1, .buttonTop1On').click(function a() {
		$('.buttonTop1, .buttonTop1On').toggle();
	});


	var audioElement1 = document.createElement('audio');
	audioElement1.setAttribute('src', 'audio/hotline_bling.mp3', 'loop');

	$.get();

	$('.play1').click(function a() {
		audioElement1.play();
	});

	$('.pause1').click(function a() {
		audioElement1.pause();
	});
});

$(document).ready(function b() {
	$('.buttonTop2On').hide();
	$('.buttonTop2, .buttonTop2On').click(function b() {
		$('.buttonTop2, .buttonTop2On').toggle();
	});


	var audioElement2 = document.createElement('audio');
	audioElement2.setAttribute('src', 'audio/thinking_out_loud.mp3', 'loop');

	$.get();

	$('.play2').click(function b() {
		audioElement2.play();
	});

	$('.pause2').click(function b() {
		audioElement2.pause();
	});
});

$(document).ready(function c() {
	$('.buttonTop3On').hide();
	$('.buttonTop3, .buttonTop3On').click(function c() {
		$('.buttonTop3, .buttonTop3On').toggle();
	});


	var audioElement3 = document.createElement('audio');
	audioElement3.setAttribute('src', 'audio/blank_space.mp3', 'loop');

	$.get();

	$('.play3').click(function c() {
		audioElement3.play();
	});

	$('.pause3').click(function c() {
		audioElement3.pause();
	});
});

$(document).ready(function d() {
	$('.buttonPowerOn').hide();
	$('.buttonPower,.buttonPowerOn').click(function d() {
		$('.buttonPower,.buttonPowerOn').toggle();
	});


});