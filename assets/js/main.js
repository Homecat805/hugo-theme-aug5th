$(window).resize(function(){
    location.reload();
});

$(document).ready(function(){

    'use strict';

    // Sider Controll Start

    const sider = $('#side');
    const siderOpenBtn = $('#side-toggle').children('.open');
    const siderCloseBtn = $('#side-toggle').children('.close');

    siderOpenBtn.click(function(){
        sider.animate({left:'0'});
        siderCloseBtn.show();
        siderOpenBtn.hide();
    });

    siderCloseBtn.click(function(){
        sider.animate({left:'-240px'});
        siderOpenBtn.show();
        siderCloseBtn.hide();
    });

    // Sider Controll End


    // *************************************************************************************************
    // carousel buttons
    // *************************************************************************************************

    // button for launchFullscreen
    $(".btn-fullscreen").click(function () {
        launchFullscreen(document.documentElement);
        $(this).hide();
        $(this).parents(".carousel-btn-top").children(".btn-fullscreen-exit").show();
    });

    // button for exitFullscreen
    $(".btn-fullscreen-exit").click(function () {
        exitFullscreen();
        $(this).hide();
        $(this).parents(".carousel-btn-top").children(".btn-fullscreen").show();
    });

    // button for right
    $(".btn-right").click(function () {
        $(".carousel-stage").children(".active").fadeOut(0).addClass("inactive temp").removeClass("active");
        if ($(".carousel-stage").children(".temp").next().length >0){
            $(".carousel-stage").children(".temp").next().fadeIn(500).addClass("active").removeClass("inactive");
        } else {
            $(".carousel-stage").children(".carousel-item").first().fadeIn(500).addClass("active").removeClass("inactive");
        }
        $(".carousel-stage").children(".temp").removeClass("temp");
    });

    // button for left
    $(".btn-left").click(function () {
        $(".carousel-stage").children(".active").fadeOut(0).addClass("inactive temp").removeClass("active");
        if ($(".carousel-stage").children(".temp").prev().length >0){
            $(".carousel-stage").children(".temp").prev().fadeIn(500).addClass("active").removeClass("inactive");
        } else {
            $(".carousel-stage").children(".carousel-item").last().fadeIn(500).addClass("active").removeClass("inactive");
        }
        $(".carousel-stage").children(".temp").removeClass("temp");
    });

    // button for item-infomation
    $(".btn-info").click(function () {
        $(".carousel-txt-container").fadeToggle(1000);
    });



    // carousel
    $(".carousel-toggle").click(function () {
        $(this).parent().children(".carousel-target").fadeToggle(1000);
    });

    $(".btn-carousel-exit").click(function () {
        if (document.fullscreenElement){
            exitFullscreen();
            $(this).parents(".carousel-btn-top").children(".btn-fullscreen-exit").hide();
            $(this).parents(".carousel-btn-top").children(".btn-fullscreen").show();
        }
        $(this).parents(".carousel-target").fadeToggle(1000);
    });
});


// Function for Modal button launchFullscreen 

function launchFullscreen(element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
       element.mozRequestFullScreen();
    } else if(element.msRequestFullscreen){
       element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {
       element.webkitRequestFullScreen();
    }
}

// Function for Modal button exitFullscreen 

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
}








