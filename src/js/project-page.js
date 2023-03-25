const projectAside = document.querySelector('.project-aside')

if (projectAside) {
    let startTime = null

    projectAside.addEventListener('touchstart', event => {
        event.stopPropagation()
        event.preventDefault()

        startTime = null
        projectAside.classList.add('project-aside--open')
    })
    document.addEventListener('touchstart', _ => {
        startTime = Date.now()
    })

    document.addEventListener('touchend', _ => {
        const diffTime = Date.now() - startTime

        if (diffTime < 100) {
            projectAside.classList.remove('project-aside--open')
        }

        startTime = null
    })
}

const gallery = document.querySelector('.project-gallery')
const modal = document.querySelector('.project-modal')

if (gallery) {
    const galleryItems = document.querySelectorAll('[data-modal-img]')

    galleryItems.forEach(item => {
        console.log(item)
        const imgUrl = item.getAttribute('src')
        const webpUrl = item.parentNode.querySelector('source').getAttribute('srcset')

        item.addEventListener('click', _ => {
            document.body.style.overflowY = 'hidden'

            modal.querySelector('img').setAttribute('src', imgUrl)
            modal.querySelector('source').setAttribute('srcset', webpUrl)
            modal.classList.add('project-modal--open')
        })
    })

    modal.querySelector('.project-modal__overlay').addEventListener('click', _ => {
        document.body.style.overflowY = 'unset'
        modal.classList.remove('project-modal--open')
    })
}
