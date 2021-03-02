!function (e) {
    "use strict";


    $(document).ready(function () {
        function roundTextContent() {

            let degreeToRadian = (angle) => {
                return angle * (Math.PI / 180);
            };

            let radius = 40;
            let diameter = radius * 2;
            let circle = document.querySelector(".circular-text");
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

        roundTextContent();

    });
}(jQuery);