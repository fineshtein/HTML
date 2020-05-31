document.getElementById('inpt').oninput = borderRadius;
let divBorder = document.getElementById('border');

function borderRadius() {
   divBorder.style.borderRadius = this.value + 'px';
}

document.querySelector('.button').onclick = showWord;

function showWord() {
   let word = document.querySelector('.input2').value;
   divBorder.textContent = word;
}

document.getElementById('wordFontSize').oninput = wordFontSize;

function wordFontSize() {
   let font = document.getElementById('wordFontSize').value;
   divBorder.style.fontSize = font + 'px';
}

document.getElementById('inptWidth').oninput = changeWidth;

function changeWidth() {
   let divWidth = document.getElementById('inptWidth').value;
   divBorder.style.width = divWidth + 'px';
}

document.getElementById('inptHeight').oninput = changeHeight;

function changeHeight() {
   let divHeight = document.getElementById('inptHeight').value;
   divBorder.style.height = divHeight + 'px';
}

document.getElementById('rotation').oninput = rotateDiv;

function rotateDiv() {
   let rotateDiv = document.getElementById('rotation').value;
   divBorder.style.transform = 'rotate(' + rotateDiv + 'deg)';
}

