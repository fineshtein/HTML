const border = document.querySelector('.border');

inptWidth.oninput = function () {
   let inptWidth = document.querySelector('.inptWidth');
   border.style.width = this.value + 'px';
}

inptHeight.oninput = function () {
   let inptHeight = document.querySelector('.inptHeight');
   border.style.height = this.value + 'px';
}

radius.oninput = function () {
   let radius = document.querySelector('.radius');
   border.style.borderRadius = this.value + 'px';
}

rotation.oninput = function () {
   let rotation = document.querySelector('.rotation');
   border.style.transform = `rotate(${this.value}deg)`;
}

wordFontSize.oninput = function () {
   let wordFontSize = document.querySelector('.wordFontSize');
   border.style.fontSize = this.value + 'px';
}

document.querySelector('.button').onclick = showWord;

function showWord() {
   let word = document.querySelector('.input2').value;
   border.textContent = word;
}