
const fitnessDiv = document.querySelector('#fitness')
const fitnessDescription = document.querySelector('.fitness-description')

const sewingDiv = document.querySelector('#sewing')
const sewingDescription = document.querySelector('.sewing-description')

const readingDiv = document.querySelector('#reading')
const readingDescription = document.querySelector('.reading-description')

function handleFitnessClick(e) {
  console.log(e)
  fitnessDescription.classList.toggle('show')
}

function handleSewingClick(e) {
  console.log(e)
  sewingDescription.classList.toggle('show')
}

function handleReadingClick(e) {
  console.log(e)
  readingDescription.classList.toggle('show')
}

fitnessDiv.addEventListener('click', handleFitnessClick)
sewingDiv.addEventListener('click', handleSewingClick)
readingDiv.addEventListener('click', handleReadingClick)
