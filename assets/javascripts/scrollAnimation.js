
    $(window).on('load', function(event) {
          $('body').removeClass('preloading');
          // $('.load').delay(1000).fadeOut('fast');
          $('.loader').delay(1000).fadeOut('fast');
    });



$(document).ready(function() {
gsap.registerPlugin(ScrollTrigger);
    let speed = 100;
    let speed2 = 50;


function random(min, max){
	return (Math.random() * (max - min)) + min;
}

    /*  SCENE 1 */
    let scene1 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene1,
        trigger: ".header_home",
        start: "top top",
        end: "30% top",
        scrub: 3,
    });



    // header_home


    // // hills animation 
    // scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0)
    // scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0)
    // scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03)
    // scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03)
    // scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03)
    // scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0)
    // scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0)
    // scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0)
    // scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0)

    scene1.to(".slide_header_home", {y: -2*speed, ease: "power1.in"}, 0)
    scene1.to(".post_header_home > article", {y: -2*speed, ease: "power1.in"}, 0)
    scene1.to(".once_post:nth-child(1)", {y: -1.5*speed, ease: "power1.in"}, 0)
    scene1.to(".once_post:nth-child(2)", {y: -2*speed, ease: "power1.in"}, 0)
    scene1.to(".once_post:nth-child(3)", {y: -1.5*speed, ease: "power1.in"}, 0)
    scene1.to(".once_post:nth-child(4)", {y: -2.5*speed, ease: "power1.in"}, 0)


    /*  SCENE 2 */
    // `+=${document.querySelector(".network_link").offsetHeight}` /2
    let scene2 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene2,
        trigger: ".network_link",
        start: "top 65%",
        end: "top 65%",
        scrub: 3,
    });

    scene2.fromTo(".network_link_left", { y: 1.5*speed, opacity: 0 }, { y: 0, opacity: 1}, 0)
    scene2.fromTo(".network_link_right", { y: 2*speed, opacity: 0 }, { y: 0, opacity: 1}, 0)


    /*  SCENE 3 */
    let scene3 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene3,
        trigger: ".product_home",
        start: "top 55%",
        end: "top 55%",
        scrub: 3,
    });

    scene3.fromTo("#title_1", { y: 0.8*speed, opacity: 0 }, { y: 0, opacity: 1}, 0)
    scene3.fromTo(".button_filter li:nth-child(1)", { y: 0.8*speed, opacity: 0 }, { y: 0, opacity: 1}, 0)
    scene3.fromTo(".button_filter li:nth-child(2)", { y: 1*speed, opacity: 0 }, { y: 0, opacity: 1}, 0)
    scene3.fromTo(".button_filter li:nth-child(3)", { y: 2*speed, opacity: 0 }, { y: 0, opacity: 1}, 0)




    /*  SCENE 4 */
    const arrayAnimations = $(".array_Animations").toArray();
    const titleArrays = $(".title_arrays").toArray();
    const arrayViewMore = $(".view_more").toArray();
    const specialArrays = $(".specialArrays").toArray();
    const newsArrays = $(".news_arrays").toArray();
    const footerLinkArrays = $(".footer_Link_Arrays").toArray();
    const productItemArrays = $(".product_item_arrays").toArray();

    for (let i = 0; i < arrayAnimations.length; i++) {
    	let scene4 = gsap.timeline();
	    ScrollTrigger.create({
	        animation: scene4,
	        trigger: $(arrayAnimations[i]),
	        start: "top 75%",
	        end: "top 75%",
	        scrub: 3,
	    });

	    scene4.fromTo($(arrayAnimations[i]), { y: (random(1, 2.5))*speed, opacity: 0 }, { y: 0, opacity: 1}, 0)
    	
    }

    for (let i = 0; i < titleArrays.length; i++) {
    	let scene51 = gsap.timeline();
	    ScrollTrigger.create({
	        animation: scene51,
	        trigger: $(titleArrays[i]),
	        start: "top 90%",
	        end: "top 90%",
	        scrub: 3,
	    });

	    scene51.fromTo($(titleArrays[i]), { y: 1*speed, opacity: 0 }, { y: 0, opacity: 1}, 0)
    }
    for (let i = 0; i < arrayViewMore.length; i++) {
    	let scene5 = gsap.timeline();
	    ScrollTrigger.create({
	        animation: scene5,
	        trigger: $(arrayViewMore[i]),
	        start: "top 90%",
	        end: "top 90%",
	        scrub: 3,
	    });

	    scene5.fromTo($(arrayViewMore[i]), { y: 1*speed, opacity: 0 }, { y: 0, opacity: 1}, 0)
    }

    for (let i = 0; i < specialArrays.length; i++) {
    	let scene6 = gsap.timeline();
	    ScrollTrigger.create({
	        animation: scene6,
	        trigger: ".content_special_features",
	        start: "top 70%",
	        end: "top 70%",
	        scrub: 3,
	    });

	    scene6.fromTo($(specialArrays[i]), { y: (random(1, 3))*speed, x: (random(-2, 2))*speed, opacity: 0 }, { y: 0, x: 0, opacity: 1}, 0)
    }

    for (let i = 0; i < newsArrays.length; i++) {
    	let scene7 = gsap.timeline();
	    ScrollTrigger.create({
	        animation: scene7,
	        trigger: ".news_feeds",
	        start: "top 60%",
	        end: "top 60%",
	        scrub: 3,
	    });

	    scene7.fromTo($(newsArrays[i]), { y: (random(1, 3))*speed, x: (random(-2, 2))*speed, opacity: 0 }, { y: 0, x: 0, opacity: 1}, 0)
    }
    
    let scene8 = gsap.timeline();
	    ScrollTrigger.create({
	        animation: scene8,
	        trigger: ".subscribe_email",
	        start: "top 80%",
	        end: "top 80%",
	        scrub: 3,
	    });

	    scene8.fromTo(".subscribe_animation:nth-child(1)", { y: 2*speed, x: -2*speed, opacity: 0 }, { y: 0, x: 0, opacity: 1}, 0)
	    scene8.fromTo(".subscribe_animation:nth-child(2)", { y: 1.5*speed, x: 2*speed, opacity: 0 }, { y: 0, x: 0, opacity: 1}, 0)
	    scene8.fromTo(".subscribe_animation:nth-child(3)", { y: 2.5*speed, x: -2.5*speed, opacity: 0 }, { y: 0, x: 0, opacity: 1}, 0)



    let scene9 = gsap.timeline();
	    ScrollTrigger.create({
	        animation: scene9,
	        trigger: ".footer",
	        start: "top 60%",
	        end: "top 60%",
	        scrub: 3,
	    });

	    scene9.fromTo(".image_logo_footer", {  x: -4*speed, opacity: 0 }, { x: 0, opacity: 1}, 0)
	    scene9.fromTo(".description_footer", { x: -3*speed, opacity: 0 }, { x: 0, opacity: 1}, 0)
	    scene9.fromTo(".contact_footer li:nth-child(1)", { x: -2*speed, opacity: 0 }, { x: 0, opacity: 1}, 0)
	    scene9.fromTo(".contact_footer li:nth-child(2)", { x: 2*speed, opacity: 0 }, { x: 0, opacity: 1}, 0)
	    scene9.fromTo(".contact_footer li:nth-child(3)", { x: -1.5*speed, opacity: 0 }, { x: 0, opacity: 1}, 0)
	    scene9.fromTo(".copyright", { y: -1.5*speed, scale: 2, opacity: 0 }, { y: 0, scale: 1, opacity: 1}, 0)



    for (let i = 0; i < footerLinkArrays.length; i++) {
    	let scene7 = gsap.timeline();
	    ScrollTrigger.create({
	        animation: scene7,
	        trigger: ".footer",
	        start: "top 60%",
	        end: "top 60%",
	        scrub: 3,
	    });

	    scene7.fromTo($(footerLinkArrays[i]), {x: (random(-2, 2))*speed, opacity: 0 }, { x: 0, opacity: 1}, 0)
    }



