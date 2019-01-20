// Select the modal button

const modalButton = document.querySelector('.jsModalOpen')
const modalCloseButton = document.querySelector('.jsModalClose')

// Add an event listener to the modal button
modalButton.addEventListener('click', _ => {
    document.body.classList.add('modal-is-open')
})

// Add an event listener to the modal close icon
modalCloseButton.addEventListener('click', _ => {
    document.body.classList.remove('modal-is-open')
})