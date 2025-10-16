// ------------------헤더영역

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


    let swiper2 = new Swiper(".swiper2", {
        wrapperClass: "swiper-wrapper2",
        slideClass: "swiper-slide2",
        slidesPerView: 3,
        centeredSlides: true,
        watchSlidesProgress: true,
        breakpoints: {

            1023: {
                slidesPerView: 2.5,
                centeredSlides: true,
            },
            0: {
                slidesPerView: 1,
                centeredSlides: true,
            }
        },
    });

    swiper2.on("slideChange", function () {
        let $progressbar = $(".swiper-pagination2-fill");
        let totalSlides = swiper2.slides.length;
        let currentIndex = swiper2.activeIndex;


        let barWidth = 200;
        let fillWidth = 100;
        let maxMove = barWidth - fillWidth;

        // 슬라이드 개수 기준으로 등분 이동
        let moveX = (currentIndex / (totalSlides - 1)) * maxMove;

        $progressbar.stop().animate({ left: moveX + "px" }, 200);

    });

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
    let swiper03 = new Swiper(".swiper3", {
        slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // let swiper3 = new Swiper('.swiper3', {
    //     wrapperClass: 'swiper-wrapper3',
    //     slideClass: 'swiper-slide3',
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


    let swiper4 = new Swiper(".swiper4", {
        wrapperClass: "swiper-wrapper4",
        slideClass: "swiper-slide4",
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



