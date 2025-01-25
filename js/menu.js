const bar = document.querySelector('.mobile-svg')
const dropMenu = document.querySelector('.mobile-box')
const mobileClose = document.querySelector('.mobile-close')

bar.onclick = function (){
    dropMenu.classList.toggle('open')
}
mobileClose.onclick = function (){
    dropMenu.classList.toggle('open')
}