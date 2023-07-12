$(window).resize(function(){
    location.reload();
});

$(document).ready(function(){

    'use strict';

    // Sider Controll Start

    const sider = $('#sider');
    const siderOpenBtn = $('#sider-button').children('.open');
    const siderCloseBtn = $('#sider-button').children('.close');

    siderOpenBtn.click(function(){
        sider.animate({left:'0'});
        siderCloseBtn.show();
        siderOpenBtn.hide();
    });

    siderCloseBtn.click(function(){
        sider.animate({left:'-270px'});
        siderOpenBtn.show();
        siderCloseBtn.hide();
    });

    // Sider Controll End

    // Menu
 
    menuItemToggle.click(function(){

        $(this).parents('.menu-item').siblings().children('.sub-menu').slideUp();

        $(this).parents('.menu-item').find('.sub-menu').slideToggle();
        
    });


});
