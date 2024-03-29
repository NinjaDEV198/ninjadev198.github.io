

$(document).ready(function() {

	// if ($("#body-inner").hasClass("smooth-scrollbar")) {

 //  // Smooth Scrollbar plugin: https://idiotwu.github.io/smooth-scrollbar/
	//   var Scrollbar = window.Scrollbar;
	//   Scrollbar.init(document.querySelector("#scroll-container"), {
	//   	damping: 0.05,
	//   	renderByPixel: true,
	//   	continuousScrolling: true,
	//   	alwaysShowTracks: true
	//   });

	// }

	var tl = new TimelineLite();

	var swiper = new Swiper('.swiper-container_home', {
		slidesPerView: 1,
		loop: true,
		allowTouchMove: true,
		slidesPerView: 'auto',
		grabCursor: true,
		preventClicks: true,
		keyboardControl: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		speed: 1000,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + ' cursor__link"></span>';
			},
		},
		
	});

	
	var swiper = new Swiper('.swiper-container_services', {
		slidesPerView: 1,
		loop: true,
		allowTouchMove: true,
		slidesPerView: 'auto',
		grabCursor: true,
		preventClicks: true,
		keyboardControl: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		speed: 1000,
		pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
          },
        }
		
	});





	var galleryThumbs = new Swiper('.gallery-thumbs', {
		// spaceBetween: 10,
		slidesPerView: 6,
		loop: false,
		freeMode: true,
		loopedSlides: 6, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.gallery-top', {
		// spaceBetween: 10,
		loopedSlides: 6, //looped slides should be the same
		loop: true,
		navigation: {
	      	prevEl: '.prev_slide',
	      	nextEl: '.next_slide',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	






	// $('html').on('DOMMouseScroll mousewheel', function (e) {
	// 	if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
	// 	    //scroll down
	// 	    $( ".menu_home_header" ).addClass( "hidden_header" );
	// 	} else {
	// 	    //scroll up
	// 	    $( ".menu_home_header" ).removeClass( "hidden_header" );
	// 	}
	// });

	
	// const showAnim = gsap.from('.menu_home_header', { 
	//   yPercent: -100,
	//   paused: true,
	//   duration: 0.2
	// }).progress(1);

	// ScrollTrigger.create({
	//   start: "top top",
	//   end: 99999,
	//   onUpdate: (self) => {
	//     self.direction === -1 ? showAnim.play() : showAnim.reverse()
	//   }
	// });

	const showAnim = gsap.from('.menu_home_header', { 
	  yPercent: -100,
	  paused: true,
	  duration: 0.2,
	}).progress(1);

	ScrollTrigger.create({
	  trigger: ".first",
	  start: "top top",
	  end: 99999,
	  onUpdate: (self) => {
	    self.direction === -1 ? showAnim.play() : (showAnim.reverse(), $('header').removeClass('show_menu'))
	  }
	});


	$('.button_menu').click(function(event) {
		$('header').toggleClass('show_menu');
	});

	$('.button_show_search_input').click(function(event) {
		var tl = new TimelineLite();
		tl.to('.content_search_input', 0 ,{width: "auto"});
		tl.to('.content_search_input', 0.7 ,{scaleX: 1});
		tl.to('.content_search_input > article', 0.5 ,{scaleX: 0});
		tl.to('.button_show_search_input', 0 ,{display: "none"});
		
	});

	$('.remove_label_input_search').click(function(event) {
		var tl = new TimelineLite();
		tl.to('.content_search_input > article', 0.7 ,{scaleX: 1});
		tl.to('.content_search_input', 0.5 ,{scaleX: 0});
		tl.to('.button_show_search_input', 0 ,{display: "block"});
		tl.to('.content_search_input', 0 ,{width: 0});
		
	});


	$('.cart_product > section').click(function(event) {
		var tl = new TimelineLite();
		tl.to('.layer_product', 0, {opacity: 1, visibility: "visible"});
		tl.to('.layer_product form', 0.7, {scaleY: 1});
		tl.to('.layer_product form > section', 0.7, {scaleY: 0});
	});

	function closeLayerProduct () {
		var tl = new TimelineLite();
		tl.to('.layer_product form > section', 0.7, {scaleY: 1});
		tl.to('.layer_product form', 0.7, {scaleY: 0});
		tl.to('.layer_product', 0, {opacity: 0, visibility: "hidden"});
	};

	$('.layer_background_product').click(function(event) {
		closeLayerProduct();
	});

	$('.close_layer_product').click(function(event) {
		closeLayerProduct();
	});
	

	


});


// *************************************************************
// Login

let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);
