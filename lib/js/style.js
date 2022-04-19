$(window).scroll(function() {
    // var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > 400) {
        $('.header-main').addClass('fixed');
    } else {
        $('.header-main').removeClass('fixed');
    }
});
/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});





$(document).ready(function() {

    $(".menu-toggle").click(function() {
        $(".wrapper").addClass("visible");
    });
    $(".close-btn").click(function() {
        $(".wrapper").removeClass("visible");
    });


    $(".menu-mobile__list-item .dropdown-btn").click(function() {
        $(this).toggleClass("opened");
        $(this).parent(".menu-mobile__list-item").children(".sub-menu").toggleClass("opened");
    });

    $('.accomodation-slide').owlCarousel({
        loop: true,
        margin: 30,
        center: true,
        items: 1.5,
        nav: true,
        navText: ['<i class="fa-light fa-arrow-left"></i>', '<i class="fa-light fa-arrow-right"></i>'],
        dots: false,
        statePadding: 30,
        addClassActive: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        responsive: {
            0: {
                items: 1
            },
            540: {
                items: 1.5
            }



        }

    })

    $('.testi-slide').owlCarousel({
        loop: true,
        // margin: 30,
        // center: true,
        items: 1,
        nav: false,

        dots: true,
        statePadding: 30,
        addClassActive: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     540: {
        //         items: 2
        //     },

        //     768: {
        //         items: 3
        //     },
        //     991: {
        //         item: 5
        //     }

        // }

    })



});