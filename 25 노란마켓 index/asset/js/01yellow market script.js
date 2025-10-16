
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
            el: ".swiper-pagination",
        },
        loop: true,
        autoplay: true
    });


    // ------------sec02 슬라이드 효과

    let swiper02 = new Swiper(".mySwiper2", {
        // pagination: {
        //     el: ".swiper-pagination",
        // },
        slidesPerView: 1.5,
        spaceBetween: 40,

        centeredSlides: true,
        breakpoints: {
            // 1200: {
            //     slidesPerView: 3,

            // },

            1023: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2.3,
                // spaceBetween: 20,
            },
            319: {
                slidesPerView: 2
            },

        },
    });

    $(window).on('scroll', function () {


        //------sec03 등장 효과

        let scroll03 = $(window).scrollTop() + $(window).height();
        let sec03Pos = $('.sec03').offset().top;

        if (scroll03 > sec03Pos + ($('.sec03').height() * 0.25)) {
            $('.tab-contants').addClass('animate__animated animate__fadeInUp');
            $(".tab-contants").addClass("active");
        }

        // --------sec04등장

        // let scroll04 = $(window).scrollTop() + $(window).height();
        // // 섹션의 위쪽 위치
        // let sec04Pos = $('.sec04').offset().top;

        // // .sec03의 20% 지점쯤 화면에 들어오면 실행
        // if (scroll04 > sec04Pos + ($('.sec04').height() * 0.3)) {
        //     $('.sec04-card-wrap').addClass('animate__animated animate__slideInRight');
        //     $(".sec04-card-wrap").addClass("active2");
        // }
    });

    //----------sec03 버튼 클릭 효과

    $(".sec03-tab li").on("click", function () {
        let idx = $(this).index();

        $(".sec03-tab li").removeClass("on");
        $(this).addClass("on");

        $(".tab-contants > div").hide();
        $(".tab-contants > div").eq(idx).show();

    });

    //------------sec04 슬라이드 효과

    let swiper04 = new Swiper(".mySwiper4", {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 40,
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        breakpoints: {
            1200: {
                slidesPerView: 4.4,

            },

            1023: {
                slidesPerView: 3.5,

            },
            479: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            0: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            }
        },
    });

    //    ----------------SEC04 버튼
    $(".swiper-button-next, .swiper-button-prev")
        .on("click", function () {
            let btn04 = $(this);

            btn04.css("color", "#ffc800");
            setTimeout(function () {
                $(btn04).css("color", "#717071");
            }, 100);
        });


    // ----------------sec05 슬라이드 효과

    let swiper05 = new Swiper(".mySwiper5", {
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        slidesPerView: 5,
        spaceBetween: 10,
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
            1161: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1023: {
                slidesPerView: 2.8,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
    });


});


