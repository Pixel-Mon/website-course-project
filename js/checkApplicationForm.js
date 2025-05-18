document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("insuranceForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const phone = form.phone.value.trim();
    const email = form.email.value.trim();

    // Валидация телефона (разрешаем +375..., 8029..., и т.п.)
    if (!/^\+?\d{9,15}$/.test(phone)) {
      alert("Введите корректный номер телефона (только цифры, возможно с '+').");
      return;
    }

    // Валидация email — только адреса, оканчивающиеся на .com
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !email.endsWith(".com")) {
      alert("Email должен быть корректным и заканчиваться на .com");
      return;
    }

    const formData = {
      fullname: form.fullname.value.trim(),
      phone,
      email,
      insuranceType: form.insuranceType.value,
      message: form.message.value.trim()
    };

    console.log("Форма отправлена:", formData);

    successMessage.style.display = "block";
    form.reset();
  });
});
