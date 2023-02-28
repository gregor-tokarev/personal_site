const projectAside = document.querySelector('.project-aside')

if (projectAside) {
    projectAside.addEventListener('touchstart', _ => {
        document.body.style.overflowY = 'hidden'
    })

    projectAside.addEventListener('touchend', _ => {
        document.body.style.overflowY = 'unset'
    })

    projectAside.addEventListener('swiped-up', _ => {
        projectAside.classList.add('project-aside--open')
    })

    projectAside.addEventListener('swiped-down', _ => {
        projectAside.classList.remove('project-aside--open')
    })
}