/// News page

    const cardItemArrays = $(".card__item--1").toArray();

    //load home
    tl1 = new TimelineMax({paused: true});
    tl1.from(".top__card__items--left", {x: -4*speed, opacity: 0, ease: "power1.out"}, 1)
    tl1.from(".card__right", {x: 4*speed, opacity: 0, ease: "power1.out"}, 1.5)
    for (let i = 0; i < cardItemArrays.length; i++) {
        tl1.from(cardItemArrays[i], {y: 0.5*speed, opacity: 0, ease: "power1.out"})
    }
    tl1.play();




    let scene10 = gsap.timeline();
        ScrollTrigger.create({
            animation: scene10,
            trigger: ".news__page__top",
            start: "top top",
            end: "20% top",
            scrub: 3,
        });

    scene10.to(".top__card__items--left", {y: -2*speed}, 0)
    scene10.to(".card__right", {y: -1.5*speed}, 0)


// Product item page

const randomItems = $(".random_items_array");

$(randomItems).each(function(i){
    TweenMax.from($(this), 2, {
        opacity: 0,
        x: random(-500, 50),
        y: random(-500, 50),
        z: random(-500, 50),
        scale: .1,
        yoyo: true,
    }, 1);
});

    for (let i = 0; i < productItemArrays.length; i++) {
        let scenex = gsap.timeline();
        ScrollTrigger.create({
            animation: scenex,
            trigger: ".is_content_product",
            start: "top top",
            end: "10% top",
            scrub: 3,
        });

        scenex.fromTo($(productItemArrays[i]),{y: 0}, {y: -(random(1,  2.5))*speed }, 0)


    }
     const arrayInformation = $('.array_information').toArray();


    for (let i = 0; i < arrayInformation.length; i++) {
        let sceneInf = gsap.timeline();
        ScrollTrigger.create({
            animation: sceneInf,
            trigger: $(arrayInformation[i]),
            start: "10% 100%",
            end: "10% 100%",
            scrub: 3,
        });

        sceneInf.fromTo($(arrayInformation[i]), {y: (random(1, 1.7))*speed, opacity: 0 }, { y: 0, opacity: 1}, 0)
    }


    const reviewArray = $('.review_array').toArray();

    for (let i = 0; i < reviewArray.length; i++) {
        let sceneReview = gsap.timeline();
        ScrollTrigger.create({
            animation: sceneReview,
            trigger: ".reviews",
            start: "top 70%",
            end: "50% 70%",
            scrub: 3,
        });

        sceneReview.fromTo($(reviewArray[i]), {y: (random(1, 2.5))*speed, x: (random(-1.5, 1.5))*speed, opacity: 0 }, { y: 0, x: 0, opacity: 1}, 0)
    }


   

    tl4 = new TimelineMax({paused: true});
    tl4.from(".welcome", 1,{scaleX: 0, ease: "power1.in"}, 1)
    tl4.to(".after_background", 0.5,{scaleX: 0, ease: "power1.in"}, 2)
    tl4.to(".after_background", 0.5,{scaleX: 0, ease: "power1.in"}, 2)
    tl4.to(".after_background", 0.5,{scaleX: 0, ease: "power1.in"}, 2)
    tl4.to(".after_background", 0.5,{scaleX: 0, ease: "power1.in"}, 2)
    tl4.to(".after_background", 0.5,{scaleX: 0, ease: "power1.in"}, 2)
    
    const welcomeArray = $(".is_welcome_array").toArray();
    let indexW = 2.5;
    $(welcomeArray).each(function(i){

        TweenMax.from($(this), {y: 0.7*speed, opacity: 0, ease: "power1.in"
        }, indexW);
        indexW += 0.3;
    });

    
    tl4.play();


    for (let i = 0; i < welcomeArray.length; i++) {
        let sceneReview2 = gsap.timeline();
        ScrollTrigger.create({
            animation: sceneReview2,
            trigger: ".welcome",
            start: "top top",
            end: "50% top",
            scrub: 3,
        });

        sceneReview2.fromTo($(welcomeArray[i]),{y: 0}, {y: -(random(1, 2.5))*speed }, 0)
    }



    let scene15 = gsap.timeline();
    ScrollTrigger.create({
            animation: scene15,
            trigger: ".section_home_2",
            start: "top 70%",
            end: "top 70%",
            scrub: 3,
        });
    scene15.from(".section_home_2", 0.4,{scaleX: 0, ease: "power1.in"}, 0)
    scene15.from(".section_home_2 > section", {y: 0.8 * speed2, opacity: 0, ease: "power1.out"}, 0.5)
    scene15.from(".section_home_2 > article",{y: 0.8 * speed2, opacity: 0, ease: "power1.out"}, 0.5)



    let scene16 = gsap.timeline();
    ScrollTrigger.create({
            animation: scene16,
            trigger: ".section_home_4",
            start: "top 70%",
            end: "top 70%",
            scrub: 3,
        });
    scene16.from(".img_section_4", {x: 4*speed, ease: "power1.in"}, 0)
    scene16.from(".post_section_home_4:nth-child(1)", {y: 1.5*speed, opacity: 0, ease: "power1.in"}, 0)
    scene16.from(".post_section_home_4:nth-child(2)", {y: 2*speed, opacity: 0,ease: "power1.in"}, 0)

});