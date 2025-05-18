document.getElementById('calcFormHealth')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const age = parseInt(this.age.value);
    const coverage = this.coverage.value;
  
    let base = 120;
    if (age > 50) base += 40;
    if (coverage === 'расширенный') base += 80;
  
    document.getElementById('resultHealth').innerText = `Примерная стоимость: ${base} BYN`;
  });
  