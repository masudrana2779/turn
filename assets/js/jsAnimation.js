document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
        .to('.scrollDownAnimationWrap', 40, {
            autoAlpha: 0,
            ease: Power3.easeInOut
        }, '-=40')
        .from('.tagTop_1', 40, {
            width: 0,
            ease: Power3.easeInOut
        }, '-=40')
        .from('.l1_1', 20, {
            height: 0, autoAlpha: 0,

            ease: Power3.easeInOut
        })
        .from('.l1_2', 20, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.l1_3', 20, {
            autoAlpha: 0,
            y: 100,
            ease: Power3.easeInOut
        })
        .from('.btn1', 15, {
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
        .from('.tagTop_2', 4, {
            width: 0,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.l4_1', 20, {
            height: 0, autoAlpha: 0,
            ease: Power3.easeInOut
        })
        .from('.l5_1', 20, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.btn_3', 15, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.btn_4', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })

        .from('.circleTextWrap_2', 5, {
            autoAlpha: 0,
            y: -50,
            ease: Power3.easeInOut
        })
        .from('.portfolioAccordion_1', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.portfolioAccordion_2', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.portfolioAccordion_3', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.portfolioAccordion_4', 5, {
            autoAlpha: 0,
            y: 50,
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
        .from('.tagTop_3', 4, {
            width: 0,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.l6_1', 20, {
            height: 0, autoAlpha: 0,
            ease: Power3.easeInOut
        })
        .from('.L7_1', 20, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.btn_6', 15, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.btn_7', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.circleTextWrap_3', 5, {
            autoAlpha: 0,
            y: -50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_1', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_2', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_3', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_4', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_5', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_6', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_7', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_8', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_9', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_10', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_11', 5, {
            autoAlpha: 0,
            y: 50,
            ease: Power3.easeInOut
        })
        .from('.logoItem_12', 5, {
            autoAlpha: 0,
            y: 50,
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
})