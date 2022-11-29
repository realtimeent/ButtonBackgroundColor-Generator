const bgColors = [
  `#111344`,
  `#52154E`,
  `#120D31`,
  `#010400`,
  `#7B0828`,
  `#42033D`,
  `#7371FC`,
  ` #020202`,
  `#EF27A6`,
  `#FABC2A`,
  `#010400`,
  `#6200B3`,
  `#084887`,
  `#A50104`,
]
const randombgColor = () => {
  return Math.floor(Math.random() * bgColors.length)
}
const Btns = document.querySelectorAll('.btns')
const btnsBg = document.querySelector('.btns-bg')

function generatebgColor() {
  Btns.forEach((btn) => {
    btn.style.background = bgColors[randombgColor()]
    btnsBg.style.background = bgColors[randombgColor()]
  })
}

Btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.style.background = bgColors[randombgColor()]
  })
})

window.addEventListener('DOMContentLoaded', () => {
  generatebgColor()
})
btnsBg.addEventListener('click', () => {
  generatebgColor()
})

const bars = document.querySelector('.bars')
const Info = document.querySelector('.info')
const closeBtn = document.querySelector('.close')

bars.addEventListener('click', () => {
  Info.style.display = 'block'
})
closeBtn.addEventListener('click', () => {
  Info.style.display = 'none'
})
