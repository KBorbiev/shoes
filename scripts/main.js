'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const $shoes_slider = document.querySelector(".shoes-slider") 

    if($shoes_slider) {
        $(document).ready(function(){
            $(".shoes-slider").owlCarousel({
                loop: true,
                items: 1,
                itemElement: "span",
                dotClass: "slide-dot",
                dotsClass: "slide-nav"
                // nav: true,
            });
        });
        const count_item = document.querySelectorAll('.form-select__item').length
        $(".js-size-slide").owlCarousel({
            nav: false,
            dots: false,
            responsive:{
                319:{
                    items: 4,
                },
                479:{
                    items: 5,
                },
                600:{
                    items: count_item -2,
                }
            }
            
        });
    } else {
        console.log("error: slider");
    }

    
    const $menu = document.querySelector('.js-mobile-panel-open')
    if ($menu) {
        // jQuery - Мобильное меню
        var mobileMenu = (function() {
            var $trigger = $('.mobile-menu__arrow');
            var animationSpeed = 200;

            // Mobile menu
            $trigger.on('click', function() {
                toggleMenu($(this));
            });

            function toggleMenu(el) {
                var li = el.closest('li');

                el.toggleClass('is-active');
                li.toggleClass('is-active');

                li.children('ul').slideToggle(animationSpeed, function() {
                    li.children('ul').toggleClass('is-opened');
                });
            }
        })();

        // Открытье и закрытье mobile-menu
        (function(){

            var $mobile_open = document.querySelector('.js-mobile-panel-open');
            var $mobile_close = document.querySelector('.js-mobile-panel-close');
            var $mobile_pane = document.querySelector('.js-mobile-panel');
            var $base = document.documentElement;

            $mobile_open.addEventListener('click', openPanel);
            $mobile_close.addEventListener('click', closePanel);

            function openPanel(){
                $mobile_pane.classList.add('is-opened');
                $base.style.overflow = 'hidden';
            };
            function closePanel(){
                $mobile_pane.classList.remove('is-opened');
                $base.style.overflow = '';
            };
        })();    
    } else {
        console.log("error: menu");        
    }
    
});

