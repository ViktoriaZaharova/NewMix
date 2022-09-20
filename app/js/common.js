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


$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});

$(".js-tab-trigger").click(function (e) {
    e.preventDefault();
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="'+ id +'"]');

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});


