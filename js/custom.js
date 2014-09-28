// JavaScript Document
$(document).ready(function(){
	$('.contentBlockB01').hide();
	
	$('.captionBlockA01#caption1').mouseenter(function(){
		$('.contentBlockB01#content1').effect('shake','slow')
		$('.captionBlockA01#caption1').css('color','red');
	})
	
	$('.captionBlockA01#caption1').mouseleave(function(){
		$('.contentBlockB01#content1').hide();
		$('.captionBlockA01#caption1').css('color','black');
	})
	
	$('.captionBlockA01#caption2').mouseenter(function(){
		$('.contentBlockB01#content2').effect('slide','slow')
		$('.captionBlockA01#caption2').css('color','red');
	})
	
	$('.captionBlockA01#caption2').mouseleave(function(){
		$('.contentBlockB01#content2').hide();
		$('.captionBlockA01#caption2').css('color','black');
	})
	
	$('.captionBlockA01#caption3').mouseenter(function(){
		$('.contentBlockB01#content3').effect('slide','slow')
		$('.captionBlockA01#caption3').css('color','red');
	})
	
	$('.captionBlockA01#caption3').mouseleave(function(){
		$('.contentBlockB01#content3').hide();
		$('.captionBlockA01#caption3').css('color','black');
	})
	
	$('.captionBlockA01#caption4').mouseenter(function(){
		$('.contentBlockB01#content4').effect('slide','slow')
		$('.captionBlockA01#caption4').css('color','red');
	})
	
	$('.captionBlockA01#caption4').mouseleave(function(){
		$('.contentBlockB01#content4').hide();
		$('.captionBlockA01#caption4').css('color','black');
	})
	
	$('.captionBlockA01#caption5').mouseenter(function(){
		$('.contentBlockB01#content5').effect('slide','slow');
		$('.captionBlockA01#caption5').css('color','red');
	})
	
	$('.captionBlockA01#caption5').mouseleave(function(){
		$('.contentBlockB01#content5').hide();
		$('.captionBlockA01#caption5').css('color','black');
	})
	
	$('.captionBlockA01#caption6').mouseenter(function(){
		$('.contentBlockB01#content6').effect('slide','slow')
		$('.captionBlockA01#caption6').css('color','red');
	})
	
	$('.captionBlockA01#caption6').mouseleave(function(){
		$('.contentBlockB01#content6').hide();
		$('.captionBlockA01#caption6').css('color','black');
	})
})