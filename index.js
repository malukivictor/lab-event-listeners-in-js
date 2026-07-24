// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const colors = ['#fce4ec', '#e3f2fd', '#e8f5e9', '#fff3e0', '#ede7f6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay')
  keyPressDisplay.textContent = `Key pressed: "${event.key}" (code: ${event.code})`;
}

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput')
  const textInputDisplay = document.getElementById('textInputDisplay')
  textInputDisplay.textContent = `You typed: ${textInput.value}`;
}

// Function to handle combined interactions on the color button and text input
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

// Function to handle button hover (bonus)
function handleButtonHover(event) {
  event.target.style.opacity = '0.7'
}

// Function to handle button unhover (bonus)
function handleButtonUnhover(event) {
  event.target.style.opacity = '1'
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the button is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)

  // Combine multiple events: layer extra listeners onto existing elements
  document
    .getElementById('changeColorButton')
    .addEventListener('click', handleCombinedInteraction)
  document
    .getElementById('textInput')
    .addEventListener('keydown', handleCombinedInteraction)
  document
    .getElementById('textInput')
    .addEventListener('input', handleCombinedInteraction)

  // Bonus: hover effects on both buttons
  const buttons = [
    document.getElementById('changeColorButton'),
    document.getElementById('resetColorButton'),
  ]
  buttons.forEach((button) => {
    button.addEventListener('mouseover', handleButtonHover)
    button.addEventListener('mouseout', handleButtonUnhover)
  })
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  handleCombinedInteraction,
  handleButtonHover,
  displayUserInput,
  setupEventListeners,
}