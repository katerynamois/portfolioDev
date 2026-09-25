import './style.css'

const btn = document.getElementById('burgerBtn')
const menu = document.getElementById('mobileNav')

function setOpen(open) {
  btn.setAttribute('aria-expanded', open)
  btn.setAttribute('aria-label', open ? 'Luk menu' : 'Åbn menu')
  menu.classList.toggle('hidden', !open)
  menu.classList.toggle('flex', open)
}

btn.addEventListener('click', () => {
  setOpen(btn.getAttribute('aria-expanded') !== 'true')
})

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setOpen(false))
})
