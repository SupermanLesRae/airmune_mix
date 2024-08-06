/**
 * App
 */

import component from './components/component';
import $ from "jquery";
import gsap from "gsap";
import 'hammerjs';

import Parallax from 'parallax-js';

document.addEventListener('DOMContentLoaded', function () {
  component();

  $(function () {

    $(window).resize(function () {
      $(".h-screen").css("height", window.innerHeight);
      $(".w-screen").css("width", window.innerWidth);
    });

    // Images loaded is zero because we're going to process a new set of images.
    var imagesLoaded = 0;
    var tlanding;
    // Total images is still the total number of <img> elements on the page.
    var totalImages = $('img').length;
    //console.log("totalImages: " + totalImages);

    $('img').each(function (idx, img) {
      $('<img>').on('load', imageLoaded).attr('src', $(img).attr('src'));
      $("img").on("error", function () {
        onmouseleave.log('error');
      });
    });

    function imageLoaded() {
      imagesLoaded++;
      //  //console.log(imagesLoaded);
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
        if (e.scale !== 1) {
          e.preventDefault();
        }
      }, {
        passive: false
      });
    }

    var results = false;

    $("#info-ingre").on("click", revealResults);


    function revealResults() {

      if (!results) {

        $("#info-ingre").removeClass("relative");
        $("#info-ingre").addClass("absolute opacity-0");

        $("#results-ingre").addClass("relative pointer-events-none");
        $("#results-ingre").removeClass("absolute opacity-0");


        results = true;
      } else {

        $("#info-ingre").addClass("relative");
        $("#info-ingre").removeClass("absolute opacity-0");

        $("#results-ingre").removeClass("relative pointer-events-none");
        $("#results-ingre").addClass("absolute opacity-0");

        results = false;
      }
    }



    var currentPage = 1;

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    $(".page-1 .button-click, #menu_2").on("click", moveToScreen02);
    $(".page-2 .button-click, #menu_3").on("click", moveToScreen03);
    $(".page-3 .button-click, #menu_4").on("click", moveToScreen04);
    $(".page-4 .button-click, #menu_5").on("click", moveToScreen05);
    $(".page-5 .button-click, #menu_6").on("click", moveToScreen06);
    $(".page-6 .button-click, #menu_7").on("click", moveToScreen07);

    if ($(window).width() > 768) {

      $(".getOpenBoth").on("click", function () {

        $("#get_air_here").show();

      });

      $("#closeWhereToGet_desktop").on("click", function () {

        $("#get_air_here").hide();

      });

    }

    if ($(window).width() > 768) {
      $(".page-7 .button-click_2, #menu_8").on("click", playBigSeven);
      $(".page-7 .button-click, #menu_8").on("click", playBigSeven);
    } else {
      $(".page-7 .button-click, #menu_8").on("click", moveToScreen08);
    }


    $(".page-8 .button-click").on("click", moveToScreen01);
    $(".menu_1").on("click", moveToScreen01);


    var myElement = document.getElementById('page-container');

    var myElementList = document.getElementById('page-6');
    var mcList = new Hammer(myElementList);
    mcList.on("swipe", function (ev) {
      var direction = '';
      switch (ev.direction) {
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

      if (direction == 'left') {

        moveToScreen06();

      }
      if (direction == 'right') {

        moveToScreen05();
      }
    });


    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);
    mc.get('swipe').set({
      direction: Hammer.DIRECTION_ALL
    });

    //in-list


    mc.on("swipe", function (ev) {
      var direction = '';
      switch (ev.direction) {
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

      if (direction == 'left') {
        switch (currentPage) {
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
            } else {
              moveToScreen08();
            }
            break;
          case 77:
            moveToScreen08();
            break;
          default:
            break;
        }
      } else if (direction == 'right') {
        switch (currentPage) {
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
      } else if (direction == 'up') {
        switch (currentPage) {
          case 4:
            moveToScreen05();
            break;
          default:
            break;
        }
      } else if (direction == 'down') {
        switch (currentPage) {
          case 5:
            moveToScreen04();
            break;
          default:
            break;
        }
      }

    });


    /* GET AIRMUNE HERE */

    if ($(window).width() < 768) {

      $("#getOpen").on("click", openGetMenu);
      $("#closeWhereToGet").on("click", closeGetMenu);
      gsap.to(".menu-get-here", {
        left: '0',
        top: '-100vh',
        duration: .1,
        ease: "Back.easeOut"
      });
    }



    function openGetMenu() {
      gsap.to(".menu-get-here", {
        left: '0',
        top: '0',
        duration: .5,
        ease: "Strong.easeOut"
      });
    }

    function closeGetMenu() {
      gsap.to(".menu-get-here", {
        left: '0',
        top: '-100vh',
        duration: .5,
        ease: "Strong.easeOut"
      });
    }


    /*  */

    $("#menuOpen").on("click", openMenu);
    $("#menuClose").on("click", closeMenu);

    function openMenu() {
      gsap.to(".menu-mobile", {
        left: '0',
        duration: .5,
        ease: "Back.easeOut"
      });
      if (currentPage == 1) {
        tlanding.pause();
        tlanding.seek(0);
      }
      $("#menuOpen").hide();
      $("#menuClose").show();
    }

    function closeMenu() {
      $("#menuOpen").show();
      $("#menuClose").hide();
      gsap.to(".menu-mobile", {
        left: '-100vw',
        duration: .5,
        ease: "Back.easeOut"
      });
      if (currentPage == 1) {
        tlanding.seek(0);
        tlanding.resume();
      }
    }

    $(".menu-click-item").on("click", gotoPage);

    function gotoPage() {

      eval($(this).data("page"));
      setTimeout(closeMenu, 400);


    }

    function landingPageAnimate() {
      tlanding = gsap.timeline({
        repeat: -1,
        repeatDelay: 1
      });
      tlanding.from("#airmune-package", {
        left: "-110vw",
        duration: 1,
        rotation: -90,
        transformOrigin: "center center",
        ease: "Back.easeOut",
        delay: 2
      });
      tlanding.to("#airmune-package", {
        left: "110vw",
        duration: 1,
        rotation: 90,
        transformOrigin: "center center",
        ease: "Back.easeIn",
        delay: 6
      });

    }


    landingPageAnimate();

    function bottomReset() {
      gsap.to(".background-layer-4-desktop", {
        top: '0',
        left: '-500px',
        duration: 1.3,
        delay: 0.1,
        ease: "Strong.easeOut"
      });
    }

    function topReset() {
      gsap.to(".background-layer-2-desktop", {
        top: '200px',
        left: '-500px',
        duration: 1.3,
        delay: 0.1,
        ease: "Back.easeInOut"
      });
    }

    function moveToScreen01() {

      bottomReset();

      $(".menu-main p").removeClass('font-bold');

      currentPage = 1;
      tlanding.resume();
      tlanding.play();
      gsap.to(".page-container", {
        top: '0',
        left: '0',
        duration: 1,
        ease: "Strong.easeOut"
      });
      gsap.to(".background-layer-2-desktop", {
        top: '0',
        left: '0px',
        duration: 0.2,
        ease: "Strong.easeInOut"
      });

      $(".page-6 .button-click").addClass("hidden");
    }


    function moveToScreen02() {

      bottomReset();

      $(".menu-main p").removeClass('font-bold');

      currentPage = 2;

      tlanding.pause();
      tlanding.seek(0);

      gsap.to(".page-container", {
        top: '0',
        left: '-100vw',
        duration: 1,
        ease: "Back.easeOut"
      });
      gsap.to(".background-layer-2-desktop", {
        top: '0',
        left: '200px',
        duration: 1.3,
        delay: 0.1,
        ease: "Back.easeInOut"
      });


      $(".page-6 .button-click").addClass("hidden");

    }

    function moveToScreen03() {

      bottomReset();

      $(".menu-main p").removeClass('font-bold');
      $("#menu_3 p").addClass('font-bold');


      currentPage = 3;
      gsap.to(".page-container", {
        top: '0',
        left: '-200%',
        duration: 1,
        ease: "Back.easeOut"
      });
      gsap.to(".background-layer-2-desktop", {
        top: '0',
        left: '400px',
        duration: 1.3,
        delay: 0.1,
        ease: "Back.easeOut"
      });

      $(".page-6 .button-click").addClass("hidden");

    }

    function moveToScreen04() {

      bottomReset();

      $(".menu-main p").removeClass('font-bold');
      $("#menu_4 p").addClass('font-bold');

      currentPage = 4;
      gsap.to(".page-container", {
        top: '0',
        left: '-300%',
        duration: 1,
        ease: "Strong.easeOut"
      });
      gsap.to(".background-layer-2-desktop", {
        top: '0',
        left: '600px',
        duration: 1.3,
        delay: 0.1,
        ease: "Strong.easeInOut"
      });

      gsap.to(".background-layer-4-desktop", {
        top: '200px',
        left: '-500px',
        duration: 1.3,
        delay: 0.1,
        ease: "Strong.easeInOut"
      });

      $(".page-6 .button-click").addClass("hidden");

    }

    function moveToScreen05() {

      topReset();

      $(".menu-main p").removeClass('font-bold');
      $("#menu_5 p").addClass('font-bold');

      currentPage = 5;
      gsap.to(".page-container", {
        top: '-100vh',
        left: '-300%',
        duration: 1,
        ease: "Strong.easeOut"
      });
      gsap.to(".background-layer-4-desktop", {
        top: '0',
        left: '-500px',
        duration: 1.3,
        delay: 0.1,
        ease: "Strong.easeOut"
      });

      $(".page-6 .button-click").addClass("hidden");


    }

    function moveToScreen06() {

      topReset();

      $(".menu-main p").removeClass('font-bold');
      $("#menu_6 p").addClass('font-bold');

      currentPage = 6;

      gsap.to(".page-container", {
        top: '-100vh',
        left: '-400%',
        duration: 1,
        ease: "Back.easeOut"
      });
      gsap.to(".background-layer-4-desktop", {
        top: '0',
        left: '-250px',
        duration: 1.3,
        delay: 0.1,
        ease: "Back.easeOut"
      });

      $(".page-6 .button-click").removeClass("hidden");

    }

    function moveToScreen07() {


      topReset();

      $(".menu-main p").removeClass('font-bold');
      $("#menu_7 p").addClass('font-bold');

      currentPage = 7;
      $(".page-6").scrollTop(0);
      gsap.to(".page-container", {
        top: '-100vh',
        left: '-500%',
        duration: 1,
        ease: "Back.easeOut"
      });
      gsap.to(".background-layer-4-desktop", {
        top: '0',
        left: '-100px',
        duration: 1.3,
        delay: 0.1,
        ease: "Back.easeOut"
      });

      gsap.to("#p-7-1", {
        left: '-110%',
        opacity: 0,
        duration: .1,
        ease: "Elastic.easeOut"
      });
      gsap.to("#p-7-2", {
        left: '110%',
        opacity: 0,
        duration: .1,
        ease: "Elastic.easeOut"
      });
      gsap.to("#p-7-3", {
        left: '-110%',
        opacity: 0,
        duration: .1,
        ease: "Elastic.easeOut"
      });
      gsap.to("#p-7-4", {
        left: '110%',
        opacity: 0,
        duration: .1,
        ease: "Elastic.easeOut"
      });
      gsap.to("#p-7-5", {
        left: '-110%',
        opacity: 0,
        duration: .1,
        ease: "Elastic.easeOut"
      });
      gsap.to("#p-7-6", {
        left: '110%',
        opacity: 0,
        duration: .1,
        ease: "Elastic.easeOut"
      });
      gsap.to("#p-7-7", {
        left: '-110%',
        opacity: 0,
        duration: .1,
        ease: "Elastic.easeOut"
      });

      if ($(window).width() < 768) {

        playAni();
      } else {
        gsap.to("#headlinePageSeven", {
          top: '0',
          opacity: 1,
          duration: .1,
          ease: "Strong.easeOut"
        });
        gsap.from("#getOpen", {
          top: '100px',
          opacity: 0,
          duration: .8,
          delay: 0.8,
          ease: "Strong.easeOut"
        });
      }

      $(".page-6 .button-click").addClass("hidden");
    }

    function playAni() {

      gsap.to("#getOpen", {
        top: '0',
        opacity: 1,
        duration: .8,
        delay: 0.8,
        ease: "Back.easeOut",
        delay: 1
      });

      gsap.to("#p-7-1", {
        left: '-0%',
        opacity: 1,
        duration: .8,
        ease: "Elastic.easeOut",
        delay: 1.2
      });
      gsap.to("#p-7-2", {
        left: '0%',
        opacity: 1,
        duration: .8,
        ease: "Elastic.easeOut",
        delay: 1.4
      });
      gsap.to("#p-7-3", {
        left: '-0%',
        opacity: 1,
        duration: .8,
        ease: "Elastic.easeOut",
        delay: 1.6
      });
      gsap.to("#p-7-4", {
        left: '0%',
        opacity: 1,
        duration: .8,
        ease: "Elastic.easeOut",
        delay: 1.8
      });
      gsap.to("#p-7-5", {
        left: '-0%',
        opacity: 1,
        duration: .8,
        ease: "Elastic.easeOut",
        delay: 2
      });
      gsap.to("#p-7-6", {
        left: '0%',
        opacity: 1,
        duration: .8,
        ease: "Elastic.easeOut",
        delay: 2.2
      });
      gsap.to("#p-7-7", {
        left: '-0%',
        opacity: 1,
        duration: .8,
        ease: "Elastic.easeOut",
        delay: 2.4
      });


    }

    function removeHeadline() {

      gsap.to("#headlinePageSeven", {
        top: '-100px',
        opacity: 0,
        duration: 1,
        ease: "Strong.easeOut"
      });
    }

    function playBigSeven() {

      if (currentPage == 7) {
        currentPage = 77;
        removeHeadline();
        playAni();
      } else {
        moveToScreen08();
      }
    }

    function moveToScreen08() {

      topReset();

      gsap.to("#getOpen", {
        top: '0',
        opacity: 1,
        duration: .1,
        ease: "Back.easeOut",
        delay: 3
      });

      $(".menu-main p").removeClass('font-bold');
      $("#menu_8 p").addClass('font-bold');

      currentPage = 8;
      gsap.to(".page-container", {
        top: '-100vh',
        left: '-600%',
        duration: 1,
        ease: "Strong.easeOut"
      });
      gsap.to(".background-layer-4-desktop", {
        top: '0',
        left: '0',
        duration: 1.3,
        delay: 0.1,
        ease: "Back.easeOut"
      });

      $(".page-6 .button-click").addClass("hidden");
    }




    $(".header_acc").on("click", function (e) {

      if ($(this).hasClass('open')) {
        $(".button-click-close").trigger('click');
      } else {
        var openItem = e.target.id;

        $(".accordian-menu-item").slideUp("fast");

        var i;
        for (i = 0; i < $(".accordian-menu-item-header").length; i++) {

          if (i != $(this).attr("data-num")) {
            $("#" + i).slideUp();
          }

        }

        $("#acc_" + openItem).slideDown("slow");

        $(".pills_img").addClass("pills_img_active");

        // gsap.to(".pills_img", {top: '90vh', duration: 0.4, ease: "Strong.easeOut", delay:0.4});
        $(".page-4 .button-click").hide();
        $(".page-4 .button-click-close").show();
        $(this).addClass("open");
      }



    });

    $(".page-4 .button-click-close").on("click", function () {


      $('.header_acc').removeClass('open');

      $(".pills_img").removeClass("pills_img_active");

      //   gsap.to(".pills_img", {top: '70vh', duration: 0.4, ease: "Strong.easeOut", delay:0.4});

      $(".page-4 .button-click").show();
      $(".page-4 .button-click-close").hide();

      $(".accordian-menu-item-header").slideDown("fast", function () {

        $(".accordian-menu-item").slideUp("slow");

      });

    });


    //
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {

        var panels = document.getElementsByClassName("panel");

        $(".accordion").removeClass('active');
        for (var i = 0; i < panels.length; i++) {
          //do something to each div like
          panels[i].style.maxHeight = null;
        }

        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        setTimeout(function () {

          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;

          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";

          }

        }, 200);

      });
    }


    $(window).trigger('resize');


    /*-----------------------------------------------------------------------*/

    var node;
    var rotation = 0;
    var gestureStartRotation = 0;
    var gestureStartScale = 0;
    var scale = 1;
    var posX = 0;
    var posY = 0;
    var startX;
    var startY;

    var pageDisValX = 0;
    var pageDisValY = 0;
    var isPageMoving = false;
    var directionSwipe = '';

    var node = document.querySelector('.page-container')

    console.log(node.style.posX);

    setInterval(() => {
        pageDisValX=0;
        pageDisValY=0;
        posX=0;
        isPageMoving = false;
        console.log("reset");
    }, 4000);

    function reset() {
      setTimeout(() => {
        pageDisValX=0;
        pageDisValY=0;
        posX=0;
        isPageMoving = false;
      }, 1000);
    }

    var render = () => {

        window.requestAnimationFrame(() => {

        
            if(!isPageMoving) {

              pageDisValX=posX;
              pageDisValY=posY;


              if(pageDisValX < -300) {

                directionSwipe = 'right';
              }
              else if(pageDisValX > 300) {
                directionSwipe = 'left';
              }
              else if(pageDisValY < -300) {
                directionSwipe = 'down';
              }
              else if(pageDisValY > 300) {              
                directionSwipe = 'up';
              }
              else {
  
              }


              console.log(directionSwipe);


/* 
              case 5:
                console.log("go to page fucken 6");
                moveToScreen06();
                break;           
              case 6:
                moveToScreen07();
                break;     
                case 7:
                  if ($(window).width() > 768) {
                    playBigSeven();
                  } else {
                    moveToScreen08();
                  }
                  break;
                case 77:
                  moveToScreen08();
                  break; */

             
              if(directionSwipe == 'right') {

                isPageMoving = true;

                switch(currentPage) {
                  case 1:
                    moveToScreen02();
                    break;
                  case 2:
                    moveToScreen03();
                    break;
                  case 3:
                    moveToScreen04();
                    break;                             
                  default:
                    // code block
                }

                reset();

              } 
              else if(directionSwipe == 'left') {

                isPageMoving = true;

                switch(currentPage) {
                  
                  case 4:
                    moveToScreen03();
                    break;
                  case 3:
                    moveToScreen02();
                    break;
                  case 2:
                    moveToScreen01();
                    break;            
                  default:
                    // code block
                }
              }
             /*  else if(directionSwipe == 'up') {

                isPageMoving = true;

                switch(currentPage) {
                  case 5:
                    moveToScreen04();
                    break;            
                  default:
                    // code block
                }
              }
              else if(directionSwipe == 'down') {

                isPageMoving = true;

                switch(currentPage) {
                  case 4:
                    moveToScreen05();
                    break;            
                  default:
                    // code block
                }
              } */
               
                reset();
            } 
                       
        })

    }

    window.addEventListener('wheel', (e) => {
        e.preventDefault();

        if (e.ctrlKey) {
            scale -= e.deltaY * 0.01;
        } else {
            posX -= e.deltaX * 2;
            posY -= e.deltaY * 2;
        }

        render();
    });


    window.addEventListener("gesturestart", function (e) {
        e.preventDefault();
        startX = e.pageX - posX;
        startY = e.pageY - posY;
        gestureStartRotation = rotation;
        gestureStartScale = scale;
        
    });

    window.addEventListener("gesturechange", function (e) {
        e.preventDefault();

        rotation = gestureStartRotation + e.rotation;
        scale = gestureStartScale * e.scale;

        posX = e.pageX - startX;
        posY = e.pageY - startY;

        render();

    })

    window.addEventListener("gestureend", function (e) {
        e.preventDefault();
       
    });

    /*-----------------------------------------------------------------------*/

  });

});