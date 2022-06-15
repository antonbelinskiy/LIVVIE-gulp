import * as flsFunctions from "./modules/functions.js";
import "./modules/slick.min.js"
// import "./modules/popup.js";
import "./modules/header.js";
import "./modules/slider.js";
//import "./modules/service.js";
import "./modules/select2.full.min.js";
import "./modules/swiper.js";

flsFunctions.isWebp();


function closeCookiePopup(){
    $('#close_cookie_popup').click(function(){
        $('#cookie_bar').removeClass('active');
    });
}

function collapseMobileFooterMemu(){
    if($(window).width() <= 991){
        $('.footer__list.list.left h2').click(function(){
            $(this).parents('.footer__list').toggleClass('active');
        });
        $('.footer__list.list.middle h2').click(function(){
            $(this).parents('.footer__list').toggleClass('active');
        })
    }

}

function headerMegaMenuClose(){

    $('.header__menu li.dropdown a.mega-menu__link').removeClass('active');
    if(!$('body').hasClass('scrolled')){
        $('body').removeClass('white-header')
    }
    $('.header__menu li .mega-menu__submenu').removeClass('active');
}

function headerMegaMenuOpen(){
    $('.header__menu li.dropdown').mouseover(function(e){
        headerMegaMenuClose();
        $(this).find('.mega-menu__link').addClass('active');
        if(!$('body').hasClass('scrolled')){
            $('body').addClass('white-header')
        }
        $(this).find('.mega-menu__submenu').addClass('active');
    })

    $('.header__menu li.dropdown').mouseleave(function(e){
        headerMegaMenuClose();
    })

}

function cartSidebar(){
    $('#header a.cart__link.popup-link').click(function(e){
        e.preventDefault();
        $('body').addClass('lock');
        $('#sidebar-overlay').addClass('active');
        $('#cart-sidebar').addClass('active');
    });

    $('#cart-sidebar #close_cart_button').click(function(){
        $('body').removeClass('lock');
        $('#sidebar-overlay').removeClass('active');
        $('#cart-sidebar').removeClass('active');
    })
}

function leftSidebar(){
    $('#header a.main-menu__link.popup-link').click(function(e){
        e.preventDefault();
        $('body').addClass('lock');
        $('#sidebar-overlay').addClass('active');
        $('#left-sidebar').addClass('open');
    });

    $('#left-sidebar #close_menu_button').click(function(){
        $('body').removeClass('lock');
        $('#sidebar-overlay').removeClass('active');
        $('#left-sidebar').removeClass('open');
    })
}

function authSidebar(){

    $('.link_signin').click(function(e){
        e.preventDefault();
        $(this).parents('.auth-sidebar').removeClass('active');
        $('#signin-sidebar').addClass('active');
    });

    $('a.signin_sidebar').click(function(e){

        $('#main-menu').removeClass('open');
        $('#popup-menu-overlay').removeClass('active');
        $('.auth-sidebar').removeClass('active');


        e.preventDefault();
        $('body').addClass('lock');
        $('#sidebar-overlay').addClass('active');
        $('#signin-sidebar').addClass('active');
    });

    //Close sidebar
    $('.auth-sidebar .close_sidebar').click(function(){
        $('body').removeClass('lock');
        $('#sidebar-overlay').removeClass('active');
        $(this).parents('.auth-sidebar').removeClass('active');
    });
}

function signUpSidebar(){
    $('a#link_signup').click(function(e){
        e.preventDefault();

        $('.auth-sidebar').removeClass('active');
        $('#signup-sidebar').addClass('active');

    });
}

function resetPassSidebar(){
    $('a#link_reset_password').click(function(e){
        e.preventDefault();
        $('.auth-sidebar').removeClass('active');
        $('#pass-reset-sidebar').addClass('active');

    });
}

function closeSidebarsByOverlayClick(){
    $('#sidebar-overlay').click(function(){
        if($(this).hasClass('active')){
            $('#sidebar-overlay').removeClass('active');
            $('body').removeClass('lock');
            $('.popup').removeClass('open');
            $('.popup-sidebar').removeClass('active');
        }
    });
}

function forceCloseSidebars(){
    $('#sidebar-overlay').removeClass('active');
    $('body').removeClass('lock');
    $('.popup').removeClass('open');
    $('.popup-sidebar').removeClass('active');
}

function mobileFilter(){
    $('button.open_filter').click(function(){
       $('body').addClass('overflow_hidden');
       $('#filter_col').addClass('opened');
    });
    $('#filter button.close_filter').click(function(){
        $('body').removeClass('overflow_hidden');
        $('#filter_col').removeClass('opened');
    })
}



function productCardGallery(){
    if($('.product__wrapper .images_container').length) {

        if ($(window).width() > 991 ) {
            //Open Gallery
            $('.product__wrapper .images_container img').click(function () {
                console.log('gallery_click');
                $('#product_gallery_popup').addClass('active');
                $('body').addClass('lock');
            });

            //Close Gallery
            $('html').click(function () {
                if ($('#product_gallery_popup').hasClass('active')) {
                    $('#product_gallery_popup').removeClass('active');
                    $('body').removeClass('lock');
                    $('#product_gallery_popup .popup_additional_images a').removeClass('active');
                    $('#product_gallery_popup .popup_additional_images a:first-child').trigger('click');
                }
            });
            $('#product_gallery_popup .product_gallery').click(function (event) {
                event.stopPropagation();
            })
            $('.product__wrapper .images_container').click(function (event) {
                event.stopPropagation();
            })


            $('#product_gallery_popup .product_gallery .close_button').click(function () {

                $('#product_gallery_popup').removeClass('active');
                $('body').removeClass('lock');

                $('#product_gallery_popup .popup_additional_images a').removeClass('active');
                $('#product_gallery_popup .popup_additional_images a:first-child').trigger('click');
            });

            //In gallery
            $('#product_gallery_popup .popup_additional_images a').click(function (e) {
                e.preventDefault();
                $('#product_gallery_popup .popup_additional_images a').removeClass('active');
                $(this).addClass('active')
                var target = $('#product_gallery_popup .popup_big_image img');
                var image = $(this).attr('href');

                $(target).attr('src', image);
            });
        }


        //Start slick slider in mobile devices
        if ($(window).width() <= 991 ){
            /*$('.product__wrapper .images_container .add_images').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                speed: 500,
                autoplay: false,
                autoplaySpeed: 2000,
                dots: true,
                prevArrow: '<span class="icon slick-prev-arrow icon-arrow_r"></span>',
                nextArrow: '<span class="icon slick-next-arrow icon-arrow_r"></span>',
            });*/


            const swiper = new Swiper('.swiper', {
                slidesPerView: 1,
                zoom: {
                    maxRatio: 3,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },

                grabCursor: true,
            });

        }
    }
}




