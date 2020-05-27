
// кнопка Clear area
document.getElementById('clearArea').onclick = function () {
   location.reload(); 
}

// вращение пропеллера при движении мышки
const mouseMove = document.querySelector('.mouseMove');
let deg = 0;

document.addEventListener('mousemove', (event) => {
   mouseMove.style.transform = 'rotate(' + deg + 'deg)';
   deg += 10;

});

// появление перископа
const wavesImg = document.querySelector('.wavesImg');
const periscope = document.querySelector('.periscope');

wavesImg.onclick = function () {
   let start = Date.now();
   let timer = setInterval(function () {
      let timePassed = Date.now() - start;
      periscope.style.bottom = timePassed / 5 + 'px';
      if (timePassed > 873) clearInterval(timer);
   }, 25);
}

// // перекрашивание кружков в желтый цвет
// function circleClick(event) {
//    if (event.target.classList.contains('dropZone')) {
//       event.target.classList.toggle("yellow");
//    }
// }
// document.querySelector('.smallArea').addEventListener('click', circleClick);

