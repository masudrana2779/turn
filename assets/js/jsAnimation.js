document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
        .from('.tagTop0 span', 4, {

            width: 0,
            ease: Power3.easeInOut
        })
        .from('.l1', 9, {
                width: 0,
            ease: Power3.easeInOut
        }, '-=9')
        .from('.l2', 7, {
            width: 0,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.l3', 7, {
            width: 0,
            ease: Power3.easeInOut
        }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.banner_1',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
        .setTween(timeline)
        .setPin('.banner_1')
        .addTo(controller);
})