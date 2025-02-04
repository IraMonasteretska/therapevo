$(document).ready(function () {
    // main sldier
    var swiper = new Swiper(".heroslider", {
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
                let activeSlide = this.slides[this.activeIndex];
                let h1 = document.querySelector(".herosection__info");

                if (activeSlide.classList.contains("white")) {
                    h1.classList.add("white-color");
                } else {
                    h1.classList.remove("white-color");
                }
            },
        },
    });

    // header menu
    $('.submenu-item').click(function () {
        $('.submenu-item').not($(this)).removeClass('active');
        $('.submenu-item').not($(this)).find('.megamenu, .sublist').removeClass('show');

        $(this).toggleClass('active');
        $(this).find('.megamenu').toggleClass('show');

        $(this).find('.sublist').toggleClass('show');

    })

    document.querySelectorAll('.scene').forEach(scene => {
        new Parallax(scene, {
            relativeInput: true
        });
    });

    // testimonials slider
    var swiper = new Swiper(".testimonials__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
        },
    });

    // faq
    $('.faqrow__header').click(function () {
        $('.faqrow').not($(this).parent()).removeClass('active');
        $('.faqrow__body').not($(this).next('.faqrow__body')).slideUp();

        $(this).parent().toggleClass('active');
        $(this).next('.faqrow__body').slideToggle();
    });

    // burger menu
    if ($('.burger2').length) {
        (function () {
            var burger2;
            burger2 = document.querySelector(".burger2");
            burger2.addEventListener("click", function () {
                return burger2.classList.toggle("on");
            });

        }).call(this);
    }

    $('.burger').click(function () {
        $('.adaptmenu').toggleClass('show');
        $('.header__bottsect').toggleClass('open');
    })

    $('.burger').click(function () {
        $('body').toggleClass('hidden');
        $('.mobilemenu').toggleClass('show');
        window.scrollTo(0, 0);
    })

    //   Space containers
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    $('.spaceleft').css('padding-left', paddingContainer);
    $('.spaceright').css('padding-right', paddingContainer);


    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        $('.spaceleft').css('padding-left', paddingContainer);
        $('.spaceright').css('padding-right', paddingContainer);

    });

    // meet slider (about page)
    var swiper = new Swiper(".meetslider", {
        // slidesPerView: 3,
        // spaceBetween: 99,
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            576: {
                spaceBetween: 60,
                slidesPerView: 2,
            },
            992: {
                spaceBetween: 60,
                slidesPerView: 3,
            },

            1300: {
                spaceBetween: 99,
                slidesPerView: 3,
            },
        },
    });





})