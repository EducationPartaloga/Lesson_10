window.addEventListener("load", (event) => {
    let tl = gsap.timeline();
    
    let width = window.innerWidth;
    tl.fromTo("._m", {
        x: '-100%',
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
    }).fromTo("._n", {
        y: '-100%',
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
    }).fromTo("._t", {
        y: '100%',
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
    }).fromTo("._nn", {
        x: '100%',
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
    }).to("#fade", {
        opacity: 0,
        duration: 2,
        display:"none"
    });

    gsap.from('#sky', {
        backgroundPositionY: -200,
        duration: 6,
    })

    gsap.from('#mountains', {
        backgroundPositionY: -600,
        duration: 6,
    })
    gsap.from('#man', {
        backgroundPositionY: 900,
        duration: 6,
    })

  });