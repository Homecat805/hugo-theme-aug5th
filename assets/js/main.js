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

    const carouselBtnLeft = $('.carousel').find('.left');
    const carouselBtnRight = $('.carousel').find('.right');
    const carouselBtnInfo = $('.carousel').find('.info');

    carouselBtnInfo.click(function(){
        const carouselInfo = $(this).parents('.carousel').find('.active').find('.carousel-item-text');
        carouselInfo.toggle();
    });

    carouselBtnRight.click(function(){
        const item = $(this).parents('.carousel').find('.active');
        const itemFirst = $(this).parents('.carousel').find('.carousel-item-container').first();
        
        item.fadeOut(0).addClass("temp").removeClass("active");
        const itemTemp = $('.carousel').find('.temp');

        if (itemTemp.next().length >0){
            itemTemp.next().fadeIn(500).addClass("active");
        } else {
            itemFirst.fadeIn(500).addClass("active");
        }
        itemTemp.removeClass("temp");
    });

    carouselBtnLeft.click(function(){
        const item = $(this).parents('.carousel').find('.active');
        const itemLast = $(this).parents('.carousel').find('.carousel-item-container').last();
        
        item.fadeOut(0).addClass("temp").removeClass("active");
        const itemTemp = $('.carousel').find('.temp');

        if (itemTemp.prev().length >0){
            itemTemp.prev().fadeIn(500).addClass("active");
        } else {
            itemLast.fadeIn(500).addClass("active");
        }
        itemTemp.removeClass("temp");
    });

});


