
const prevIcon = '<img src="/images/left-arrow.png" alt="left">';
const nextIcon = '<img src="/images/right-arrow.png" alt="right">';

$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        items: 1,
        loop:true,
        nav: true,
        navText: [
            prevIcon,
            nextIcon
        ]
    });
});