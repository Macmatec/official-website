let tl = gsap.timeline({
    defaults: {
        ease: "power4.inOut",
        duration: 0.5
    }
});

let dots = CSSRulePlugin.getRule(".card:before");


tl.to('.hero-tag', {
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    y: 0,
    duration: 2.2
})
    .to('.hero-headline', {
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 2.2
    }, "-=2")
    .to('.hero-mouse', {
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        opacity: 1,
        y: 0,
        duration: 1.5
    }, "-=1")
    .from('.card', {
        scaleY: 0,
        stagger: .2
    }, "-=1")
    .from(dots, {
        stagger: 1,
        opacity: 0,
        transform: 'translateY(100px)'
    }, "-=1")
    .to('.card-title, .card-desc', {
        stagger: .1,
        duration: 1.2,
        opacity: 1,
        y: 0
    }, "-=1")
    .to('footer', {
        opacity: 1
    }, "-=2")

function scrollToEnd() {
    console.log('scrolling to end');

    // scroll to the end of the page
    window.scrollTo({
        top: document.body.scrollHeight - window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
}