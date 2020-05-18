function validate(data) {
    const { login, password, confirmPassword, license, firstName, lastName, gender } = data;

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (login === 'beeline' || login ===  'beeinterns' || login === 'bee') { 
        alert('Логин занят, введите другой логин');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!firstName || !lastName ) {
        alert('Введите имя и фамилию');
    } else if (!license) {
        alert('Необходимо согласие');
    } else if (gender == 'male') {
        alert(`Уважаемый ${firstName}, заявка создана`);
    } else {
         alert(`Уважаемая ${firstName}, заявка создана`);
    }    
}
