'use strict';

document.addEventListener('DOMContentLoaded', function() {
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
    $(document).ready(function(){
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
    });
});

