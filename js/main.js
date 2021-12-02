const navbar = document.querySelector('.navbar')
const navbarUl = document.querySelector('.navbar ul')
const navbarLogo = document.querySelector('.navbar--logo')

window.addEventListener('scroll', ()=>{
  if(window.scrollY>10){
    navbarUl.style.display = 'none'
    navbarLogo.style.display='flex'
    navbar.style.padding = '0.5rem 0'
  }
  else{
    navbar.style.padding = '1rem 0.5rem'
    navbarUl.style.display = 'flex'
    navbarLogo.style.display = 'none'
    navbar.style.height = 'max-content'
  }
})