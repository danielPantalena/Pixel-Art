// buttons receiving colors
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const inputsArray = [input1, input2, input3, input4, input5, input6];

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const buttonsArray = [button1, button2, button3, button4, button5, button6];

function colorToButton() {
  for (let i in inputsArray) {
    buttonsArray[i].style.backgroundColor = inputsArray[i].value;
  }
}

colorToButton();

for (let input of inputsArray) {
  input.addEventListener('input', colorToButton);
}
// remove and add class selected
const divButtons = document.getElementById('buttons');
divButtons.addEventListener('click', (e) => {
  if (e.target !== divButtons) {
    document.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  }
})
// paint the pixel board with the color that have the selected class
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', (event) => {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor = selectedColor.style.backgroundColor;
});
// clear the board
const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});
// Pixel and Board Size
const boardSize = document.getElementById('board-size');
const pixelSize = document.getElementById('pixel-size');
boardSize.value = 5;
pixelSize.value = 40;

function adjustBoard() {
  let pixel = pixelSize.value + 'px';
  let board = (boardSize.value * pixelSize.value + boardSize.value * 2) + 'px';
  let numberOfPixels = boardSize.value * boardSize.value;
  pixelBoard.innerHTML = null;
  pixelBoard.style.width = board;
  pixelBoard.style.height = board;
  for (let i = 0; i < numberOfPixels; i += 1) {
    let newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    newPixel.style.width = pixel;
    newPixel.style.height = pixel;
    document.getElementById('pixel-board').appendChild(newPixel);
  }
}

pixelSize.addEventListener('input', adjustBoard)
boardSize.addEventListener('input', adjustBoard)





