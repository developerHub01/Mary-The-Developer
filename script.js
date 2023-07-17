const navBarIcon = document.querySelector('.navBarIcon');
const croseIcon = document.querySelector('.croseIcon');
const navBar = document.querySelector('.navBar');

console.log(navBarIcon);

navBarIcon.addEventListener('click', (e)=>{
    navBar.classList.toggle('active');
})

croseIcon.addEventListener('click', ()=>{
    navBar.classList.remove('active');
})