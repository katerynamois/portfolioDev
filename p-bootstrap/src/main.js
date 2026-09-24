import './scss/main.scss'
import { Collapse } from 'bootstrap'

// Luk mobilmenuen, når man klikker på et link
const menu = document.getElementById('mainNav')
menu.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    Collapse.getOrCreateInstance(menu, { toggle: false }).hide()
  })
})
