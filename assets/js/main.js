$(window).resize(function(){
    location.reload();
});

$(document).ready(function(){

    'use strict';

    // Sidebar

    const sidebar = $('#sidebar');
    const nOpenBtn = $('#n-screen').children('.open');
    const nCloseBtn = $('#n-screen').children('.close');
    const wOpenBtn = $('#w-screen').children('.open');
    const wCloseBtn = $('#w-screen').children('.close');

    const menuItemName = $('.menu').find('.item-name');
    const menuItemToggle = $('.menu').find('.item-toggle');


    nOpenBtn.click(function(){
        sidebar.animate({left:'0'});
        nCloseBtn.show();
        nOpenBtn.hide();
    });

    nCloseBtn.click(function(){
        sidebar.animate({left:'-270px'});
        nOpenBtn.show();
        nCloseBtn.hide();
    });

    wOpenBtn.click(function(){
        sidebar.animate({width:'60px'});

        wCloseBtn.show();
        wOpenBtn.hide();
        menuItemName.hide(250);
        menuItemToggle.hide(250);

    });

    wCloseBtn.click(function(){
        sidebar.animate({width:'250px'});
        wOpenBtn.show();
        wCloseBtn.hide();
        menuItemName.show();
        menuItemToggle.show();
    });

});
