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
        $(this).toggleClass('active');
        $(this).find('.megamenu').toggleClass('show');

        $(this).find('.sublist').toggleClass('show');

    })

    document.querySelectorAll('.scene').forEach(scene => {
        new Parallax(scene, {
            relativeInput: true
        });
    });








})