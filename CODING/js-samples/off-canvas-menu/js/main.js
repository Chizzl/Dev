/* 
Select the button element
>> When you work with other developers, it's best practise to use a dedicated JavaScript class, like .jsToggleMenu, to ensure others don't break your component if they change the CSS
*/
const menuButton = document.querySelector('.jsToggleMenu');  

// Add an event listener to the button
menuButton.addEventListener('click', e => {
    // Add css class to the body element
    const body = document.querySelector('body')
    body.classList.toggle('offsite-is-open')
})