// color inputs and buttons
const input1 = document.getElementById('input1');
input1.value = '#000000'
const input2 = document.getElementById('input2');
input2.value = '#FF0000'
const input3 = document.getElementById('input3');
input3.value = '#FF9300'
const input4 = document.getElementById('input4');
input4.value = '#FFF000'
const input5 = document.getElementById('input5');
input5.value = '#B9FF00'
const input6 = document.getElementById('input6');
input6.value = '#59FF00'
const input7 = document.getElementById('input7');
input7.value = '#00FF55'
const input8 = document.getElementById('input8');
input8.value = '#00FFDC'
const input9 = document.getElementById('input9');
input9.value = '#0055FF'
const input10 = document.getElementById('input10');
input10.value = '#6400FF'
const input11 = document.getElementById('input11');
input11.value = '#C900FF'
const input12 = document.getElementById('input12');
input12.value = '#ffffff'
const inputsArray = [input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12];

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button10 = document.getElementById('button10');
const button11 = document.getElementById('button11');
const button12 = document.getElementById('button12');
const buttonsArray = [button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12];

// buttons receiving colors
function colorToButton() {
  for (let i in inputsArray) {
    buttonsArray[i].style.backgroundColor = inputsArray[i].value;
  }
}

colorToButton();

for (let input of inputsArray) {
  input.addEventListener('input', colorToButton);
}
// button to apear select colors
function appearBlock(elementId) {
  let element = document.getElementById(elementId)
  if (element.style.display === "none") {
    element.style.display = "flex";
  } else {
    element.style.display = "none";
  }
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
  if (event.target !== pixelBoard) {
    const selectedColor = document.querySelector('.selected');
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
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
boardSize.value = 30;
pixelSize.value = 12;

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

adjustBoard();

pixelSize.addEventListener('input', adjustBoard)
boardSize.addEventListener('input', adjustBoard)





