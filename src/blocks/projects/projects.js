import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const projects = document.querySelectorAll('.project')

function getTotalScroll() {
    return Array.from(projects).reduce((acc, project) => {
        acc += project.offsetHeight
        return acc
    }, 0)
}

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects__inner',
        start: 'top +=15px',
        end: `+=${getTotalScroll()}px bottom`,
        scrub: true,
        pin: true
    }
})

projects.forEach((project, idx) => {
    const nextSection = projects[idx + 1]
    if (!nextSection) return
    tl.from(nextSection, { yPercent: 100, ease: 'linear' })
})
