document.getElementById('calcFormHome')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const area = parseInt(this.area.value);
    const homeType = this.homeType.value;
    const value = parseInt(this.value.value);
  
    let base = area * 1.2;
    if (homeType === 'дом') base += 50;
    base += value * 0.005;
  
    document.getElementById('resultHome').innerText = `Примерная стоимость: ${Math.round(base)} BYN`;
  });
  