const quoteContent = document.querySelector('[data-hero-quote]')
const quotes = quoteContent.querySelectorAll('p')
const quotesCount = quotes.length

let currentIdx = 0

setInterval(() => {
    quotes.forEach(q => {
        q.style.opacity = '0';
        q.style.zIndex = 0
    })

    quotes.item(currentIdx).style.opacity = '1'
    quotes.item(currentIdx).style.zIndex = 1
    // quotes.forEach(quote => quote.setAttribute('hidden', true))
    // quotes.item(currentIdx).removeAttribute('hidden')

    currentIdx++

    if (currentIdx > quotesCount - 1) {
        currentIdx = 0
    }
}, 5000)