function sizesSidebar(){
    $('.size_guide').click(function(e){
        e.preventDefault();
        $('#sidebar-overlay').addClass('active');
        $('#sizes-sidebar').addClass('active');

    });
    //Close sidebar
    $('#sizes-sidebar .close_sidebar').click(function(){
        $('body').removeClass('lock');
        $('#sidebar-overlay').removeClass('active');
        $(this).parents('#sizes-sidebar').removeClass('active');
    });
}

function locationSidebar(){
    $('a.location-sidebar').click(function(e){
        forceCloseSidebars();

        e.preventDefault();
        $('#sidebar-overlay').addClass('active');
        $('#location-sidebar').addClass('active');

    });
    //Close sidebar
    $('#location-sidebar .close_sidebar').click(function(){
        $('body').removeClass('lock');
        $('#sidebar-overlay').removeClass('active');
        $(this).parents('#location-sidebar').removeClass('active');
    });
}


function scrollToMobileProductDescription(){
    $("html").on("click","a.toDescAnchor", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 1500);
    });
}


function locationInSelect(){
    console.log('fagsInSelect');
    $("#countries_select111").select2({
        dropdownCssClass: "location_dropdown",
        templateResult: function (idioma) {
            var $span = $("<span><img src='img/countries/" + idioma.id + ".png'/> " + idioma.text + "</span>");
            return $span;
        },
        templateSelection: function (idioma) {
            var $span = $("<span><img src='img/countries/" + idioma.id + ".png'/> " + idioma.text + "</span>");
            return $span;
        }
    });
}


function stickyProductCardSide(){

    setTimeout(function() {
       console.log('stick');

        var ab = $('.announcement-bar__container').height();
        var hh = $('#header').height();
        var th = ab + hh;

        console.log(th);

        var sidebar = new StickySidebar('#product_right_side', {
            topSpacing: 120,
            bottomSpacing: 0,
            containerSelector: '.product__wrapper',
            innerWrapperSelector: '.sidebar__inner',
            resizeSensor: true,
        });

    }, 1000);



}


function completeTheLookSlider(){
    $('.three-slider').on('init', function(event, slick, currentSlide, nextSlide){
        console.log('init three slider');
        //stickyProductCardSide();
    });


    $('.three-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    prevArrow: '<span class="icon slick-prev-arrow icon-arrow_r"></span>',
                    nextArrow: '<span class="icon slick-next-arrow icon-arrow_r"></span>',
                }
            },
        ]
    });


}
function accordionProductCard(){
    $('.attributes .item .heading').click(function(){
        var item = $(this).parents('.item');
        var content = item.find('.content').slideToggle();
        if(item.hasClass('opened')){
            item.removeClass('opened');
        }else{
            item.addClass('opened');
        }

    });
}


$(document).ready(function(){

    $('.custom_select select').select2();

    locationInSelect();
    $('.custom_select_location select').select2({
        dropdownCssClass: "location_dropdown",
        templateResult: function (idioma) {
            var $span = $("<span><img src='img/location/" + idioma.id + ".png'/> " + idioma.text + "</span>");
            return $span;
        },
        templateSelection: function (idioma) {
            var $span = $("<span><img src='img/location/" + idioma.id + ".png'/> " + idioma.text + "</span>");
            return $span;
        }
    });

    closeCookiePopup();

    locationSidebar();
    authSidebar();
    signUpSidebar();
    resetPassSidebar();

    closeSidebarsByOverlayClick();



    collapseMobileFooterMemu();
    headerMegaMenuOpen();
    cartSidebar();
    leftSidebar();

    mobileFilter();

    productCardGallery();
    accordionProductCard();
    sizesSidebar();
    scrollToMobileProductDescription();
    completeTheLookSlider();

    if($('body').hasClass('product-page') && $(window).width() > 991){
        //stickyProductCardSide();
    }

});


// Close sideBars
$(document).mouseup( function(e){ // событие клика по веб-документу
    /*const leftSideBar = $("#left-sidebar");
    const cartSideBar = $('#cart-sidebar');
    const signInSideBar = $('#signin-sidebar');

    if ( !leftSideBar.is(e.target) && leftSideBar.has(e.target).length === 0 ) {
        leftSideBar.removeClass('open');
        $('body').removeClass('lock');
        $('#sidebar-overlay').removeClass('active');
    }
    if ( !cartSideBar.is(e.target) && cartSideBar.has(e.target).length === 0 ) {
        cartSideBar.removeClass('active');
    }
    if ( !signInSideBar.is(e.target) && signInSideBar.has(e.target).length === 0 ) {
        signInSideBar.removeClass('active');
    }
    */
});


document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        forceCloseSidebars();
    }
});
