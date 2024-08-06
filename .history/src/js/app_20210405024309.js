/**
 * App
 */

import component from './components/component';
import $ from "jquery";
import gsap from "gsap";
import 'hammerjs';

import Parallax from 'parallax-js';

document.addEventListener('DOMContentLoaded', function() {
  component();


//alert((typeof window.outerHeight != 'undefined')?Math.max(window.outerHeight, $(window).height()):$(window).height());

  $(function() {

    $(window).resize(function(){
      $(".h-screen").css("height", window.innerHeight);
      $(".w-screen").css("width", window.innerWidth);
    });

     // Images loaded is zero because we're going to process a new set of images.
  var imagesLoaded = 0;
  // Total images is still the total number of <img> elements on the page.
  var totalImages = $('img').length;
  console.log("totalImages: " + totalImages);

    $('img').each(function(idx, img) {
      $('<img>').on('load', imageLoaded).attr('src', $(img).attr('src'));
      $("img").on("error", function () {
        onmouseleave.log('error');
    });
    });

    function imageLoaded() {
      imagesLoaded++;
    //  console.log(imagesLoaded);
      if (imagesLoaded == totalImages) {
        allImagesLoaded();
      }
    }

    function allImagesLoaded() {
      $("body").attr("style", "overflow:auto")
  
      $('.preloader-wrapper').fadeOut();

    }


    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.document.addEventListener('touchmove', e => {
        if(e.scale !== 1) {
          e.preventDefault();
        }
      }, {passive: false});
    }
    


    if ($(window).width() > 640) { //set up breaking point

      var scene = $('#scene').get(0);
      var parallaxInstance = new Parallax(scene);
  
      var scene_2 = $('#scene_2').get(0);
      var parallaxInstance2 = new Parallax(scene_2);

      
      var scene_3 = $('#scene_3').get(0);
      var parallaxInstance3 = new Parallax(scene_3);


      var scene_4 = $('#scene_4').get(0);
      var parallaxInstance4 = new Parallax(scene_4);

      var scene_5 = $('#scene_5').get(0);
      var parallaxInstance5 = new Parallax(scene_5);

      var scene_5 = $('#scene_5_1').get(0);
      var parallaxInstance5_1 = new Parallax(scene_5_1);

      var scene_6 = $('#scene_6').get(0);
      var parallaxInstance6 = new Parallax(scene_6);

      var scene_6_2 = $('#scene_6_2').get(0);
      var parallaxInstance6_2 = new Parallax(scene_6_2);



      var scene_8 = $('#scene_8').get(0);
      var parallaxInstance8 = new Parallax(scene_8);



  
  }

  var results=false;

  $("#info-ingre").on( "click", revealResults );


  function revealResults() {

if(!results)
{
    $("#info-ingre").addClass("opacity-0");
    $("#info-ingre").addClass("pointer-events-none");

    $("#results-ingre").removeClass("opacity-0");

    results=true;
}
else {

  $("#results-ingre").addClass("opacity-0");
    $("#info-ingre").removeClass("opacity-0");

    results=false;
}
  }



    var currentPage=1;

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);


  $(".page-1 .button-click, #menu_2").on( "click", moveToScreen02 );
  $(".page-2 .button-click, #menu_3").on( "click", moveToScreen03 );
  $(".page-3 .button-click, #menu_4").on( "click", moveToScreen04 );
  $(".page-4 .button-click, #menu_5").on( "click", moveToScreen05 );
  $(".page-5 .button-click, #menu_6").on( "click", moveToScreen06 );
  $(".page-6 .button-click, #menu_7").on( "click", moveToScreen07 );
  //$(".page-7 .button-click_2").on( "click", playAni );


  if ($(window).width() > 768) {
    $(".page-7 .button-click_2, #menu_8").on( "click", playBigSeven );
    $(".page-7 .button-click, #menu_8").on( "click", playBigSeven );
 }
 else {
  $(".page-7 .button-click, #menu_8").on( "click", moveToScreen08 );
 }

  
  $(".page-8 .button-click").on( "click", moveToScreen01 );
  $(".menu_1").on( "click", moveToScreen01 );


  var myElement = document.getElementById('page-container');

  var myElementList = document.getElementById('page-6');
  var mcList = new Hammer(myElementList);
  mcList.on("swipe", function(ev) {
    var direction = '';
    switch(ev.direction) {
      case Hammer.DIRECTION_LEFT:
        direction = 'left';
        break;
      case Hammer.DIRECTION_RIGHT:
        direction = 'right';
        break;
      case Hammer.DIRECTION_UP:
        direction = 'up';
        break;
      case Hammer.DIRECTION_DOWN:
        direction = 'down';
        break;
    }

    $("#results-ingre").addClass("opacity-0");
    $("#info-ingre").removeClass("opacity-0");

    if(direction == 'left') {     
console.log("list left");
moveToScreen06();

    }
    if(direction == 'right') {     
      console.log("list right");
      moveToScreen05();
    }
  });


  // create a simple instance
  // by default, it only adds horizontal recognizers
  var mc = new Hammer(myElement);
  mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

  //in-list


  mc.on("swipe", function(ev) {
    var direction = '';
	    switch(ev.direction) {
	    	case Hammer.DIRECTION_LEFT:
	    		direction = 'left';
	    		break;
	    	case Hammer.DIRECTION_RIGHT:
	    		direction = 'right';
	    		break;
	    	case Hammer.DIRECTION_UP:
	    		direction = 'up';
	    		break;
	    	case Hammer.DIRECTION_DOWN:
	    		direction = 'down';
	    		break;
	    }
      $("#results-ingre").addClass("opacity-0");
      $("#info-ingre").removeClass("opacity-0");

    if(direction == 'left') {     
      switch (currentPage)
      {
        case 1:
          moveToScreen02();
            break;
        case 2:
          moveToScreen03();
          break;
        case 3: 
            moveToScreen04();
            break;
            case 5: 
            moveToScreen06();
            break;
            case 6:             
            moveToScreen07();
            break;
            case 7: 
            if ($(window).width() > 768) {
              playBigSeven();
           }
           else {
              moveToScreen08();
           }                 
            break;
            case 77:             
            moveToScreen08();
            break;
        default: 
            break;
      }
    }
    else if(direction == 'right') {
      switch (currentPage)
      {
        case 1:          
            break;
        case 2:
          moveToScreen01();
          break;
        case 3: 
            moveToScreen02();
            break;
        case 4: 
        moveToScreen03();
        break;
        case 6: 
            moveToScreen05();
            break;
            case 70: 
            moveToScreen07();
            break;
            case 7: 
            moveToScreen06();            
            break;
            case 8: 
            moveToScreen07();
            break;
        default: 
            break;
      }
    }
    else if(direction == 'up') {
      switch (currentPage)
      {
        case 4:          
        moveToScreen05();
            break;      
        default: 
            break;
      }
    }
    else if(direction == 'down') {
      switch (currentPage)
      {
        case 5:          
        moveToScreen04();
            break;      
        default: 
            break;
      }
    }

});


/* GET AIRMUNE HERE */

$("#getOpen").on("click", openGetMenu );
$("#closeWhereToGet").on("click", closeGetMenu );



function openGetMenu() {    
  gsap.to(".menu-get-here", {left: '0', duration: .5, ease: "Back.easeOut"});
}

function closeGetMenu() {    
  gsap.to(".menu-get-here", {left: '-100vw', duration: .5, ease: "Back.easeOut"});
}


/*  */


  //$(".menu-mobile").slideUp();

  $("#menuOpen").on("click", openMenu );
  $("#menuClose").on("click", closeMenu );

  function openMenu() {    
    gsap.to(".menu-mobile", {left: '0', duration: .5, ease: "Back.easeOut"});
    if(currentPage==1) {
      tlanding.pause();
      tlanding.seek(0);
    }
    $("#menuOpen").hide();
    $("#menuClose").show();
  }
  function closeMenu() {
    $("#menuOpen").show();
    $("#menuClose").hide();
    gsap.to(".menu-mobile", {left: '-100vw', duration: .5, ease: "Back.easeOut"});
    if(currentPage==1) {    
      tlanding.seek(0);
      tlanding.resume();
    }
  }

  $(".menu-click-item").on("click", gotoPage);

  function gotoPage() {

    eval($(this).data("page"));
    setTimeout(closeMenu, 400);

    
  }

  var tlanding;

  function landingPageAnimate() {
    tlanding = gsap.timeline({repeat: -1, repeatDelay: 1});
    tlanding.from("#airmune-package", {left: "-100vw", duration: 1, rotation:-90, transformOrigin:"center center", ease:"Back.easeOut", delay: 2});
    tlanding.to("#airmune-package", {left: "100vw", duration: 1, rotation:90, transformOrigin:"center center", ease:"Back.easeIn", delay: 6});
    
    //remove when done!
    //tlanding.pause();
    //tlanding.seek(0);

  }

  landingPageAnimate();
  //moveToScreen07();

  

  function moveToScreen02() {

    currentPage=2;

    tlanding.pause();
    tlanding.seek(0);

    gsap.to(".page-container", {top: '0', left: '-100vw', duration: 1, ease: "Back.easeOut"});

    gsap.to("#animate_1", {left: '115vw', duration: 1, ease: "Back.easeOut"});

    $(".page-6 .button-click").addClass("hidden");
    
    $(".menu-nav").removeClass("bg-cream");
    
  }

  function moveToScreen03() {
    
    currentPage=3;
    gsap.to(".page-container", {top: '0', left: '-200%', duration: 1, ease: "Back.easeOut"});
    gsap.to("#animate_1", {left: '0', duration: 1, delay:0.8, ease: "Back.easeOut"});

    $(".page-6 .button-click").addClass("hidden");
    $(".menu-nav").removeClass("bg-cream");
  }

  function moveToScreen04() {
    
    currentPage=4;
    gsap.to(".page-container", {top: '0', left: '-300%', duration: 1, ease: "Strong.easeOut"});

    $(".page-6 .button-click").addClass("hidden");


    $(".menu-nav").addClass("bg-cream");

  }

  function moveToScreen05() {

    currentPage=5;
    gsap.to(".page-container", {top: '-100vh', left: '-300%', duration: 1, ease: "Strong.easeOut"});

    $(".page-6 .button-click").addClass("hidden");


    setTimeout(function(){

      $(".menu-nav").removeClass("bg-cream");

    },1300); 
    
    
  }

  function moveToScreen06() {
    
    currentPage=6;
    
    gsap.to("#page_5_circle", {right: '-100vw', duration: 1, ease: "Elastic.easeInOut"});
    gsap.to(".page-container", {top: '-100vh', left: '-400%', duration: 1, ease: "Back.easeOut"});

    $(".page-6 .button-click").removeClass("hidden");
    $(".menu-nav").addClass("bg-cream");
    
  }

  function moveToScreen07() {

    gsap.to("#page_5_circle", {right: '0', duration: 0.1, ease: "Elastic.easeInOut"});

    currentPage=7;
    $(".page-6").scrollTop(0);
    gsap.to(".page-container", { top: '-100vh', left: '-500%', duration: 1, ease: "Back.easeOut"});

    

    gsap.to("#p-7-1", {left: '-110%', opacity:0, duration: .1, ease: "Elastic.easeOut" });
    gsap.to("#p-7-2", {left: '110%', opacity:0, duration: .1, ease: "Elastic.easeOut"});
    gsap.to("#p-7-3", {left: '-110%', opacity:0, duration: .1, ease: "Elastic.easeOut"});
    gsap.to("#p-7-4", {left: '110%', opacity:0, duration: .1, ease: "Elastic.easeOut"});
    gsap.to("#p-7-5", {left: '-110%', opacity:0, duration: .1, ease: "Elastic.easeOut"});
    gsap.to("#p-7-6", {left: '110%', opacity:0, duration: .1, ease: "Elastic.easeOut"});
    gsap.to("#p-7-7", {left: '-110%', opacity:0, duration: .1, ease: "Elastic.easeOut"});

    if ($(window).width() < 768) {
      playAni();  
   }
   else {
    gsap.to("#headlinePageSeven", {top: '0', opacity:1, duration: .1, ease: "Strong.easeOut" });
   }

    $(".page-6 .button-click").addClass("hidden");
    $(".menu-nav").removeClass("bg-cream");
  }


  function playAni() {
    gsap.to("#p-7-1", {left: '-0%', opacity:1, duration: .8, ease: "Elastic.easeOut", delay:1});
    gsap.to("#p-7-2", {left: '0%', opacity:1, duration: .8, ease: "Elastic.easeOut", delay:1.2});
    gsap.to("#p-7-3", {left: '-0%', opacity:1, duration: .8, ease: "Elastic.easeOut" , delay:1.4});
    gsap.to("#p-7-4", {left: '0%', opacity:1, duration: .8, ease: "Elastic.easeOut", delay:1.6});
    gsap.to("#p-7-5", {left: '-0%', opacity:1, duration: .8, ease: "Elastic.easeOut", delay:1.8});
    gsap.to("#p-7-6", {left: '0%', opacity:1, duration: .8, ease: "Elastic.easeOut", delay:2});
    gsap.to("#p-7-7", {left: '-0%', opacity:1, duration: .8, ease: "Elastic.easeOut", delay:2.2});

    
  }

  function removeHeadline() {
    
    gsap.to("#headlinePageSeven", {top: '-100px', opacity:0, duration: 1, ease: "Strong.easeOut" });
  }

  function playBigSeven() {
    
    if(currentPage==7)
    {
        currentPage=77;
        removeHeadline();
        playAni();    
    }
    else {
      moveToScreen08();
    }
  }

  function moveToScreen08() {
    
    currentPage=8;
    gsap.to(".page-container", {top: '-100vh', left: '-600%', duration: 1, ease: "Strong.easeOut"});

    $(".page-6 .button-click").addClass("hidden");
    $(".menu-nav").removeClass("bg-cream");
  }

  function moveToScreen01() {
    

    currentPage=1;
    tlanding.resume();
    tlanding.play();
    gsap.to(".page-container", {top: '0', left: '0', duration: 1, ease: "Strong.easeOut"});
    gsap.to("#animate_1", {left: '0', duration: 1.5, ease: "Elastic.easeInOut"});

    $(".page-6 .button-click").addClass("hidden");
    $(".menu-nav").removeClass("bg-cream");
  }

  $(".header_acc").on( "click", function( e ) {

    var openItem = e.target.id;

    $(".accordian-menu-item").slideUp("fast");

    var i;
    for (i = 0; i < $(".accordian-menu-item-header").length; i++) {
      
      if(i != $(this).attr("data-num")) {
        $("#"+i).slideUp();  
      }
      
    }

    $("#acc_"+openItem).slideDown("slow");
    gsap.to(".pills", {top: '90%', duration: 1, ease: "Strong.easeOut"});
    $(".page-4 .button-click").hide();
    $(".page-4 .button-click-close").show();

  });

  $(".page-4 .button-click-close").on( "click", function() {


    gsap.to(".pills", {top: 'auto', duration: 1, ease: "Strong.easeOut"});
    
    $(".page-4 .button-click").addClass('opacity-100');
    $(".page-4 .button-click-close").addClass('opacity-0');

    $(".accordian-menu-item-header").slideDown("fast", function(){

      $(".accordian-menu-item").slideUp("slow");

    });

  });


  //
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  
    var panels = document.getElementsByClassName("panel");
    
    $(".accordion").removeClass('active');
    for(var i = 0; i < panels.length; i++){
      //do something to each div like
      panels[i].style.maxHeight = null;
    }

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    setTimeout(function() {

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      
      } 

    }, 200);

  });
}




$(window).trigger('resize');


});
  
});