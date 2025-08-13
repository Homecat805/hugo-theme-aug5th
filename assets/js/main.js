$(document).ready(function(){

    'use strict';

    // nav menu-main ---------------------------------------- start
    const navTarget = $('#header').find('.nav');
    const navOpenBtn = $('#header').find('.nav-toggle').children('.open');
    const navCloseBtn = $('#header').find('.nav-toggle').children('.close');
   
    navOpenBtn.click(function(){
        navTarget.animate({top: "60px"});
        navCloseBtn.show();
        navOpenBtn.hide();
    });

    navCloseBtn.click(function(){
        navTarget.animate({top: "-60px"});
        navOpenBtn.show();
        navCloseBtn.hide();
    });
    // nav menu-main ---------------------------------------- end
  
});

// scroll wheel  ---------------------------------------------- start

$(window).scroll(function() {
    var distance = $(this).scrollTop();
    if ( distance > 100) {
        $('#header').hide();
    } else {
        $('#header').show();
    }
});

// scroll wheel ----------------------------------------------- end  


