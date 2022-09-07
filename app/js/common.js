$('.objects-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$('.btn-burger').on('click', function () {
   $('.navbar').fadeToggle();
});


$('.navbar-close').on('click', function (e) {
    e.preventDefault();
    $('.navbar').fadeOut();
});



