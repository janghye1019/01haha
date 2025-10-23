
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

