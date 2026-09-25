import './scss/main.scss'

const burger = document.getElementById('burgerBtn')
const menu = document.getElementById('mainNav')

function setOpen(open) {
  burger.classList.toggle('is-active', open)
  menu.classList.toggle('is-active', open)
  burger.setAttribute('aria-expanded', open)
  burger.setAttribute('aria-label', open ? 'Luk menu' : 'Åbn menu')
}

burger.addEventListener('click', () => {
  setOpen(!burger.classList.contains('is-active'))
})

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setOpen(false))
})
