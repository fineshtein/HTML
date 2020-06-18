const but = document.querySelector('.but');
const out = document.querySelector('.out');

but.onclick = () => {
   fetch('/serviceavailable/')
      .then(data => {
         return data.text();
      })
      .then(data => {
         data = JSON.parse(data);
         console.log(data.isSucceeded); // получили значение из JSON первого запроса

         if (data.isSucceeded) {
            let getInfo = new Promise((resolve, reject) => { // формируем 2 параллельных запроса, если isSucceeded = true
               fetch('/getinfo/')
                  .then(data => {
                     resolve(data.json());
                  })
                  .catch(err => console.log('Server Error -' + err))
            })

            let getDescription = new Promise((resolve, reject) => {
               fetch('/getdescription/')
                  .then(data => {
                     resolve(data.json());
                  })
                  .catch(err => console.log('Server Error -' + err))
            })

            Promise.all([getInfo, getDescription]).then(val => { // обработка полученных promisов

               (val[0].isSucceeded) ? out.innerHTML += val[0].text + '<br>': console.log('Server Error');
               (val[1].isSucceeded) ? out.innerHTML += val[1].text: console.log('Server Error');

            });

         } else {
            out.textContent = 'Произошла ошибка'; // если isSucceeded = false - выдает сообщение об ошибке
         }
      })

      .catch(() =>
         out.textContent = 'Произошла ошибка');

}