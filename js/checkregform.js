document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.register-form-container');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm');
    const registerBtn = form.querySelector('button.button');
  
    registerBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Остановим переход по ссылке
  
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const confirm = confirmInput.value;
  
      // Простая проверка email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!emailRegex.test(email)) {
        alert('Введите корректный email.');
        return;
      }
  
      if (password.length < 6) {
        alert('Пароль должен быть не менее 6 символов.');
        return;
      }
  
      if (password !== confirm) {
        alert('Пароли не совпадают.');
        return;
      }
  

      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      // Всё в порядке — переход на аккаунт
      window.location.href = 'account.html';
    });
  });
  