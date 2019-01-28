// select all accordions
const accordions = document.querySelectorAll('.accordion')

// loop over the accordions and add an event listener on the headers
accordions.forEach(accordion => {
    const accordionHeader = accordion.querySelector('.accordion__header')

    accordionHeader.addEventListener('click', e => {
        accordion.classList.toggle('is-open')
    })
})