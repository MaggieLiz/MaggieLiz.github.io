
const fitnessDiv = document.querySelector('#fitness')
const fitnessDescription = document.querySelector('.fitness-description')

const sewingDiv = document.querySelector('#sewing')
const sewingDescription = document.querySelector('.sewing-description')

const readingDiv = document.querySelector('#reading')
const readingDescription = document.querySelector('.reading-description')

function handleFitnessClick() {
  fitnessDescription.classList.toggle('show')
  sewingDiv.classList.toggle('hide')
  readingDiv.classList.toggle('hide')
}

function handleSewingClick() {
  sewingDescription.classList.toggle('show')
  fitnessDiv.classList.toggle('hide')
  readingDiv.classList.toggle('hide')
}

function handleReadingClick() {
  readingDescription.classList.toggle('show')
  fitnessDiv.classList.toggle('hide')
  sewingDiv.classList.toggle('hide')
}

fitnessDiv.addEventListener('click', handleFitnessClick)
sewingDiv.addEventListener('click', handleSewingClick)
readingDiv.addEventListener('click', handleReadingClick)
