'use strict';

document.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function(){
        $(".shoes-slider").owlCarousel({
            loop: true,
            items: 1,
            dotClass: "slide-dot",
            dotsClass: "slide-nav"
            // nav: true,
        });
    });
});
