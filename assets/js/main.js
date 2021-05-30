!function (e) {
    "use strict";


    $(document).ready(function () {
        if ($('.circular-text1').length > 0) {
            function roundTextContent(selector) {

                let degreeToRadian = (angle) => {
                    return angle * (Math.PI / 180);
                };

                let radius = 40;
                let diameter = radius * 2;
                let circle = document.querySelector(selector);
                circle.style.width = `${diameter}px`;
                circle.style.height = `${diameter}px`;

                let text = circle.innerText;
                let characters = text.split("");
                circle.innerText = null;

                let startAngle = -90;
                let endAngle = 270;
                let angleRange = endAngle - startAngle;

                let deltaAngle = angleRange / characters.length;
                let currentAngle = startAngle;

                characters.forEach((char, index) => {
                    let charElement = document.createElement("span");
                    charElement.innerText = char;
                    let xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
                    let yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

                    let transform = `translate(${xPos}px, ${yPos}px)`;
                    let rotate = `rotate(${index * deltaAngle}deg)`;
                    charElement.style.transform = `${transform} ${rotate}`;

                    currentAngle += deltaAngle;
                    circle.appendChild(charElement);
                });
            }
            roundTextContent('.circular-text1');
        }
    });

    $(document).ready(function () {

        // headerFixed
        function headerFixed() {
            var $scTop = $(window).scrollTop();
            if ($scTop > 0) {
                $(".header").addClass("fixdHeader");
            } else {
                $(".header").removeClass("fixdHeader");
            }
        }

        headerFixed();
        $(window).scroll(function (){
            headerFixed();
        });


        if ($('.lightbox').length > 0) {

            /*---------LIGHT-BOX js-----------*/

            function lightBoxImages() {

                var selectorG = '.lightbox';
                if ($(selectorG).length) {
                    var instanceG = $(selectorG).imageLightbox({
                        quitOnDocClick: false,
                        button: true,
                        activity: true,
                        overlay: true,
                        arrows: true,
                        preloadNext: true,
                    });
                }
            }

            lightBoxImages();
        }

        if ($('.serviceImgWrap').length > 0) {

            /*===========Portfolio isotope js===========*/
            function filTeTiSotOp() {
                var $grid = $('.serviceImgWrap');
                if ($grid.length) {
                    $grid.imagesLoaded(function () {
                        $grid.isotope({
                            itemSelector: '.serviseSingleItem',
                            percentPosition: true,
                            layoutMode: 'masonry',
                            filter: "*",
                            animationOptions: {
                                duration: 1000
                            },
                            stagger: 0,
                            transitionDuration: '0.9s',
                            masonry: {
                                // use outer width of grid-sizer for columnWidth
                                columnWidth: 1
                            }
                        });
                        $(".filter_menu li").on('click', function () {
                            $(".filter_menu li").removeClass("active");
                            $(this).addClass("active");

                            var selector = $(this).attr("data-filter");
                            $grid.isotope({
                                filter: selector,
                                animationOptions: {
                                    animationDuration: 750,
                                    easing: 'linear',
                                    queue: false,
                                }
                            });
                            return false;
                        });
                    });
                }
            }

            filTeTiSotOp();

        }



        var windowWidth = $(window).width();
        if (windowWidth > 767) {
            if ($('#pagepiling').length > 0) {

                // page scrolling
                function allPagepiling() {
                    $('#pagepiling').pagepiling({
                        menu: '#menu',
                        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
                        navigation: {
                            'textColor': '#f2f2f2',
                            'bulletsColor': '#ccc',
                            'position': 'right',
                        }
                    });
                }
                allPagepiling();


                // tilt js
                if ($('.resetTilt').length > 0) {
                    $('.resetTilt').tilt({
                        reset: false
                    })
                    $('.glareTilt').tilt({
                        glare: true,
                        maxGlare: .5
                    })

                    $('.ZoomTilt').tilt({
                        scale: 1.2
                    })
                }


                $('.allBody').hide();
                $('.banner_1 .scrollDownAnimationOuter').hide();
                $('body').css({
                    overflow: 'hidden',
                    paddingRight: '17px'
                }).addClass("pp-viewing-page1");

                function addClassbanner_1() {
                    $('.allBody').fadeIn(1500);
                    $('.banner_1 .scrollDownAnimationOuter').fadeIn(2000);
                    $('body').removeAttr("style");
                }

                setTimeout(function () {
                    addClassbanner_1();
                }, 4000);
            }
        }

        if ($('.carouselItem').length > 0) {
            $(".teamSingleItemWrap").owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                dots: false,
            });
        }


    });
}(jQuery);