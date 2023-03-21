import { gsap } from 'gsap';

const quoteContent = document.querySelector('[data-hero-quote]')

const tl = gsap.timeline({ repeat: -1, repeatRefresh: true })

if (quoteContent) {
    const quotes = quoteContent.querySelectorAll('p')

    quotes.forEach((q, i) => tl
        .to(q, { opacity: 1, duration: 0.200 })
        .to(q, { opacity: 0 }, `+=${i * 5}`))
}

quoteContent.addEventListener('mouseenter', () => {
    tl.pause()
})
quoteContent.addEventListener('mouseleave', () => {
    tl.resume()
})
