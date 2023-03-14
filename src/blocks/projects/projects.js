import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const projects = document.querySelectorAll('.project')

function getTotalScroll() {
    return Array.from(projects).reduce((acc, project) => {
        acc += project.querySelector('.project__wrapper').offsetHeight
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
    tl.fromTo(nextSection, { maxHeight: '0%' }, { maxHeight: '100%', ease: 'linear' })
})

// const bottomPadding = document.offsetWidth > 680 ? 80 : 80;
const bottomPadding = 80

projects.forEach(project => {
    const body = project.querySelector('.project__body')
    body.style.top = `${project.offsetHeight - (body.offsetHeight + bottomPadding)}px`
})
