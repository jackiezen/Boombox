// MADE WITH LOVE BY JACQUELYN ZEN

$(document).ready(function a() {
	$('.buttonTop1On').hide();
	$('.buttonTop1, .buttonTop1On').click(function a() {
		$('.buttonTop1, .buttonTop1On').toggle();
	});


	var audioElement1 = document.createElement('audio');
	audioElement1.setAttribute('src', 'audio/hotline_bling.mp3');

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
	audioElement2.setAttribute('src', 'audio/thinking_out_loud.mp3');

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
	audioElement3.setAttribute('src', 'audio/blank_space.mp3');

	$.get();

	$('.play3').click(function c() {
		audioElement3.play();
	});

	$('.pause3').click(function c() {
		audioElement3.pause();
	});
	
	audioElement3.addEventListener('ended', function c() {
    audioElement3.currentTime = 0;
    audioElement3.play();
}, false);
	
});

$(document).ready(function d() {
	var audioElement4 = document.createElement('audio');
	audioElement4.setAttribute('src', 'audio/tape.mp3');

	$('.buttonPower,.buttonControl,.buttonControl2,.buttonControl3,.buttonControl4,.buttonControl5,.buttonControl6,.spin1').hide();
	$('.buttonPowerOn,.buttonPower,.buttonControl,.buttonControla,.buttonControl2,.buttonControl2a,.buttonControl3,.buttonControl3a,.buttonControl4,.buttonControl4a,.buttonControl5,.buttonControl5a,.buttonControl6,.buttonControl6a,.spin1,.spin').click(function d() {
		audioElement4.play();
		$('.buttonPowerOn,.buttonPower,.buttonControl,.buttonControla,.buttonControl2,.buttonControl2a,.buttonControl3,.buttonControl3a,.buttonControl4,.buttonControl4a,.buttonControl5,.buttonControl5a,.buttonControl6,.buttonControl6a,.spin1,.spin').toggle();
	});
});

$(document).ready(function e() {
	$('#antenna1').hide();
	$('#antenna, #antenna1').click(function e() {
		$('#antenna, #antenna1').toggle();
	});
});

$(document).ready(function f() {
	var audioElement5 = document.createElement('audio');
	audioElement5.setAttribute('src', 'audio/click.mp3');

	$('#cassette2').hide();



	$('#cassette, #cassette2').click(function f() {
		audioElement5.play();
		$('#cassette, #cassette2').toggle();
	});
});

