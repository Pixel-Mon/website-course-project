document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('userEmailInput');
    const passwordInput = document.getElementById('userPasswordInput');
    const editBtn = document.getElementById('editProfileBtn');
    const saveBtn = document.getElementById('saveProfileBtn');
  
    // Загрузка данных из localStorage
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
  
    if (savedEmail) emailInput.value = savedEmail;
    if (savedPassword) passwordInput.value = savedPassword;
  
    editBtn.addEventListener('click', () => {
      emailInput.disabled = false;
      passwordInput.disabled = false;
      saveBtn.style.display = 'inline-block';
      editBtn.style.display = 'none';
    });
    const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPassword');
      window.location.href = 'forma.html'; //выход на страницу формы
    });
    
    saveBtn.addEventListener('click', () => {
      const newEmail = emailInput.value.trim();
      const newPassword = passwordInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!emailRegex.test(newEmail)) {
        alert('Введите корректный email.');
        return;
      }
  
      if (newPassword.length < 6) {
        alert('Пароль должен быть не менее 6 символов.');
        return;
      }
  
      localStorage.setItem('userEmail', newEmail);
      localStorage.setItem('userPassword', newPassword);
  
      emailInput.disabled = true;
      passwordInput.disabled = true;
      saveBtn.style.display = 'none';
      editBtn.style.display = 'inline-block';
  
      alert('Данные успешно сохранены!');

    });
  });
  