const quoteContent = document.querySelector('[data-hero-quote]')

if (quoteContent) {
    const quotes = quoteContent.querySelectorAll('p')
    const quotesCount = quotes.length

    let currentIdx = 0

    setInterval(() => {
        quotes.forEach(q => {
            q.style.opacity = '0';
        })

        quotes.item(currentIdx).style.opacity = '1'

        currentIdx++

        if (currentIdx > quotesCount - 1) {
            currentIdx = 0
        }
    }, 5000)
}
