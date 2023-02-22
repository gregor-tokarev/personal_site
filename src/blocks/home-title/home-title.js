import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const myItems = gsap.utils.toArray('.home-title');

setTimeout(() => {
    myItems.forEach((item) => {
        gsap.fromTo(item,
            { x: -300 },
            {
                x: 100,
                ease: 'linear',
                scrollTrigger: {
                    trigger: item,
                    start: 'top-=200px bottom',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );
    });
})
