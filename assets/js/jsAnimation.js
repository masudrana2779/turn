document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
        .to('.banner_1 .scrollDownAnimationWrap', 4, {
            autoAlpha: 0,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.tagTop_1', 4, {
            width: 0,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.l1_1', 4, {
            height: 0, autoAlpha: 0,

            ease: Power3.easeInOut
        })
        .from('.l1_2', 4, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.l1_3', 4, {
            autoAlpha: 0,
            y: 100,
            ease: Power3.easeInOut
        })
        .from('.btn1', 4, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.btn2', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.btext_1', 40, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        }, '-=40')
        .from('.btext_2', 30, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.btext_3', 20, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.btext_4', 15, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.roundShapeImg img', 100, {
            rotation: 360,
            ease: Power3.easeInOut
        }, '-=100')


    let scene = new ScrollMagic.Scene({
        triggerElement: '.banner_1',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
        .setTween(timeline)
        .setPin('.banner_1')
        .addTo(controller);

    let timeline2 = new TimelineMax();
    timeline2
        .from('.banner_2 .scrollDownAnimationWrap', 5, {
            autoAlpha: 0,
            ease: Power3.easeInOut
        })
        .to('.tagTop_2', 5, {
            width: 0,
            ease: Power3.easeInOut
        })
        .to('.Text_2', 4, {
            autoAlpha: 0,
            y: -50,
            ease: Power3.easeInOut
        })
        .to('.portfolioAccordion', 5, {
            autoAlpha: 0,
            y: -50,
            ease: Power3.easeInOut
        })

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.banner_2',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
        .setTween(timeline2)
        .setPin('.banner_2')
        .addTo(controller);



    let timeline3 = new TimelineMax();
    timeline3
        .from('.banner_3 .scrollDownAnimationWrap', 5, {
            autoAlpha: 0,
            ease: Power3.easeInOut
        })
        .to('.tagTop_3', 4, {
            width: 0,
            ease: Power3.easeInOut
        })
        .to('.Text_3', 4, {
            y: -50,
            autoAlpha: 0,
            ease: Power3.easeInOut
        })
        .to('.clientLogoWrap', 5, {
            autoAlpha: 0,
            y: -50,
            ease: Power3.easeInOut
        })
    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.banner_3',
        duration: '300%',
        triggerHook: 0,
        offset: '0'
    })
        .setTween(timeline3)
        .setPin('.banner_3')
        .addTo(controller);

    let timeline4 = new TimelineMax();
    timeline4
        .from('.banner_4 .scrollDownAnimationWrap', 5, {
            autoAlpha: 0,
            ease: Power3.easeInOut
        })
        .to('.tagTop_4', 4, {
            width: 0,
            ease: Power3.easeInOut
        }, '-=4')
        .to('.Text_4', 4, {
            y: -50,
            autoAlpha: 0,
            ease: Power3.easeInOut
        })
        .to('.tTopPara', 4, {
            autoAlpha: 0,
            y: -50,
            ease: Power3.easeInOut
        })
        .to('.TeamHeading', 4, {
            autoAlpha: 0,
            y: -50,
            ease: Power3.easeInOut
        })
        .to('.teamRow_1', 4, {
            autoAlpha: 0,
            y: -50,
            ease: Power3.easeInOut
        })
        .to('.teamRow_2', 4, {
            autoAlpha: 0,
            y: -50,
            ease: Power3.easeInOut
        })
        .to('.teamRow_3', 4, {
            autoAlpha: 0,
            y: -50,
            ease: Power3.easeInOut
        })
    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.banner_4',
        duration: '300%',
        triggerHook: 0,
        offset: '0'
    })
        .setTween(timeline4)
        .setPin('.banner_4')
        .addTo(controller);
})