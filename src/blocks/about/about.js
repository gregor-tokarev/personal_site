import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin, ScrollTrigger)

const aboutSection = document.querySelector('.about')

const paragraphs = aboutSection.querySelectorAll('p')

const pageHeight = window.innerHeight;

paragraphs.forEach(p => {
    const text = p.textContent
    gsap.set(p, { height: p.offsetHeight, text: '' });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: p,
            start: `top-=${pageHeight / 3}px center`,
            end: `bottom-=${pageHeight / 3}px center`,
            scrub: true
        }
    })

    for (let i = 0; i < text.length; i++) {
        tl.to(p, { duration: 10, text: text.slice(0, i + 1), ease: 'none' })
    }
})
