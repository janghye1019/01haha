
$(document).ready(function () {
    //    ----------헤더영역
    let $btn1 = $(".hambuger-btn");
    let $kvMenu = $(".header-nav");
    let $removeBtn1 = $(".close-btn");

    $btn1.on("click", function () {
        $kvMenu.addClass("on");
        $btn1.addClass("hide");
        $removeBtn1.addClass("show");
    });

    $removeBtn1.on("click", function () {
        $kvMenu.removeClass("on");
        $btn1.removeClass("hide");
        $removeBtn1.removeClass("show");
    });


    // -----------kv 슬라이드 효과

    let swiper = new Swiper(".visual-swiper", {
        pagination: {
            el: ".visual-swiper .swiper-pagination",
        },
        loop: true,
        autoplay: true
    });



    $(window).on('scroll', function () {

        //------sec02 등장 효과

        $('.sec02-why').each(function () {
            let $this = $(this);

            let bottom_of_object = $this.offset().top + $this.outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object / 2) {
                $this.addClass('active');
                $this.stop().animate({ 'opacity': '1' }, 250);
            }
        });

        //------sec03 등장 효과
        let scroll03 = $(window).scrollTop() + $(window).height();
        let sec03Pos = $('.sec03').offset().top;

        if (scroll03 > sec03Pos + ($('.sec03').height() * 0.2)) {
            $(".sec03-title-wrap").addClass("animate__animated animate__fadeInUp active");
        } else {
            $(".sec03-title-wrap").removeClass("animate__animated animate__fadeInUp active");
        }
        if (scroll03 > sec03Pos + ($('.sec03').height() * 0.3)) {
            $(".tab-contants").addClass("animate__animated animate__fadeInUp active");
        } else {
            $(".tab-contants").removeClass("animate__animated animate__fadeInUp active");
        }
        // --------sec04등장

        let scroll04 = $(window).scrollTop() + $(window).height();

        let sec04Pos = $('.sec04').offset().top;
        if (scroll04 > sec04Pos + ($('.sec04').height() * 0.25)) {
            $(".sec04-card-wrap").addClass("animate__animated animate__slideInRight active");
        } else {
            $(".sec04-card-wrap").removeClass("animate__animated animate__slideInRight active");
        }
        // -----sec06 등장효과
        let scroll06 = $(window).scrollTop() + $(window).height();
        let sec06Pos = $(".sec06").offset().top;

        if (scroll06 > sec06Pos + ($(".sec06").height() * 0.15)) {
            $(".sec06-img").addClass("animate__animated animate__fadeInUp active");
        } else {
            $(".sec06-img").removeClass("animate__animated animate__fadeInUp active");
        }
        if (scroll06 > sec06Pos + ($(".sec06").height() * 0.3)) {
            $(".sec06-box").stop().animate({ 'opacity': '1' }, 250);
        } else {
            $(".sec06-box").stop().animate({ 'opacity': '0' }, 250);
        }

    });

    //---------sec02 슬라이드효과
    let swiper02 = new Swiper(".mySwiper2", {

        slidesPerView: 1.5,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: true,
        loop: true,
        loopedSlides: 2,
        breakpoints: {

            1023: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2.3,
                spaceBetween: 20,
            },
            560: {
                slidesPerView: 2
            },
        },
    });

    //----------sec03 버튼 클릭 효과
    $(".sec03-tab li").on("click", function () {
        let idx = $(this).index();

        $(".sec03-tab li").removeClass("on");
        $(this).addClass("on");

        $(".tab-contants > div").hide();
        $(".tab-contants > div").eq(idx).show();
    });

    //--------sec03 모바일 슬라이드 효과
    let swiper03 = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        grid: {
            rows: 2,
        },
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 30,
                grid: {
                    rows: 2,
                },
            },
        },
    });

    //------------sec04 슬라이드 효과
    let swiper04 = new Swiper(".mySwiper4", {
        pagination: {
            el: ".mySwiper4 .swiper-pagination",
        },
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            1159: {
                slidesPerView: 4.3,
            },
            1023: {
                slidesPerView: 3.5,
            },
            760: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            600: {
                slidesPerView: 2.5,
            },
            550: {
                slidesPerView: 1.7,
            },
            371: {
                slidesPerView: 1.6,
            },
            0: {
                slidesPerView: 1.4,
            },
        },
    });

    // ----------------sec05 슬라이드 효과
    let swiper05 = new Swiper(".mySwiper5", {
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        speed: 2000,
        loopAdditionalSlides: 2,

        observer: true,
        observeParents: true,

        mousewheel: false,
        simulateTouch: false,
        pauseOnMouseEnter: false,
        allowTouchMove: false,
        grabCursor: false,

        //이하가 아니라 이상일때
        breakpoints: {
            1540: {
                slidesPerView: 4.6,
            },
            1270: {
                slidesPerView: 3.6,
            },
            1161: {
                slidesPerView: 3,
            },
            1023: {
                slidesPerView: 2.6,
            },
            769: {
                slidesPerView: 2.0,
            },
            750: {
                slidesPerView: 2.4,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 1.4,
            },
        },
    });

});

