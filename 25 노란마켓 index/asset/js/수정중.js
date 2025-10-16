
$(document).ready(function () {

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
        //     clickable: true,
        // },
        slidesPerView: 1.5,
        spaceBetween: 40,

        centeredSlides: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                // centeredSlides: true,
            },

            1023: {
                slidesPerView: 2.5,
                // centeredSlides: true,
            },
            768: {
                slidesPerView: 2,
                // centeredSlides: true,
                spaceBetween: 20,
            },
        },
    });

    //  var swiper02 = new Swiper(".mySwiper2", {
    //   slidesPerView: 4,
    //   spaceBetween: 40,
    //   centeredSlides: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });


    $(window).on('scroll', function () {
        //---sec02 등장 효과

        let scroll02 = $(window).scrollTop() + $(window).height();
        // 섹션의 위쪽 위치
        let sec02Pos = $('.sec03').offset().top;

        // .sec02의 % 지점쯤 화면에 들어오면 실행
        if (scroll02 > sec02Pos + ($('.sec03').height() * 0.6)) {
            $('.tab-contants').addClass('animate__animated animate__fadeInUp');
            $(".tab-contants").addClass("active");
        }

        //------sec03 등장 효과

        let scroll03 = $(window).scrollTop() + $(window).height();
        let sec03Pos = $('.sec03').offset().top;

        if (scroll03 > sec03Pos + ($('.sec03').height() * 0.1)) {
            $('.tab-contants').addClass('animate__animated animate__fadeInUp');
            $(".tab-contants").addClass("active");
        }

        // --------sec04등장

        let scroll04 = $(window).scrollTop() + $(window).height();
        // 섹션의 위쪽 위치
        let sec04Pos = $('.sec04').offset().top;

        // .sec03의 20% 지점쯤 화면에 들어오면 실행
        if (scroll04 > sec04Pos + ($('.sec04').height() * 0.3)) {
            $('.sec04-card-wrap').addClass('animate__animated animate__slideInRight');
            $(".sec04-card-wrap").addClass("active2");
        }
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
        slidesPerView: 1.6,
        spaceBetween: 40,
        direction: 'horizontal',
        loop: true,

        breakpoints: {
            1200: {
                slidesPerView: 4,

            },

            1023: {
                slidesPerView: 3,

            },
            768: {
                slidesPerView: 2,
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
            1161: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1023: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            787: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
    });


});














// ---------------------------------------------
$(document).ready(function () {

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
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1.2,
        spaceBetween: 40,
        // loop: true,
        // centeredSlides: true,
        breakpoints: {
            1200: {
                slidesPerView: 4,
                // centeredSlides: true,
            },

            1023: {
                slidesPerView: 3,
                // centeredSlides: true,
            },
            768: {
                slidesPerView: 2,
                // centeredSlides: true,
                spaceBetween: 20,
            }
        },
    });

    //  var swiper02 = new Swiper(".mySwiper2", {
    //   slidesPerView: 4,
    //   spaceBetween: 40,
    //   centeredSlides: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });

    //------sec03 스크롤 애니메이션 효과

    $(window).on('scroll', function () {
        // 화면의 현재 스크롤 위치 + 브라우저 높이
        let scrollPos = $(window).scrollTop() + $(window).height();
        // 섹션의 위쪽 위치
        let sec03Pos = $('.sec03').offset().top;

        // .sec03의 20% 지점쯤 화면에 들어오면 실행
        if (scrollPos > sec03Pos + ($('.sec03').height() * 0.2)) {
            $('.sec03').addClass('animate__animated animate__fadeInUp');
            $(".sec03").addClass("active");
        }

        // --------sec04등장

        let scroll04 = $(window).scrollTop() + $(window).height();
        // 섹션의 위쪽 위치
        let sec04Pos = $('.sec04').offset().top;

        // .sec03의 20% 지점쯤 화면에 들어오면 실행
        if (scroll04 > sec04Pos + ($('.sec04').height() * 0.3)) {
            $('.sec04').addClass('animate__animated animate__slideInLeft');
            $(".sec04").addClass("active2");
        }
    });

    //----------sec03 버튼 클릭 효과

    $(".sec03-tab li").on("click", function () {
        let idx = $(this).index();

        $(".sec03-tab li").removeClass("on");
        $(this).addClass("on");

        $(".tab-contants > div").hide();
        $(".tab-contants > div").eq(idx).show();

    });

    //-------------------------sec04 슬라이드 효과

    let swiper04 = new Swiper(".mySwiper4", {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1.6,
        spaceBetween: 40,
        direction: 'horizontal',
        loop: true,

        breakpoints: {
            1200: {
                slidesPerView: 4,

            },

            1023: {
                slidesPerView: 3,

            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        },
    });

    // let swiper3 = new Swiper('.swiper3', {

    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     slidesPerView: 3,
    //     loopedSlides: 6,
    //     loopAdditionalSlides: 3,
    //     centeredSlides: true,
    //     direction: 'horizontal',
    //     centeredSlides: false,
    //     loop: true,

    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2
    //         },
    //     },
    // });


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
            1161: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1023: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            787: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        },
    });


});





