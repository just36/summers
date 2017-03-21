var link = document.querySelector(".btn-play");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var foto1 = document.querySelector(".modal-content-foto1");
var foto2 = document.querySelector(".modal-content-foto2");
var foto3 = document.querySelector(".modal-content-foto3");
var foto4 = document.querySelector(".modal-content-foto4");
var linkToFoto1 = document.querySelector(".block1");
var linkToFoto2 = document.querySelector(".block2");
var linkToFoto3 = document.querySelector(".block3");
var linkToFoto4 = document.querySelector(".block4");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
});
	
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});	  


// блок с фото
linkToFoto1.addEventListener("click", function(event) {
	event.preventDefault();
	foto1.classList.add("modal-content-show");
});

linkToFoto2.addEventListener("click", function(event) {
	event.preventDefault();
	foto2.classList.add("modal-content-show");
});

linkToFoto3.addEventListener("click", function(event) {
	event.preventDefault();
	foto3.classList.add("modal-content-show");
});

linkToFoto4.addEventListener("click", function(event) {
	event.preventDefault();
	foto4.classList.add("modal-content-show");
});


foto1.addEventListener("click", function(event) {
	foto1.classList.remove("modal-content-show");
});
foto2.addEventListener("click", function(event) {
	foto2.classList.remove("modal-content-show");
});
foto3.addEventListener("click", function(event) {
	foto3.classList.remove("modal-content-show");
});
foto4.addEventListener("click", function(event) {
	foto4.classList.remove("modal-content-show");
});
 
//Карусель

$(document).on('click', ".wps-next",function(){ 
	var carusel = $(this).parents('.what-people-say');
	right_carusel(carusel);
	return false;
});

$(document).on('click',".wps-prev",function(){ 
	var carusel = $(this).parents('.what-people-say');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.review').outerWidth();
   $(carusel).find(".carousel-items .review").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .review").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.review').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .review").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .review").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {
	auto_right('.what-people-say:first');
})

function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}

$(document).on('mouseenter', '.what-people-say', function(){$(this).addClass('hover')})
$(document).on('mouseleave', '.what-people-say', function(){$(this).removeClass('hover')})

