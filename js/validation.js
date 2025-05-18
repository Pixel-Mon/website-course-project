document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calcForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const age = parseInt(this.age.value);
    const experience = parseInt(this.experience.value);
    const vehicleType = this.vehicleType.value;
    const result = document.getElementById("result");

    result.style.color = "red";
    result.textContent = "";

    // Валидация
    if (isNaN(age) || isNaN(experience)) {
      result.textContent = "Пожалуйста, введите корректные числовые значения.";
      return;
    }

    if (age < 16) {
      result.textContent = "Возраст водителя должен быть не менее 16 лет.";
      return;
    }

    if (age - experience < 16) {
      result.textContent = "Стаж не может начинаться раньше достижения 16 лет.";
      return;
    }

    if (age < 18 && vehicleType !== "мотоцикл") {
      result.textContent = "До 18 лет можно выбрать только мотоцикл.";
      return;
    }

    // Расчёт стоимости
    let base = 100;
    if (vehicleType === "грузовой") base += 50;
    if (vehicleType === "мотоцикл") base -= 20;
    if (age < 25) base += 30;
    if (experience < 5) base += 40;

    result.style.color = "#003366";
    result.textContent = `Примерная стоимость: ${base} BYN`;
  });
});
