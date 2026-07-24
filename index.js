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
  if (keyPressDisplay) {
    keyPressDisplay.textContent = event.key
  }
}

// Shows real-time input in a paragraph as the user types into a text field
function displayUserInput() {
  const textInput = document.getElementById('textInput')
  const textInputDisplay = document.getElementById('textInputDisplay')
  if (textInput && textInputDisplay) {
    textInputDisplay.textContent = textInput.value
  }
}

// Attaches all event listeners, guarding against missing elements
// so one missing element can't prevent the others from being wired up
function setupEventListeners() {
  const changeColorButton = document.getElementById('changeColorButton')
  if (changeColorButton) {
    changeColorButton.addEventListener('click', changeBackgroundColor)
  }

  document.body.addEventListener('dblclick', resetBackgroundColor)

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