!function (e) {
    "use strict";


    $(document).ready(function () {

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
        roundTextContent('.circular-text2');
        roundTextContent('.circular-text3');
        roundTextContent('.circular-text4');

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

        function allPagepiling() {
            $('#pagepiling').pagepiling({
                menu: '#menu',
                anchors: ['page1', 'page2', 'page3', 'page4'],
                navigation: {
                    'textColor': '#f2f2f2',
                    'bulletsColor': '#ccc',
                    'position': 'right',
                }
            });
        }

        allPagepiling();



        $('.allBody').hide();
        $('.banner_1 .scrollDownAnimationOuter').hide();
        $('body').css({
            overflow: 'hidden',
            paddingRight: '17px'
        });

        function addClassbanner_1() {
            $('.allBody').fadeIn(1500);
            $('.banner_1 .scrollDownAnimationOuter').fadeIn(2000);
            $('body').removeAttr("style");
        }

        setTimeout(function () {
            addClassbanner_1();
        }, 4000);






    });
}(jQuery);