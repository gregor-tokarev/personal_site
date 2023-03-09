import 'swiped-events'

const projectAside = document.querySelector('.project-aside')

if (projectAside) {
    projectAside.addEventListener('touchstart', _ => {
        document.body.style.overflowY = 'hidden'
    })

    projectAside.addEventListener('touchend', _ => {
        setTimeout(() => {
            document.body.style.overflowY = 'unset'
        }, 200)
    })

    projectAside.addEventListener('swiped-up', _ => {
        projectAside.classList.add('project-aside--open')
    })

    projectAside.addEventListener('swiped-down', _ => {
        projectAside.classList.remove('project-aside--open')
    })
}

const gallery = document.querySelector('.project-gallery')
const modal = document.querySelector('.project-modal')

if (gallery) {
    const galleryItems = gallery.querySelectorAll('.project-gallery__slide')

    galleryItems.forEach(item => {
        const imgUrl = item.querySelector('img').getAttribute('src')
        const webpUrl = item.querySelector('source').getAttribute('srcset')

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
