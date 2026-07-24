// Changes the background color of the page when a button is clicked
function changeBackgroundColor() {
  const colors = ['#fce4ec', '#e3f2fd', '#e8f5e9', '#fff3e0', '#ede7f6']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.backgroundColor = randomColor
}
 
// Resets the background color to white
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white'
}
 
// Updates a paragraph to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay')
  keyPressDisplay.textContent = `Key pressed: "${event.key}" (code: ${event.code})`
}
 
// Shows real-time input in a paragraph as the user types into a text field
function displayUserInput() {
  const textInput = document.getElementById('textInput')
  const textInputDisplay = document.getElementById('textInputDisplay')
  textInputDisplay.textContent = `You typed: ${textInput.value}`
}
 
// Integrates button clicks, key presses, and text input into one function
function handleCombinedInteraction(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay')
  const textInput = document.getElementById('textInput')
  const textInputDisplay = document.getElementById('textInputDisplay')
 
  if (event.type === 'click') {
    keyPressDisplay.textContent = 'Color button clicked — background changed!'
  } else if (event.type === 'keydown' && event.key === 'Enter') {
    textInputDisplay.textContent = `Enter pressed! Final value: "${textInput.value}"`
  } else if (event.type === 'input') {
    textInputDisplay.textContent = `Typing: ${textInput.value}`
  }
}
 
// Bonus: highlights a button on mouseover
function handleButtonHover(event) {
  event.target.style.opacity = '0.7'
}
 
// Bonus: restores a button on mouseout
function handleButtonUnhover(event) {
  event.target.style.opacity = '1'
}
 
// Attaches all event listeners
function setupEventListeners() {
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)
 
  document.body.addEventListener('dblclick', resetBackgroundColor)
 
  document.addEventListener('keydown', displayKeyPress)
 
  document.getElementById('textInput').addEventListener('input', displayUserInput)
 
  document
    .getElementById('changeColorButton')
    .addEventListener('click', handleCombinedInteraction)
  document
    .getElementById('textInput')
    .addEventListener('keydown', handleCombinedInteraction)
  document
    .getElementById('textInput')
    .addEventListener('input', handleCombinedInteraction)
 
  const buttons = [
    document.getElementById('changeColorButton'),
    document.getElementById('resetColorButton'),
  ]
  buttons.forEach((button) => {
    button.addEventListener('mouseover', handleButtonHover)
    button.addEventListener('mouseout', handleButtonUnhover)
  })
}
 
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}
 
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  handleCombinedInteraction,
  handleButtonHover,
  handleButtonUnhover,
  setupEventListeners,
}
 