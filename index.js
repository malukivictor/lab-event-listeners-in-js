// Changes the background color of the page when a button is clicked
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}
 
// Clears the body background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}
 
// Updates a paragraph to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay')
  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`
  }
}
 
// Shows real-time input in a paragraph as the user types into a text field
function displayUserInput() {
  const textInput = document.getElementById('textInput')
  const textInputDisplay = document.getElementById('textInputDisplay')
  if (textInput && textInputDisplay) {
    textInputDisplay.textContent = `You typed: ${textInput.value}`
  }
}
 
// Attaches all event listeners
function setupEventListeners() {
  const changeColorButton = document.getElementById('changeColorButton')
  if (changeColorButton) {
    changeColorButton.addEventListener('click', changeBackgroundColor)
  }
 
  const resetColorButton = document.getElementById('resetColorButton')
  if (resetColorButton) {
    resetColorButton.addEventListener('dblclick', resetBackgroundColor)
  }
 
  document.addEventListener('keydown', displayKeyPress)
 
  const textInput = document.getElementById('textInput')
  if (textInput) {
    textInput.addEventListener('input', displayUserInput)
  }
}
 
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}
 
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
 