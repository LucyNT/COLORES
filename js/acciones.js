// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	
	$('#uno').on('click',function(){
	//alert('1');
	
	$('#numeros').html ($('#numeros').html() + ' 1, ');
	});
	$('#dos').on('click',function(){
	//alert('2');
	
	$('#numeros').html ($('#numeros').html() + ' 2, ');
	});
	$('#tres').on('click',function(){
	//alert('3');
	
	$('#numeros').html ($('#numeros').html() + ' 3, ');
	});
	$('#cuatro').on('click',function(){
	//alert('4');
	
	$('#numeros').html ($('#numeros').html() + ' 4, ');
	});
	
	
//}); 
});

