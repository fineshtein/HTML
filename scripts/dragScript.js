let dragged;

// действия при захвате элемента мышкой
document.addEventListener("drag", function (event) {
}, false);

document.addEventListener("dragstart", function (event) {
   dragged = event.target;
   // задаем прозрачность перетаскиваемому элементу
   event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
   // убираем прозрачность
   event.target.style.opacity = "";
}, false);

/* действия при размещении элемента в зоне */
document.addEventListener("dragover", function (event) {
   event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
   // подсвечиваем выбранное место размещения
   if (event.target.id == "drop") {
      event.target.style.background = "green";
   } 
}, false);

document.addEventListener("dragleave", function (event) {
   // убираем подсветку dropZone на котором размещается
   if (event.target.id == "drop") {
      event.target.style.background = "";
   }

}, false);

document.addEventListener("drop", function (event) {
   event.preventDefault();
   // перемещение выбранного элемента
   if (event.target.id == "drop") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
   }
}, false);