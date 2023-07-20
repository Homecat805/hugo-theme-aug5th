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


});
