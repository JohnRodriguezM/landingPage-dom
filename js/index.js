const $button = document.getElementById('btn-hamburger')
const $div =document.querySelector('.mainContainer')
const $ul = document.getElementById('ul-container')

const activeButton = () => {
    $button.classList.toggle('is-active')
    $button.classList.toggle('hidden')
}
$button.addEventListener('click',activeButton)



$button.addEventListener('click',()=>{
    $ul.classList.toggle('visible')
    $ul.classList.toggle('invisible')
})





